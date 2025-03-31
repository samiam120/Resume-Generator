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
          placeholder="Senior Year student at University X with a focus on Artificial Intelligence and Machine Learning (ML). Interned at X companies and worked on full stack development and ML engineering roles."
        />
      </div>
    );
  }