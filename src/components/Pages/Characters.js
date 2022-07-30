import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SingleCharacter from '../SingleCharacter'

export default () => {
  const [rickyAndMorty, setRickyAndMorty] = useState(null)

  useEffect(() => {
    ;(async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json()
      setRickyAndMorty(data)
    })()
  }, [])

  return (
    <S.MainWrapper>
      {rickyAndMorty?.results.map(({ id, image, name, status, species }) => (
        <SingleCharacter
          key={id}
          image={image}
          name={name}
          status={status}
          species={species}
        />
      ))}
    </S.MainWrapper>
  )
}

const S = {
  MainWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px;
  `,
}
