import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export default () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffff00',
      },
    },
  })
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="success">
        Contained
      </Button>
      <ThemeProvider theme={theme}>
        <Button variant="outlined">Outlined</Button>
      </ThemeProvider>
    </div>
  )
}
