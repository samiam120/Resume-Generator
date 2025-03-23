import { GeneralInfo } from "./GeneralInfo"

function App() {

  return (
    <>
    <form action="">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="email">email</label>
      <input type="text" id="email" />
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone"/>
    </form>
    <GeneralInfo/>
    <div className="summary">
      <h2>SUMMARY</h2>
      <p>Summary</p>
    </div>

    <div className="education">
      <h2>EDUCATION</h2>
      <p>Education</p>
    </div>

    <div className="experience">
      <h2>EXPERIENCE</h2>
      <div className="job">

      </div>
    </div>

    <div className="skills">
      <h2>SKILLS</h2>
      <p>Skills</p>
    </div>

    </>
  )
}

export default App
