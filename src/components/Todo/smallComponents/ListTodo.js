import Button from '../../smallComponents/Button';
import '../../../style/todoStyle/listTodo.css';

const ListTodo = ({ list, setList }) => {
  const removeListElement = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  return (
    <>
      {list.length !== 0 && (
        <div className="listTodo">
          <div className="simpleListElement">
            <ul>
              {list.map((listElement, index) => (
                <li key={index}>
                  {listElement}
                  <div className="divForDeleteButtonFromList">
                    <Button onClick={() => removeListElement(index)}>X</Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button className="activeButton" onClick={() => setList([])}>
              CLEAR LIST
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ListTodo;
