import Button from './Button'
import styled from 'styled-components'
import SimpleListElement from './SimpleListElement'

export default ({ list, setList }) =>
  list.length !== 0 && (
    <S.WrapperForList>
      <S.WrapperSimpleElement>
        <ul>
          {list.map((listElement, index) => (
            <SimpleListElement
              key={index}
              listElement={listElement}
              list={list}
              setList={setList}
            />
          ))}
        </ul>
      </S.WrapperSimpleElement>
      <div>
        <S.Button onClick={() => setList([])}>CLEAR LIST</S.Button>
      </div>
    </S.WrapperForList>
  )

const S = {
  WrapperForList: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 30px;
    width: 80vw;
    word-break: break-word;
  `,
  Button: styled(Button)`
    background-color: lightgreen;
  `,
  WrapperSimpleElement: styled.div`
    width: 100%;
  `,
}
