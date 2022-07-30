import React, { useState } from 'react'
import Input from '../Input'
import ListTodo from '../ListTodo'
import Button from '../Button'
import styled from 'styled-components'
import ButtonChangeLogo from '../ButtonChangeLogo'

export default ({ setLogo, logo, list, setList, setLogoCopy, logoCopy }) => {
  const [inputValue, setInputValue] = useState('')

  const addListElement = () => {
    setList([...list, inputValue])
    setInputValue('')
  }

  return (
    <S.Wrapper>
      <S.WrapperChangeLogo>
        <ButtonChangeLogo
          setLogo={setLogo}
          logo={logo}
          setLogoCopy={setLogoCopy}
          logoCopy={logoCopy}
        />
      </S.WrapperChangeLogo>
      <S.WrapperForTodo>
        <S.Input
          placeholder="ADD ELEMENT TO LIST"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button disabled={inputValue === ''} onClick={addListElement}>
          +
        </Button>
        <Button disabled={inputValue === ''} onClick={() => setInputValue('')}>
          CLEAR FIELD
        </Button>
      </S.WrapperForTodo>
      <ListTodo list={list} setList={setList} />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  `,
  WrapperChangeLogo: styled.div`
    margin: 5px 10px;
    width: 100%;
  `,
  WrapperForTodo: styled.div`
    display: flex;
    margin: 50px;
  `,
  Input: styled(Input)`
    width: 50vw;
  `,
}
