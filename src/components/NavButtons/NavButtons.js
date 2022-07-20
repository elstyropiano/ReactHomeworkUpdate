import Button from '../smallComponents/Button';
import '../../style/navButtonsStyle/navButtons.css';
const buttons = [
  {
    name: 'About Me',
    color: '#add8e6',
  },
  {
    name: 'Characters',
    color: '#e6adbc',
  },
  {
    name: 'Todo',
    color: '#d7ade6',
  },
  {
    name: 'Contact',
    color: '#bce6ad',
  },
];

const NavButtons = ({ setClickedButton, clickedButton }) => (
  <div className="divForButtons">
    {buttons.map(({ name, color }) => (
      <Button
        style={{
          backgroundColor: clickedButton === name ? color : '#e0dedb',
        }}
        className="navButton"
        key={name}
        onClick={() => setClickedButton(name)}
      >
        {name}
      </Button>
    ))}
  </div>
);

export default NavButtons;
