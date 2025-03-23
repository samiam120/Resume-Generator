import { GeneralInfo } from "./GeneralInfo";
import { Summary } from "./Summary";
import { Education } from "./Education";
import { Experience } from "./Experience";
import {Skills} from "./Skills";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <GeneralInfo name="John Doe" email="JohnDoe@gmail.com" phone="123-456-7890"/>
      <Summary/>
      <Education/>
      <Experience/> 
      <Skills/>
    </div>
  );
}

export default App;
