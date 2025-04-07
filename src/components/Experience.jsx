export function Experience({experienceInfo, handleEditExperience}) {
  const bullets = experienceInfo.responsibilities.map((responsibility) => <li key={responsibility.id}>{responsibility.text}</li>)

  return (
    <div className="experience">
      <div className="job-info">
        <div className="company-details">
          {experienceInfo.companyName ? experienceInfo.companyName : "Company Name"}
          <span className="location">{experienceInfo.location ? experienceInfo.location : "Location"}</span>
          <div className="job-title">
            {experienceInfo.jobTitle ? experienceInfo.jobTitle : "Job Title"}
            <span className="date">{experienceInfo.date ? experienceInfo.date : "Date"}</span>
          </div>
        </div>
        <div className="responsibilities-div">
          <ul>
            {bullets}
            {experienceInfo.responsibilityPreview && (
              <li className="preview-draft">{experienceInfo.responsibilityPreview}</li>
            )}
          </ul>
        </div>
      </div>
      <button onClick={() => handleEditExperience(experienceInfo.id)}>Edit</button>
    </div>
  );
}
