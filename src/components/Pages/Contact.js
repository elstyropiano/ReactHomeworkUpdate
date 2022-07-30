import { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Input from '../Input'
import MessageAreaContact from '../MessageAreaContact'
import TextArea from '../TextArea'

export default ({ form, setForm }) => {
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [submited, setSubmited] = useState(false)

  const showDataForm = (event) => {
    event.preventDefault()
    validate(inputValue)
  }
  const validate = (inputValue) => {
    const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!regexp.test(inputValue)) {
      setSubmited(true)
      return
    }
    setSubmited(false)
    setForm({
      ...form,
      ...form,
      inputValue,
      textareaValue,
    })
    setInputValue('')
    setTextareaValue('')
  }

  return (
    <S.MainWrapper>
      <form onSubmit={showDataForm}>
        <div>
          <TextArea
            textareaValue={textareaValue}
            setTextareaValue={setTextareaValue}
          />
          <S.InputAndButtonsWrapper>
            <S.Input
              placeholder="adress email"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <Button
              disabled={inputValue === '' || textareaValue === ''}
              type="submit"
            >
              SEND MESSAGE
            </Button>
            <Button
              disabled={inputValue === '' && textareaValue === ''}
              onClick={() => {
                setInputValue('')
                setTextareaValue('')
              }}
            >
              CLEAR FIELD
            </Button>
          </S.InputAndButtonsWrapper>
          {submited && (
            <S.Warning>this is not a valid email format !!</S.Warning>
          )}
        </div>
      </form>
      <MessageAreaContact form={form} />
    </S.MainWrapper>
  )
}

const S = {
  MainWrapper: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    height: 100%;
  `,
  InputAndButtonsWrapper: styled.div`
    display: flex;
    margin-top: 5px;
    width: 600px;

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
      width: 60vw;
    }
  `,
  Warning: styled.div`
    color: red;
    margin: 10px 0;
  `,
  Input: styled(Input)`
    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
  `,
}
