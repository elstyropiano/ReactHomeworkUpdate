import InputsDialog from '../InputsDialog'
import Button from '../Button'
import styled from 'styled-components'

export default ({
  technology,
  setTechnology,
  seniority,
  setSeniority,
  message,
  setMessage,
  value,
  setValue,
}) => (
  <>
    <S.MainWrapper>
      <S.InputsWrapper>
        <InputsDialog
          setMessage={setMessage}
          message={message}
          technology={technology}
          setTechnology={setTechnology}
          seniority={seniority}
          setSeniority={setSeniority}
        />
        <S.Button
          disabled={technology === '' || seniority === '' || message === ''}
          onClick={() => {
            setValue(`${seniority} ${technology} : ${message}`)
            setMessage('')
            setSeniority('')
            setTechnology('')
          }}
        >
          Ok
        </S.Button>
      </S.InputsWrapper>
      <S.SelectedOptions>{value.toUpperCase()}</S.SelectedOptions>
    </S.MainWrapper>
  </>
)

const S = {
  MainWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    height: 100%;
  `,
  InputsWrapper: styled.div`
    display: flex;

    align-items: baseline;
    margin: 0 0 40px 0;
  `,
  Button: styled(Button)`
    padding: 13px 40px; ;
  `,
  SelectedOptions: styled.div`
    font-size: 50px;
    color: #2b6d46;
  `,
}
