import '../../../style/aboutMeStyle/warningText.css';

const WarningText = ({ logoCopy, inputValue }) => (
  <div className="warningText">
    <p>
      {`text is ${
        -25 + logoCopy.length + inputValue.length
      } characters too long`}
    </p>
  </div>
);

export default WarningText;
