import '../../../style/contactStyle/textArea.css';

const TextArea = ({ setTextareaValue, textareaValue }) => {
  const showDataFromTextArea = (event) => setTextareaValue(event.target.value);
  return (
    <div>
      <textarea
        maxLength="1000"
        onChange={showDataFromTextArea}
        placeholder="Write message"
        value={textareaValue}
      />
    </div>
  );
};

export default TextArea;
