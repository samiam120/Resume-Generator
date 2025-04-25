export function Experience({
  experienceInfo,
  handleEditExperience,
  handleDeleteExperience,
  isPreviewOnly = false,
}) {
  const bullets = experienceInfo.responsibilities.map((responsibility) => (
    <li key={responsibility.id}>{responsibility.text}</li>
  ));

  return (
    <div className="experience">
      <div className="job-info">
        <div className="company-details">
          <div className="company-name">
            {experienceInfo.companyName
              ? experienceInfo.companyName
              : "Company Name"}
            {!isPreviewOnly && (
              <div className="experience-controls">
                <button onClick={() => handleEditExperience(experienceInfo.id)}>
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteExperience(experienceInfo.id)}
                >
                  Delete
                </button>
              </div>
            )}
            <span className="location">
              {experienceInfo.location ? experienceInfo.location : "Location"}
            </span>
          </div>
          <div className="job-title">
            {experienceInfo.jobTitle ? experienceInfo.jobTitle : "Job Title"}
            <span className="date">
              {experienceInfo.date ? experienceInfo.date : "Date"}
            </span>
          </div>
        </div>
        <div className="responsibilities-div">
          <ul>
            {bullets}
            {experienceInfo.responsibilityPreview && (
              <li className="preview-draft">
                {experienceInfo.responsibilityPreview}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
