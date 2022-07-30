import Button from './Button'

export default ({ setLogo, logo, logoCopy, setLogoCopy }) => {
  const handleButton = () => {
    setLogo(logo === 'LOGO' ? 'NEW LOGO' : 'LOGO')
    setLogoCopy(logoCopy === 'LOGO' ? 'NEW LOGO' : 'LOGO')
  }

  return <Button onClick={handleButton}>CHANGE LOGO</Button>
}
