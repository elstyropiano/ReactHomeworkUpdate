import '../../../style/contactStyle/messageAreaContact.css';

const MessageAreaContact = ({ form }) => {
  return (
    <div className="divForMessage">
      {Object.keys(form).length !== 0 && (
        <div>
          <div>
            <span>User:</span>
            {` ${form.inputValue}`}
          </div>
          <div>
            <span>Message:</span>
            {` ${form.textareaValue}`}
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageAreaContact;
