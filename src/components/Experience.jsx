export function Experience({experienceInfo}) {
  const bullets = experienceInfo.responsibilities.map((responsibility) => <li key={responsibility.id}>{responsibility.text}</li>)
  return (
    <div className="experience">
      <h2>EXPERIENCE</h2>
      <hr />
      <div className="job-info">
        <div className="company-details">
          {experienceInfo.companyName ? experienceInfo.companyName : "Company Name"}
          <span className="location">{experienceInfo.location ? experienceInfo.location : "Location"}</span>
          <div className="job-title">
            {experienceInfo.jobTitle ? experienceInfo.jobTitle : "Job Title"}
            <span className="date">{experienceInfo.date ? experienceInfo.date : "Date"}</span>
          </div>
        </div>
        <ul>
          {bullets}
        </ul>
      </div>
    </div>
  );
}
