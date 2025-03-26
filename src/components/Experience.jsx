export function Experience(props) {
  return (
    <div className="experience">
      <h2>EXPERIENCE</h2>
      <hr />
      <div className="job-info">
        <p>
          {props.jobTitle ? props.jobTitle : "Job Title"} <span>Location</span>
        </p>
      </div>
    </div>
  );
}
