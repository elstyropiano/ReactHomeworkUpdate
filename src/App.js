import './App.css'
import React, { useState } from 'react'
import styled from 'styled-components'
import AboutMe from './components/Pages/AboutMe'
import Contact from './components/Pages/Contact'
import Characters from './components/Pages/Characters'
import Components from './components/Pages/Components'
import Dialog from './components/Pages/Dialog'
import Footer from './components/Fotter'
import NavButtons from './components/NavButtons'
import Todo from './components/Pages/Todo'

export default () => {
  const [clickedButton, setClickedButton] = useState('About Me')
  const [logo, setLogo] = useState('LOGO')
  const [list, setList] = useState([])
  const [logoCopy, setLogoCopy] = useState('LOGO')
  const [form, setForm] = useState({})
  const [switchState, setSwitchState] = useState(false)
  const [technology, setTechnology] = useState('')
  const [seniority, setSeniority] = useState('')
  const [message, setMessage] = useState('')
  const [value, setValue] = useState('')

  return (
    <S.MainWrapper mode={switchState}>
      <S.NavWrapper mode={switchState}>
        <S.Logo mode={switchState}>{logo}</S.Logo>
        <NavButtons
          setClickedButton={setClickedButton}
          clickedButton={clickedButton}
        />
      </S.NavWrapper>

      {clickedButton === 'Todo' && (
        <Todo
          list={list}
          setList={setList}
          setLogo={setLogo}
          logo={logo}
          setLogoCopy={setLogoCopy}
          logoCopy={logoCopy}
        />
      )}
      {clickedButton === 'About Me' && (
        <AboutMe logo={logo} setLogo={setLogo} logoCopy={logoCopy} />
      )}
      {clickedButton === 'Contact' && <Contact form={form} setForm={setForm} />}
      {clickedButton === 'Characters' && <Characters />}
      {clickedButton === 'Dialog' && (
        <Dialog
          technology={technology}
          setTechnology={setTechnology}
          seniority={seniority}
          setSeniority={setSeniority}
          message={message}
          setMessage={setMessage}
          value={value}
          setValue={setValue}
        />
      )}

      {clickedButton === 'Components' && (
        <Components setSwitchState={setSwitchState} switchState={switchState} />
      )}
      <Footer switchState={switchState} />
    </S.MainWrapper>
  )
}

const S = {
  NavWrapper: styled.div`
    align-items: center;
    background-color: ${(props) => (props.mode ? '#7f8484' : '#191e28')};
    display: flex;
    justify-content: space-between;
  `,
  Logo: styled.div`
    background-color: ${(props) => (props.mode ? '#c6cece' : '#8b89b1')};
    border-top-right-radius: 50px;
    display: flex;
    font-size: 25px;
    justify-content: space-between;
    padding: 15px 20px;
    text-transform: uppercase;
  `,
  MainWrapper: styled.div`
    background-color: ${(props) => (props.mode ? '#c6cece' : '#8b89b1')};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
}
