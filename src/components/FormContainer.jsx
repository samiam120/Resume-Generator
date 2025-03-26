export function FormContainer() {
  return <div className="form-container"></div>;
}

export function GeneralInformationForm({ generalInfo, setGeneralInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="general-info-form">
      <label htmlFor="form-name">name</label>
      <input
        type="text"
        id="form-name"
        name="name"
        value={generalInfo.name}
        onChange={handleChange}
      />
      <label htmlFor="form-email">email</label>
      <input
        type="email"
        name="email"
        id="form-email"
        value={generalInfo.email}
        onChange={handleChange}
      />
      <label htmlFor="form-phone">phone</label>
      <input
        type="tel"
        id="form-phone"
        name="phone"
        value={generalInfo.phone}
        onChange={handleChange}
      />
      <label htmlFor="form-linkedIn">LinkedIn</label>
      <input
        type="text"
        id="form-linkedIn"
        name="linkedIn"
        value={generalInfo.linkedIn}
        onChange={handleChange}
      />
    </div>
  );
}

export function SummaryForm({ summary, updateSummary }) {
  const changeSummary = (e) => {
    const summary = e.target;
    updateSummary(summary.value);
  };
  return (
    <div className="summary-form">
      <h2>SUMMARY</h2>
      <label htmlFor="textarea">Summary</label>
      <textarea
        id="textarea"
        value={summary}
        onChange={changeSummary}
        rows="4"
        colums="10"
        maxlength="200"
        placeholder="Senior Year student at University X with a focus on Artificial Intelligence and Machine Learning (ML). Interned at X companies and worked on full stack development and ML engineering roles."
      />
    </div>
  );
}
