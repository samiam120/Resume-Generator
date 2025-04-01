export function GeneralInfo({generalInfo}) {
  return (
    <>
      <div className="general-info">
        <h1>{generalInfo.name}</h1>
        <div className="contact-info">
          <p>📩 {generalInfo.email}</p>
          <p>📞 Phone Number{generalInfo.phone}</p>
          <p>LinkedIn: {generalInfo.linkedIn}</p>
        </div>
      </div>
    </>
  );
}
