import { useState } from 'react';

import maleAvatar from '../../assets/avatars/avatar_male.png';
import femaleAvatar from '../../assets/avatars/avatar_female.png';

const ReferenceItem = ({ data }) => {
  const { FirstName, LastName , Gender, Comment } = data;  
  const imageSrc = Gender === 'male' ? maleAvatar : femaleAvatar;
  const [showAllText, setShowAllText] = useState(false);


  const words = Comment.split(" ");
  const wordsLength = words.length;
  const visibleWords = showAllText ? words : words.slice(0, 20);


  const toggleShowAllText = () => {
    setShowAllText(!showAllText);
  };


 // const idForPost = FullName.toLowerCase().replace(/\s+/g, '_');
  return (
    <div className="reference_item">
       {/*<input type="checkbox" className="read-more-state" id={idForPost} />*/}
    <div className="reference_client">
        <div className="reference_name">
          <p className="reference_firstname">{FirstName}</p>
          <p className="reference_lastname">{LastName}</p> 
        </div>
        <img className="reference_avatar" src={imageSrc} alt="imagen Avatar" />
    </div>
    <p className={`comments words ${showAllText ? "visible" : "hide"}`}>
     {visibleWords.join(" ")}
     {wordsLength > 15 && (
       <button className='show_more' onClick={toggleShowAllText}>
        <p>
         {showAllText ? "Ver menos" : "Ver más"}
        </p>
       </button>
     )}
    </p>
    {/*<label for={idForPost} className="read-more-trigger"></label>*/}
   </div>
  )
}

export default ReferenceItem;
