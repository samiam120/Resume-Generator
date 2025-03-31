export default function GeneralInfoForm({ generalInfo, setGeneralInfo }) {

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