import "./styles.css";
import { useState } from "react";

function ButtonElement({description}) {
  const [displayDescription, setDisplayDescription] = useState(false);
  function displayElement() {
      setDisplayDescription(!displayDescription);
  }
  return (
    <>
        <button onClick={displayElement}>See description</button>
        {displayDescription ? <DescriptionElement style={{opacity: 1}} description={description}/> : null}
    </>
  )
}

function DescriptionElement({description}) {
  return (
    <>
    <p className="description">{description}</p>
    </>
  )
}

export default function ListingAd({ pic, title, address, description }) {

  return (
    <div className="App">
      <img className="mainPic" width="300" height="500" src={pic} />
      <div className="mainContent">
        <h1>{title}</h1>
        <p className="address">{address}</p>
        <ButtonElement description={description}/>
      </div>
    </div>
  );
}
