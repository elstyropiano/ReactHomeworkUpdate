import Button from './Button'
import styled from 'styled-components'
const buttons = [
  {
    name: 'About Me',
    color: '#add8e6',
  },
  {
    name: 'Characters',
    color: '#e6adbc',
  },
  {
    name: 'Todo',
    color: '#d7ade6',
  },
  {
    name: 'Contact',
    color: '#bce6ad',
  },
  {
    name: 'Dialog',
    color: '#d1dcfb',
  },
  {
    name: 'Components',
    color: '#f9d494',
  },
]

export default ({ setClickedButton, clickedButton }) => (
  <S.MainWrapper>
    {buttons.map(({ name, color }) => (
      <S.Button
        key={name}
        style={{
          backgroundColor: clickedButton === name ? color : '#e0dedb',
        }}
        onClick={() => {
          setClickedButton(name)
        }}
      >
        {name}
      </S.Button>
    ))}
  </S.MainWrapper>
)

const S = {
  MainWrapper: styled.div`
    display: flex;
    padding: 10px;

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
    }
  `,
  Button: styled(Button)`
    min-width: 120px;

    @media only screen and (max-width: 1000px) {
      margin-bottom: 5px;
      width: 300px;
    }
  `,
}
