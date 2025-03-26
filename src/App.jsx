import {GeneralInformationForm} from "./components/FormContainer.jsx";
import {GeneralInfo} from "./components/GeneralInfo.jsx";
import {Summary} from "./components/Summary.jsx";
import {Education} from "./components/Education.jsx";
import {Experience} from "./components/Experience.jsx";
import {Skills} from "./components/Skills.jsx";
import {SummaryForm} from "./components/FormContainer.jsx";
import "./styles.css";
import { useState } from "react";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "John Doe",
    phone: "123456789",
    email: "JohnDOe@gmail.com",
    linkedIn: "LinkedIn.com/johndoe",
  });

  const[summary, updateSummary] = useState("");

  return (
    <div className="container">
      <div className="form-container">
        <GeneralInformationForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <SummaryForm summary={summary} updateSummary={updateSummary}/>
      </div>
      <div className="resume-container">
        <GeneralInfo generalInfo={generalInfo} />
        <Summary summary={summary}/>
        <Education />
        <Experience />
        <Skills />
      </div>
    </div>
  );
}

export default App;
