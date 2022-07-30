import styled from 'styled-components'

export default ({ ...rest }) => <S.Input {...rest} />

const S = {
  Input: styled.input`
    border: none;
    border-radius: 10px;
    font-size: 15px;
    padding: 10px 5px;
    width: 200px;
    margin: 0 5px;
    box-sizing: border-box;
    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
  `,
}
