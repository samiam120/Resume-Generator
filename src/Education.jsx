export function Education(props){
    return(
        <div className="education">
            <h2>EDUCATION</h2>
            <hr />
            <div className="school-info">
                <span className="school-name">{props.schoolName ? props.schoolName : "School Name "}</span>
                <span className="location">Location</span>
            </div>
            <div className="major">
                <span>{"Major "}</span>
                <span>Date</span>
                <p className="relevant-coursework">Relevant Coursework:</p>
            </div>
        </div>
    )
}