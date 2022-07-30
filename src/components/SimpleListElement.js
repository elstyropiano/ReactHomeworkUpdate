import Button from './Button'
import styled from 'styled-components'
export default ({ index, listElement, list, setList }) => {
  const removeListElement = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  return (
    <S.Li key={index}>
      {listElement}
      <S.ButtonWrapper>
        <S.Button onClick={() => removeListElement(index)}>X</S.Button>
      </S.ButtonWrapper>
    </S.Li>
  )
}

const S = {
  ButtonWrapper: styled.div`
    display: inline-block;
    height: inherit;
    vertical-align: bottom;
  `,
  Li: styled.li`
    margin: 20px 0;
  `,
  Button: styled(Button)`
    background-color: red;
    margin: 0 10px;
  `,
}
