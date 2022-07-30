import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export default () => (
  <Box width={300}>
    <Slider
      sx={{ margin: '40px 0' }}
      size="medium"
      defaultValue={0}
      aria-label="Small"
      valueLabelDisplay="auto"
      max={200}
    />
  </Box>
)
