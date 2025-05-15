import {useState } from 'react';

export default function Player({initialName, symbol, isActive}){
    const [isEditing, setIsEditing] = useState(false);
    const [namePlayer, setNamePlayer] = useState(initialName)
    function handleEdit(){
      setIsEditing(isEditing=>!isEditing)
    }
    function handleChange(event){
      setNamePlayer(event.target.value)
    }
    let editablePlayerName =  <span className="player-name">{namePlayer}</span>
    if(isEditing){
      editablePlayerName = <input type='text' required value={namePlayer} onChange={handleChange}/>
    }
    return(
          <li className={isActive?'active':undefined}>
            <span className="player">  
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing?'Save':'Edit'}</button>
          </li>
    )
}