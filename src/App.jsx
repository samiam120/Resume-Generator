import { v4 as uuidv4 } from "uuid";

import GeneralInfoForm from "./components/GeneralInfoForm.jsx";
import { GeneralInfo } from "./components/GeneralInfo.jsx";
import { Summary } from "./components/Summary.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { Skills } from "./components/Skills.jsx";
import { SummaryForm } from "./components/SummaryForm";
import { EducationForm } from "./components/EducationForm.jsx";
import "./styles.css";
import { useState } from "react";
import { ExperienceForm } from "./components/ExperienceForm.jsx";
import { SkillsForm } from "./components/SkillsForm.jsx";
function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "John Doe",
    phone: "123-456-789",
    email: "jdoe@gmail.com",
    linkedIn: "LinkedIn.com/johndoe",
  });

  const [summary, updateSummary] = useState("This is my Summary");

  const [education, setEducation] = useState({
    schoolName: "Harvard University",
    location: "Cambridge, MA",
    degree: "Bachelor's",
    major: "Computer Science",
    date: "Sep 2025 - Jun 2029",
  });

  const [experienceList, setExperienceList] = useState([]);
  const [currentJob, updateCurrentJob] = useState({
    id: uuidv4(),
    companyName: "",
    location: "",
    jobTitle: "",
    date: "",
    responsibilities: [],
  });

  const [responsibility, setResponsibility] = useState("");

  const handleEditExperience = (id) => {
    const jobToEdit = experienceList.find((job) => job.id == id);
    updateCurrentJob(jobToEdit);
  };

  const handleDeleteExperience = (id) => {
    setExperienceList((prevList) => prevList.filter((job) => job.id !== id));

    // Optional: clear currentJob if you were editing the deleted job
    if (currentJob.id === id) {
      updateCurrentJob({
        id: uuidv4(),
        companyName: "",
        location: "",
        jobTitle: "",
        date: "",
        responsibilities: [],
      });
    }
  };

  const isEditing = experienceList.some((j) => j.id === currentJob.id);

  const jobHasContent =
    currentJob.companyName.trim() !== "" ||
    currentJob.location.trim() !== "" ||
    currentJob.jobTitle.trim() !== "" ||
    currentJob.date.trim() !== "" ||
    currentJob.responsibilities.length > 0 ||
    responsibility.trim() !== "";

    const [skillList, setSkillList] = useState([]);

  return (
    <div className="container">
      <div className="form-container">
        <GeneralInfoForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <SummaryForm summary={summary} updateSummary={updateSummary} />
        <EducationForm
          educationInfo={education}
          setEducationInfo={setEducation}
        />
        <ExperienceForm
          job={currentJob}
          updateJob={updateCurrentJob}
          experienceList={experienceList}
          setExperienceList={setExperienceList}
          responsibility={responsibility}
          setResponsibility={setResponsibility}
        />
        <h2>SKILLS</h2>
        <SkillsForm 
        skillList={skillList}
        setSkillList={setSkillList}
        />
      </div>
      <div className="resume-container">
        <GeneralInfo generalInfo={generalInfo} />
        <Summary summary={summary} />
        <Education educationInfo={education} />
        <h2>EXPERIENCE</h2>
        <hr />
        {experienceList.map((job) => {
          const isBeingEdited = job.id === currentJob.id && isEditing;

          return (
            <Experience
              key={job.id}
              experienceInfo={isBeingEdited ? currentJob : job}
              handleEditExperience={handleEditExperience}
              handleDeleteExperience={handleDeleteExperience}
              isPreviewOnly={false}
            />
          );
        })}

        {!isEditing && jobHasContent && (
          <Experience
            experienceInfo={{
              ...currentJob,
              responsibilityPreview: responsibility,
            }}
            isPreviewOnly={true}
          />
        )}
        <h2>SKILLS</h2>
        <Skills
        skillList={skillList}
        />
      </div>
    </div>
  );
}
export default App;
