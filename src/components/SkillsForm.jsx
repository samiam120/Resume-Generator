import {useState} from "react";

export function SkillsForm({skillList, setSkillList}){

    const [skill, setSkill] = new useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSkillList([...skillList, skill]);
        setSkill("");
    }

    return(
        <div className="skills-form">
            <label htmlFor="skills-input">skills</label>
            <input
              id="skills=input"
              placeholder=""
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            />
            <button onClick={handleSubmit}>add skill</button>
          </div>
    )
}