import { useState } from "react";
import Ui from "../Ui-container/Index";
import "./Style.css";

interface Contacts {
  name: { first: string; last: string; title: string };
  email: string;
  picture: { medium: string };
}
export default function InputComponent() {
  const [result, setResult] = useState<Contacts[]>([]);
  const [contactLength, setContactLength] = useState<number>();
  const api_url = `https://randomuser.me/api/?results=${contactLength}`;
  let elem: JSX.Element[] = [];

  const handleChange = (e: any) => {
    setContactLength(e.target.value);
  };

  
  async function getapi(url: any) {
    const response = await fetch(url);

    var data = await response.json();

    if (response) {
      setResult(data.results);
    }
    setResult(data.results);
  }

  function handleSubmit() {
    if (contactLength === undefined || contactLength === 0) {
      return;
    } else {
      getapi(api_url);
    }
  }

  for (let r of result) {
    let fullName = "";
    let profileImgae = "";
    fullName = r.name.title + " " + r.name.first + " " + r.name.last;
    profileImgae = r.picture.medium;

    elem.push(
      <Ui
        name={fullName}
        email={r.email}
        profileImg={profileImgae}
      />
    );
  }

  return (
    <div className="supermainContainer">
      <div className="inputContainer">
        <label className="contactText">Contact Length</label><br></br>
        <input
          className="textValue"
          type="text"
          name="contactLength"
          onChange={handleChange}
        /><br></br>
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="uiarea">
       
        <div className="cardUi">
          
          <div>
            {elem}
          </div>

        </div>
      </div>
    </div>
  );
}