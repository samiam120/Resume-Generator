export function Experience(props) {
  return (
    <div className="experience">
      <h2>EXPERIENCE</h2>
      <hr />
      <div className="job-info">
        <div className="company-details">
          {props.companyName ? props.companyName : "Company Name"}
          <span className="location">Location</span>
          <div className="job-title">
            {props.jobTitle ? props.jobTitle : "Job Title"}
            <span className="date">Date</span>
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
