import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import styled from 'styled-components'

export default ({ switchState }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
    },
  })

  return (
    <S.Footer mode={switchState}>
      <span>Made by Grzegorz</span>
      <div>
        <a href="https://facebook.com" target="blank">
          <FacebookIcon
            sx={{ margin: '0 10px' }}
            color="primary"
            fontSize="large"
          />
        </a>
        <ThemeProvider theme={theme}>
          <a href="https://github.com" target="blank">
            <GitHubIcon color="primary" fontSize="large" />
          </a>
        </ThemeProvider>
      </div>
    </S.Footer>
  )
}

const S = {
  Footer: styled.div`
    align-items: center;
    background-color: ${(props) => (props.mode ? '#7f8484' : '#191e28')};
    box-sizing: border-box;
    color: lightgray;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  `,
}
