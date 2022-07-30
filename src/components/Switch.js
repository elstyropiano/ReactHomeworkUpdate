import * as React from 'react'
import { styled } from '@mui/system'
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled'

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#6F7E8C',
}

const Root = styled('span')(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 540px;
  height: 220px;
  margin: 10px;
  cursor: pointer;

   @media only screen and (max-width: 1000px) {
    width:300px;
    height:100px;
   }

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
    border-radius: 220px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 270px;
    height: 220px;
    // top: 0px;
    left: 0px;
    border-radius: 220px;
    background-color: #191e28 ;
    position: relative;
    transition: all 200ms ease;

    @media only screen and (max-width: 1000px) {
    width:150px;
    height:100px;
   }
  }
  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left:270px; 
      background-color: #7f8484;

      @media only screen and (max-width: 1000px) {
    left:150px; 
   }
    }

    .${switchUnstyledClasses.track} {
      background: #8b89b1;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `,
)

export default ({ setSwitchState, switchState }) => {
  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } }

  return (
    <div>
      <SwitchUnstyled
        checked={switchState}
        component={Root}
        components={{ Root: 'div' }}
        {...label}
        onChange={() => setSwitchState((prev) => !prev)}
      />
    </div>
  )
}
