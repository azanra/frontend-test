import "./styles.css";
import { useState } from "react";

function ButtonElement({phone_number, description_text, owner_number, contact_text_visit, contact_text_mid, contact_text_owner, viewing_number}) {
  const [displayDescription, setDisplayDescription] = useState(false);
  function displayElement() {
      setDisplayDescription(!displayDescription);
  }
  return (
    <>
        <button onClick={displayElement}>See description</button>
        {displayDescription ? <DescriptionElement style={{opacity: 1}}phone_number={phone_number}
          description_text={description_text}
          owner_number={owner_number}
          contact_text_visit={contact_text_visit}
          contact_text_mid={contact_text_mid}
          contact_text_owner={contact_text_owner}
          viewing_number={viewing_number}/> : null}
    </>
  )
}

function DescriptionElement({phone_number, description_text, owner_number, contact_text_visit, contact_text_mid, contact_text_owner, viewing_number}) {
  function anonNumber(number) {;
    let arr = [];
    arr = number.split('');
    let anonNum = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == " "){
        let copy = arr.splice(i, 1);
        i--;    
      }
      else if(i > 3){
        arr[i] = 'X';
        anonNum[i] = arr[i];                   
      }
      else{
        anonNum[i] = arr[i];
      }
    }     
    anonNum = anonNum.join('');
    return anonNum;
  }

  let anonPhoneNum = anonNumber(phone_number);
  let anonOwnerNum = anonNumber(owner_number);
  let anonViewNum = anonNumber(viewing_number);

  return (
    <>
      <p>Phone number : {anonPhoneNum}</p>
      <p>{description_text}</p>
      <p>{contact_text_visit + anonViewNum + contact_text_mid + anonOwnerNum + contact_text_owner}</p>
    </>
  )
}

export default function ListingAd({ pic, title, address, phone_number, description_text, owner_number, contact_text_visit, contact_text_mid, contact_text_owner, viewing_number}) {

  return (
    <div className="App">
      <img className="mainPic" width="300" height="500" src={pic} />
      <div className="mainContent">
        <h1>{title}</h1>
        <p className="address">{address}</p>
        <ButtonElement phone_number={phone_number} 
                        description_text={description_text} 
                        owner_number={owner_number} 
                        contact_text_visit={contact_text_visit} 
                        contact_text_mid={contact_text_mid} 
                        contact_text_owner={contact_text_owner} 
                        viewing_number={viewing_number}/>
      </div>
    </div>
  );
}

