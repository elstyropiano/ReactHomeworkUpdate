import '../../../style/charactersStyle/singleCharacter.css';
const SingleCharacter = ({ id, image, name, status, species }) => (
  <div className="singleCharacterWrapper">
    <img src={image} alt={name} />
    <div className="dataUnderImg">
      <div>
        <h1>{name}</h1>{' '}
      </div>
      <div>
        <span>Status:</span>
        {status}
      </div>
      <div>
        <span>Species:</span>
        {species}
      </div>
    </div>
  </div>
);

export default SingleCharacter;
