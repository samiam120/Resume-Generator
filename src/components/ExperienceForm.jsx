import { v4 as uuidv4 } from "uuid";

export function ExperienceForm({
  job,
  updateJob,
  experienceList,
  setExperienceList,
  responsibility,
  setResponsibility,
}) {
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
      responsibilities: prev.responsibilities.map((r) =>
        r.id === id ? { ...r, text: newText } : r
      ),
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
  const isEditing = experienceList.some((j) => j.id === job.id);

  const handleAddExperience = () => {
    if (isEditing) {
      setExperienceList((prevList) =>
        prevList.map((j) => (j.id === job.id ? job : j))
      );
    } else {
      setExperienceList((prevList) => [...prevList, job]);
    }
    updateJob({
      id: uuidv4(),
      companyName: "",
      location: "",
      jobTitle: "",
      date: "",
      responsibilities: [],
    });
    setResponsibility("");
  };

  const handleDeleteResponsibility = (id) => {
    updateJob((prev) => ({
      ...prev,
      responsibilities: prev.responsibilities.filter((r) => r.id !== id),
    }));
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
      <div className="responsibilities-form-div">
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
            <button
              type="button"
              onClick={() => handleDeleteResponsibility(r.id)}
            >delete</button>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleAddExperience}>
        {isEditing ? "Save Changes" : "Add Experience"}
      </button>
    </div>
  );
}
