export function Skills(props){
    return(
        <div className="skills">
            <h2>SKILLS</h2>
            <hr />
            <p>{!props.skills ? "Skills" : props.skills}</p>
        </div>
    )
}