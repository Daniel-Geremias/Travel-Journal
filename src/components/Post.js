import React from "react"

export default function Post(props) {
    return (
        <div className="post">
            <img className="location-img" src={props.imageUrl} alt="location"/>
            <h3 className="country">{props.location}</h3>
            <a className="maps-link" href={props.googleMapsUrl.toString()}>View on Google Maps</a>
            <h2 className="travel-place">{props.title}</h2>
            <h4 className="travel-date">{props.startDate} - {props.endDate}</h4>
            <p className="description">{props.description}</p>
        </div>
    )
}