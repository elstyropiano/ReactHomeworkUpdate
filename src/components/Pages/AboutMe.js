import React, { useState } from 'react'
import WarningText from '../WarningText'
import Content from '../Content'
import Button from '../Button'
import Input from '../Input'
import styled from 'styled-components'

export default ({ logo, setLogo, logoCopy }) => {
  const [inputValue, setInputValue] = useState('')
  const addTextToLogo = () => {
    setLogo(`${logoCopy} ${inputValue}`)
    setInputValue('')
  }

  return (
    <>
      <S.MainWrapper>
        <Content />
        <S.AddTextToLogoWrapper>
          <S.Input
            placeholder={`add text to logo (${25 - logoCopy.length} signs)`}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <S.Button
            disabled={
              inputValue === '' || logoCopy.length + inputValue.length > 25
            }
            onClick={addTextToLogo}
          >
            ADD TEXT TO LOGO
          </S.Button>
          <S.Button
            disabled={logo.length === logoCopy.length}
            onClick={() => setLogo(logoCopy)}
          >
            CLEAR LOGO
          </S.Button>
        </S.AddTextToLogoWrapper>
        <S.WarningWrapper>
          {logoCopy.length + inputValue.length > 25 && (
            <WarningText logoCopy={logoCopy} inputValue={inputValue} />
          )}
        </S.WarningWrapper>
      </S.MainWrapper>
    </>
  )
}

const S = {
  AddTextToLogoWrapper: styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 0 10px;
    width: 100%;
    @media only screen and (max-width: 1000px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
  Button: styled(Button)`
    @media only screen and (max-width: 1000px) {
      margin-bottom: 5px;
      width: 100%;
    }
  `,
  Input: styled(Input)`
    @media only screen and (max-width: 1000px) {
      margin: 0;
      box-sizing: border-box;
      margin-bottom: 5px;
    }
  `,
  MainWrapper: styled.div`
    align-items: center;
    display: flex;
    justify-content: stretch;
    flex-direction: column;
    @media only screen and (max-width: 1000px) {
    }
  `,
  WarningWrapper: styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-start;
    width: 100%;
  `,
}
