import styled from 'styled-components'

export default ({ image, name, status, species }) => (
  <S.MainWrapper>
    <img src={image} alt={name} />
    <S.Description>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <S.Span>Status:</S.Span>
        {status}
      </div>
      <div>
        <S.Span>Species:</S.Span>
        {species}
      </div>
    </S.Description>
  </S.MainWrapper>
)

const S = {
  MainWrapper: styled.div`
    margin: 0 20px 20px 0;
  `,
  Description: styled.div`
    align-items: center;
    border: 1px solid black;
    border-top: none;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    min-height: 180px;
  `,
  Span: styled.span`
    font-weight: 500;
    margin: 0 10px;
  `,
}
