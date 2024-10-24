import "./styles.css";
import { useState } from "react";

function ButtonElement({ phone_number, description_text, owner_number, contact_text_visit, contact_text_mid, contact_text_owner, viewing_number }) {
  const [displayDescription, setDisplayDescription] = useState(false);
  function displayElement() {
    setDisplayDescription(!displayDescription);
  }
  return (
    <>
      <button className="btn-click" onClick={displayElement}>See description</button>
      {displayDescription ? <DescriptionElement style={{ opacity: 1 }} phone_number={phone_number}
        description_text={description_text}
        owner_number={owner_number}
        contact_text_visit={contact_text_visit}
        contact_text_mid={contact_text_mid}
        contact_text_owner={contact_text_owner}
        viewing_number={viewing_number} /> : null}
    </>
  )
}

function DescriptionElement({ phone_number, description_text, owner_number, contact_text_visit, contact_text_mid, contact_text_owner, viewing_number }) {
  const [displayNum, setDisplayNum] = useState(false);
  function displayOri() {
    setDisplayNum(!displayNum);
  }

  function anonNumber(number) {
    ;
    let arr = [];
    arr = number.split('');
    let anonNum = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == " ") {
        let copy = arr.splice(i, 1);
        i--;
      }
      else if (i > 3) {
        arr[i] = 'X';
        anonNum[i] = arr[i];
      }
      else {
        anonNum[i] = arr[i];
      }
    }
    anonNum = anonNum.join('');
    return anonNum;
  }

  let anonPhoneNum = anonNumber(phone_number);
  let anonOwnerNum = anonNumber(owner_number);

  return (
    <>
      <div onClick={displayOri} className="description">
        <p>Phone number : {displayNum ? phone_number : anonPhoneNum}</p>
        <p>{description_text}</p>
        <p>{contact_text_visit + (displayNum ? phone_number : anonPhoneNum) + contact_text_mid + (displayNum ? owner_number : anonOwnerNum) + contact_text_owner}</p>
      </div>
    </>
  )
}

export default function ListingAd({ pic, title, address, project_type, year, ownership_type, psf_min, psf_max, price, subprice_label, availabilities_label, phone_number, description_text, owner_number, contact_text_visit, contact_text_mid, contact_text_owner, viewing_number }) {

  return (
    <div className="App">
      <div className="image-container">
        <div className="svg-container">
          <svg className="left-arrow" width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3169 29.3271C13.6762 29.6709 14.1137 29.8584 14.6137 29.8584C15.6606 29.8584 16.4731 29.0459 16.4731 28.0146C16.4731 27.499 16.27 27.0303 15.9106 26.6709L4.97311 15.9834L15.9106 5.32715C16.27 4.96777 16.4731 4.4834 16.4731 3.9834C16.4731 2.95215 15.6606 2.13965 14.6137 2.13965C14.1137 2.13965 13.6762 2.32715 13.3325 2.6709L1.17624 14.5459C0.738739 14.9521 0.519989 15.4521 0.519989 15.999C0.519989 16.5459 0.738739 17.0146 1.16061 17.4365L13.3169 29.3271Z" fill="white" />
          </svg>
          <svg className="right-arrow" width="17" height="32" viewBox="0 0 17 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.35938 29.8587C2.875 29.8587 3.29688 29.6712 3.65625 29.3275L15.8125 17.4525C16.2344 17.015 16.4531 16.5619 16.4531 15.9994C16.4531 15.4525 16.25 14.9681 15.8125 14.5619L3.65625 2.67125C3.29688 2.3275 2.875 2.14 2.35938 2.14C1.3125 2.14 0.5 2.9525 0.5 3.98375C0.5 4.48375 0.71875 4.96812 1.0625 5.3275L12.0156 16.015L1.0625 26.6712C0.703125 27.0462 0.5 27.4994 0.5 28.015C0.5 29.0462 1.3125 29.8587 2.35938 29.8587Z" fill="white" />
          </svg>
        </div>
        <img className="mainPic" width="300" height="500" src={pic} />
      </div>
      <div className="mainContent">
        <div className="top-part">
          <div className="home-icon">
            icon
          </div>
          <div className="title-part">
            <h1>{title}</h1>
            <p className="address">{address}</p>
          </div>
          <div className="price-part">
            <h2 className="price">{price}</h2>
            <p className="subprice_label">{subprice_label}</p>
          </div>
        </div>
        <div>
          <div className="middle-part">
            <p className="type">{project_type}</p>
            <p className="year">{year}</p>
            <p className="owner-type">{ownership_type}</p>
          </div>
          <p className="available">{availabilities_label}</p>
        </div>
        <div className="bottom-part">
          <ButtonElement phone_number={phone_number}
            description_text={description_text}
            owner_number={owner_number}
            contact_text_visit={contact_text_visit}
            contact_text_mid={contact_text_mid}
            contact_text_owner={contact_text_owner}
            viewing_number={viewing_number} />
        </div>
      </div>
    </div>
  );
}

