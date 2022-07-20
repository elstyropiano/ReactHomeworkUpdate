import React, { useState } from 'react';
import PassingTextForm from '../smallComponents/PassingTextForm';
import WarningText from './smallComponents/WarningText';
import Content from './smallComponents/Content';
import '../../style/aboutMeStyle/aboutMe.css';

const AboutMe = ({ aboutMeDate, logo, setLogo, logoCopy }) => {
  const [inputValue, setInputValue] = useState('');

  const addTextToLogo = () => {
    setLogo(`${logoCopy} ${inputValue}`);
    setInputValue('');
  };

  return (
    <>
      {aboutMeDate && (
        <div className="aboutMeContent">
          <Content aboutMeDate={aboutMeDate} />
          <div className="addLogoTextDiv">
            <PassingTextForm
              childrenOne="ADD TEXT TO LOGO"
              childrenTwo="CLEAR LOGO"
              classNameButton="activeButton"
              disabledOne={
                inputValue === '' || logoCopy.length + inputValue.length > 25
              }
              disabledTwo={logo.length === logoCopy.length}
              onChange={(event) => setInputValue(event.target.value)}
              onClickOne={addTextToLogo}
              onClickTwo={() => setLogo(logoCopy)}
              placeholder={`add text to logo (${25 - logoCopy.length} signs)`}
              value={inputValue}
            />
          </div>
          {logoCopy.length + inputValue.length > 25 && (
            <WarningText logoCopy={logoCopy} inputValue={inputValue} />
          )}
        </div>
      )}
    </>
  );
};
export default AboutMe;
