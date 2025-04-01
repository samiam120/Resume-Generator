export function ExperienceForm({ experienceInfo, updateExperience }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateExperience((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  return (
    <div className="experience-form">
      <h2>EXPERIENCE</h2>
      <label htmlFor="company-name">Company</label>
      <input
        type="text"
        id="company-name"
        name="companyName"
        value={experienceInfo.companyName}
        onChange={handleChange}
      />
      <label htmlFor="company-location">Location</label>
      <input
        type="text"
        id="company-location"
        name="location"
        value={experienceInfo.location}
        onChange={handleChange}
      />
      <label htmlFor="job-title">Job Title</label>
      <input
        type="text"
        id="job-title"
        name="jobTitle"
        value={experienceInfo.jobTitle}
        onChange={handleChange}
      />
      <label htmlFor="company-duration">Date</label>
      <input
        type="text"
        id="company-duration"
        name="date"
        value={experienceInfo.date}
        onChange={handleChange}
      />
    </div>
  );
}
