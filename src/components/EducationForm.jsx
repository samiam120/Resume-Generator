export function EducationForm({ educationInfo, setEducationInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="education-form">
      <h2>EDUCATION</h2>
      <label htmlFor="schoolName">School Name</label>
      <input
        type="text"
        id="schoolName"
        name="schoolName"
        value={educationInfo.schoolName}
        onChange={handleChange}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        value={educationInfo.location}
        onChange={handleChange}
      />
      <label htmlFor="degree">Degree</label>
      <select
        id="degree"
        name="degree"
        value={educationInfo.degree}
        onChange={handleChange}
      >
        <option value="">Select a degree</option>
        <option value="Associate's">Associate's</option>
        <option value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
        <option value="Doctorate">Doctorate</option>
        <option value="Other">Other</option>
      </select>

      <label htmlFor="major">Major</label>
      <input
        type="text"
        id="major"
        name="major"
        value={educationInfo.major}
        onChange={handleChange}
      />
      <label htmlFor="date">Date</label>
      <input
        type="text"
        id="date"
        name="date"
        value={educationInfo.date}
        onChange={handleChange}
        placeholder="e.g., 2018 - 2022"
      />
    </div>
  );
}
