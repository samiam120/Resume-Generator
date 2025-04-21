export function Skills({skillList}){
  const skillItems = skillList.map((skill) => <li>{skill}</li>);
  return (
    <div className="skills">
      <hr />
      <ul>{skillItems}</ul>
    </div>
  );
}
