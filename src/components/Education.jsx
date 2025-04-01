export function Education({ educationInfo }) {
  return (
    <div className="education">
      <h2>EDUCATION</h2>
      <hr />
      <div className="school-info">
        <span className="school-name">
          {educationInfo.schoolName ? educationInfo.schoolName : ""}
        </span>
        <span className="location">
          {educationInfo.location
            ? educationInfo.location
            : "Location of School"}
        </span>
      </div>
      <div className="degree">
        <span>{educationInfo.degree ? educationInfo.degree + " in " : ""}</span>
        <span>
          {educationInfo.major ? educationInfo.major : "Computer Science"}
        </span>
        <span className="date">
          {educationInfo.date ? educationInfo.date : "2010-2014"}
        </span>
      </div>
    </div>
  );
}
