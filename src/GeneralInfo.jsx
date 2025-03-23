
export function GeneralInfo(props){
    return(
        <div className="general-info">
            <h1>{props.name ? props.name : "John Doe"}</h1>
            <div className="contact-info">
                <p>{props.email ? props.email : "email"}</p>
                <p>{props.phone ? props.phone : "phone"}</p>
            </div>
        </div>
    )
}