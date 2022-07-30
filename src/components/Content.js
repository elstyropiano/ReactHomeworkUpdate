import styled from 'styled-components'
import animal from '../images/animal.jpg'
import { useState, useEffect } from 'react'

export default () => {
  const [aboutMeDate, setAboutMeDate] = useState(null)

  useEffect(() => {
    ;(async () => {
      const response = await fetch('http://localhost:3000/personalData')
      const data = await response.json()
      setAboutMeDate(data)
    })()
  }, [])

  return (
    <S.MainWrapper>
      <S.ImgWrapper>
        <img src={animal} alt="photo" />
      </S.ImgWrapper>
      {aboutMeDate && (
        <S.Description>
          <h1>{`${aboutMeDate.name} ${aboutMeDate.lastName}`}</h1>
          <p>{`Cześć jestem ${aboutMeDate.name} ${aboutMeDate.lastName}. ${aboutMeDate.description}`}</p>
        </S.Description>
      )}
    </S.MainWrapper>
  )
}

const S = {
  MainWrapper: styled.div`
    box-sizing: border-box;
    display: flex;
    height: 60vh;
    margin: 50px 0;
    padding: 0 40px;
    width: 100%;
    @media only screen and (max-width: 1000px) {
      flex-direction: column;
    }
  `,
  ImgWrapper: styled.div`
    display: flex;
    height: 100%;
    flex: 1;
    justify-content: center;
    & img {
      min-width: 673px;
      @media only screen and (max-width: 1000px) {
        max-width: 400px;
        min-width: 400px;
      }
    }
  `,
  Description: styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
    @media only screen and (max-width: 1000px) {
      justify-content: center;
      padding: 0;
      margin: 0;
    }
  `,
}
