import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export function ExperienceForm({
  job,
  updateJob,
  setExperienceList,
}) {
  const [responsibility, setResponsibility] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleUpdateResponsibility = (id, newText) => {
    updateJob((prev) => ({
      ...prev,
      responsibilities: prev.responsibilities.map((r) =>( 
        r.id === id ? { ...r, text: newText } : r
      )),
    }));
  };

  const handleAddResponsibility = () => {
    const newResp = {
      id: uuidv4(),
      text: responsibility,
    };
    updateJob((prevJob) => ({
      ...prevJob,
      responsibilities: [...prevJob.responsibilities, newResp],
    }));
    setResponsibility("");
  };

  const handleAddExperience = () => {
    setExperienceList((prevList) => [...prevList, job]);
    updateJob({ ...job, id: uuidv4() });
    setResponsibility("");
  };

  return (
    <div className="experience-form">
      <h2>EXPERIENCE</h2>
      <label htmlFor="company-name">Company Name</label>
      <input
        type="text"
        id="company-name"
        name="companyName"
        value={job.companyName}
        onChange={handleChange}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        value={job.location}
        onChange={handleChange}
      />
      <label htmlFor="job-title">Job Title</label>
      <input
        type="text"
        id="job-title"
        name="jobTitle"
        value={job.jobTitle}
        onChange={handleChange}
      />
      <label htmlFor="date">Date</label>
      <input
        type="text"
        id="date"
        name="date"
        value={job.date}
        onChange={handleChange}
      />
      <label htmlFor="responsibility">Responsibilities</label>
      <div className="responsibilities-div">
        <input
          type="text"
          id="responsibilities"
          name="responsibilities"
          value={responsibility}
          onChange={(e) => setResponsibility(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAddResponsibility}
          disabled={responsibility === ""}
        >
          Add Responsibility
        </button>
      </div>

      <ul>
        {job.responsibilities.map((r) => (
          <li key={r.id}>
            <input
              value={r.text}
              onChange={(e) => handleUpdateResponsibility(r.id, e.target.value)}
            />
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleAddExperience}>
        Add Experience
      </button>
    </div>
  );
}
