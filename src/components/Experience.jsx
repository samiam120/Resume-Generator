export function Experience({experienceInfo}) {
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
          <li>accomplished x by doing y measured by z</li>
          <li>accomplished x by doing y measured by z</li>
        </ul>
      </div>
    </div>
  );
}
