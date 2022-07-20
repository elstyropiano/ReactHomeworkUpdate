import './App.css';
import React, { useEffect, useState } from 'react';
import NavButtons from './components/NavButtons/NavButtons';
import Todo from './components/Todo/Todo';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Characters from './components/Characters/Characters';

const App = () => {
  const [logo, setLogo] = useState('LOGO');
  const [aboutMeDate, setAboutMeDate] = useState(null);
  const [list, setList] = useState([]);
  const [clickedButton, setClickedButton] = useState('About Me');
  const [rickyAndMorty, setRickyAndMorty] = useState(null);
  const [logoCopy, setLogoCopy] = useState('LOGO');
  const [form, setForm] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/personalData');
      const data = await response.json();
      setAboutMeDate(data);
    })();
  }, []);

  return (
    <div>
      <div className="navBar">
        <div className="logo">{logo}</div>
        <NavButtons
          setClickedButton={setClickedButton}
          clickedButton={clickedButton}
        />
      </div>
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
        <AboutMe
          aboutMeDate={aboutMeDate}
          logo={logo}
          setLogo={setLogo}
          logoCopy={logoCopy}
        />
      )}
      {clickedButton === 'Contact' && <Contact form={form} setForm={setForm} />}
      {clickedButton === 'Characters' && (
        <Characters
          setRickyAndMorty={setRickyAndMorty}
          rickyAndMorty={rickyAndMorty}
        />
      )}
    </div>
  );
};

export default App;
