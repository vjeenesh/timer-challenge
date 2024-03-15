import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState('Player');
  
  const inputName = useRef();

  function handleNameChange() {
    setPlayerName(inputName.current.value);
    inputName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome { playerName ?? 'Player' }</h2>
      <p>
        <input type="text" ref={inputName} />
        <button onClick={handleNameChange}>Set Name</button>
      </p>
    </section>
  );
}
