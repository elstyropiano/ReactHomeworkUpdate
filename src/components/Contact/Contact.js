import { useState } from 'react';
import '../../style/contactStyle/contact.css';
import PassingTextForm from '../smallComponents/PassingTextForm';
import MessageAreaContact from './smallComponents/MessageAreaContact';
import TextArea from './smallComponents/TextArea';

const Contact = ({ form, setForm }) => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [submited, setSubmited] = useState(false);

  const showDataForm = (event) => {
    event.preventDefault();
    validate(inputValue);
  };
  const validate = (inputValue) => {
    const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexp.test(inputValue)) {
      setSubmited(true);
      return;
    }
    setSubmited(false);
    setForm({
      ...form,
      ...form,
      inputValue,
      textareaValue,
    });
    setInputValue('');
    setTextareaValue('');
  };

  const showDataFromEmail = (event) => setInputValue(event.target.value);

  return (
    <div className="contactDiv">
      <form onSubmit={showDataForm}>
        <div>
          <TextArea
            textareaValue={textareaValue}
            setTextareaValue={setTextareaValue}
          />
          <div className="divUnderTextarea">
            <PassingTextForm
              buttonType="submit"
              childrenOne="SEND MESSAGE"
              childrenTwo="CLEAR FIELD"
              disabledOne={inputValue === '' || textareaValue === ''}
              disabledTwo={inputValue === '' && textareaValue === ''}
              classNameButton="activeButton"
              placeholder="adress email"
              type="email"
              value={inputValue}
              onChange={showDataFromEmail}
              onClickTwo={() => {
                setInputValue('');
                setTextareaValue('');
              }}
            />
          </div>
          {submited && (
            <div className="warningsDiv">
              this is not a valid email format !!
            </div>
          )}
        </div>
      </form>
      <MessageAreaContact form={form} />
    </div>
  );
};

export default Contact;
