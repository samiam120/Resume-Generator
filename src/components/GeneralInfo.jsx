export function GeneralInfo({ generalInfo }) {
  return (
    <>
      <div className="general-info">
        <h1>{generalInfo.name}</h1>
        <div className="contact-info">
          <p>📞 {generalInfo.phone}</p>
          <p>📩 {generalInfo.email}</p>
          <p>
            <a href={generalInfo.linkedIn}>{generalInfo.linkedIn}</a>
          </p>
        </div>
      </div>
    </>
  );
}
