import React, { useEffect } from 'react';
import '../../../style/charactersStyle/characterList.css';
import SingleCharacter from './SingleCharacter';

const CharacterList = ({ setRickyAndMorty, rickyAndMorty }) => {
  useEffect(() => {
    (async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setRickyAndMorty(data);
    })();
  }, []);

  return (
    <div className="charactersMainWrapper">
      {rickyAndMorty &&
        rickyAndMorty.results.map(({ id, image, name, status, species }) => (
          <SingleCharacter
            id={id}
            image={image}
            name={name}
            status={status}
            species={species}
          />
        ))}
    </div>
  );
};

export default CharacterList;
