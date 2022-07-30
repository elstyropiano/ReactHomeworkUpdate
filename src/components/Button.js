import styled from 'styled-components'

export default ({ children, ...rest }) => (
  <S.Button {...rest}>{children}</S.Button>
)

const S = {
  Button: styled.button`
    background-color: ${(props) => (props.disabled ? '#a9a7a7' : 'lightgreen')};
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    color: ${(props) => (props.disabled ? 'lightgray' : 'black')};
    cursor: pointer;
    font-size: 15px;
    padding: 10px 20px;
    margin: 0 5px;

    &:hover {
      transform: ${(props) => (props.disabled ? 'none' : 'scale(1.1)')};
    }
  `,
}
