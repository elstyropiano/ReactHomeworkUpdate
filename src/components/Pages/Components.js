import styled from 'styled-components'
import ButtonComponents from '../ButtonComponent'
import Slider from '../Slider'
import Switch from '../Switch'

export default ({ setSwitchState, switchState }) => (
  <S.MainWrapper>
    <ButtonComponents />
    <Slider />
    <Switch setSwitchState={setSwitchState} switchState={switchState} />
    <S.TextWrapper>{switchState ? 'LIGHT' : 'DARK'}</S.TextWrapper>
  </S.MainWrapper>
)

const S = {
  MainWrapper: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 50px;
  `,
  TextWrapper: styled.div`
    font-size: 30px;
    font-weight: 500;
    margin: 20px;
  `,
}
