import * as React from 'react'
import { styled } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import NativeSelect from '@mui/material/NativeSelect'
import InputBase from '@mui/material/InputBase'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))

export default ({
  setMessage,
  technology,
  setTechnology,
  seniority,
  setSeniority,
  message,
}) => (
  <>
    <FormControl sx={{ m: 1 }}>
      <InputLabel htmlFor="demo-customized-textbox">Message</InputLabel>
      <BootstrapInput
        id="demo-customized-textbox"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
    </FormControl>
    <FormControl sx={{ m: 1, width: 150 }}>
      <InputLabel id="demo-customized-select-label">Technology</InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={technology}
        onChange={(event) => setTechnology(event.target.value)}
        input={<BootstrapInput />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Html">Html</MenuItem>
        <MenuItem value="Css">Css</MenuItem>
        <MenuItem value="Javascript">Javascript</MenuItem>
        <MenuItem value="React">React</MenuItem>
      </Select>
    </FormControl>
    <FormControl sx={{ m: 1, width: 150 }}>
      <InputLabel htmlFor="demo-customized-select-native">Seniority</InputLabel>
      <NativeSelect
        id="demo-customized-select-native"
        value={seniority}
        onChange={(event) => setSeniority(event.target.value)}
        input={<BootstrapInput />}
      >
        <option aria-label="None" value=""></option>
        <option value="Junior">Junior</option>
        <option value="Mid">Mid</option>
        <option value="Senior">Senior</option>
      </NativeSelect>
    </FormControl>
  </>
)
