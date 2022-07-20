import Button from './Button';
import Input from './Input';
const PassingTextForm = ({
  inputType,
  onChange,
  placeholder,
  value,
  required,
  classNameButton,
  classNameInput,
  childrenOne,
  childrenTwo,
  disabledOne,
  disabledTwo,
  onClickOne,
  onClickTwo,
}) => (
  <>
    <Input
      inputtype={inputType}
      className={classNameInput}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      required={required}
    />
    <Button
      className={classNameButton}
      disabled={disabledOne}
      onClick={onClickOne}
    >
      {childrenOne}
    </Button>
    <Button
      className={classNameButton}
      disabled={disabledTwo}
      onClick={onClickTwo}
    >
      {childrenTwo}
    </Button>
  </>
);

export default PassingTextForm;
