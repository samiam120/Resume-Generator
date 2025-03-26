import { GeneralInfo } from "./GeneralInfo";
import { Summary } from "./Summary";
import { Education } from "./Education";
import { Experience } from "./Experience";
import {Skills} from "./Skills";
import {GeneralInformationForm } from "./FormContainer";
import "./styles.css";
import {useState} from "react";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name:"",
    phone:"",
    email:"",
    linkedIn:""
  })
  return (
    <>
    <GeneralInformationForm generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
    <div className="resume-container">
      <GeneralInfo generalInfo={generalInfo}/>
      <Summary/>
      <Education/>
      <Experience/> 
      <Skills/>
    </div>
    </>
  );
}

export default App;
