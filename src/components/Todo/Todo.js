import React, { useState } from 'react';
import PassingTextForm from '../smallComponents/PassingTextForm';
import ListTodo from './smallComponents/ListTodo';
import Button from '../smallComponents/Button';
import '../../style/todoStyle/todo.css';

const Todo = ({ setLogo, logo, list, setList, setLogoCopy, logoCopy }) => {
  const [inputValue, setInputValue] = useState('');

  const addListElement = () => {
    setList([...list, inputValue]);
    setInputValue('');
  };

  return (
    <div className="todoDiv">
      <div className="changeLogoDiv">
        <Button
          onClick={() => {
            setLogo(logo === 'LOGO' ? 'NEW LOGO' : 'LOGO');
            setLogoCopy(logoCopy === 'LOGO' ? 'NEW LOGO' : 'LOGO');
          }}
        >
          CHANGE LOGO
        </Button>
      </div>
      <div className="passingText">
        <PassingTextForm
          childrenOne="+"
          childrenTwo="CLEAR FIELD"
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="add Element to list"
          value={inputValue}
          classNameButton="activeButton"
          classNameInput="input"
          disabledOne={inputValue === ''}
          disabledTwo={inputValue === ''}
          onClickOne={addListElement}
          onClickTwo={() => setInputValue('')}
        />
      </div>

      <ListTodo list={list} setList={setList} />
    </div>
  );
};

export default Todo;
