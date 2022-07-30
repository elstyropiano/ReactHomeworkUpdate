import styled from 'styled-components'

export default ({ logoCopy, inputValue }) => (
  <S.MainWrapper>
    <p>
      {`text is ${
        -25 + logoCopy.length + inputValue.length
      } characters too long`}
    </p>
  </S.MainWrapper>
)

const S = {
  MainWrapper: styled.div`
    color: red;
    display: flex;
    padding: 10px 20px;
    width: 100%;

    @media only screen and (max-width: 1000px) {
      justify-content: center;
    }

    & p {
      margin: 10px 0;
    }
  `,
}
