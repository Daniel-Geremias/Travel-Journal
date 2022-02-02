import React from "react"
import { MdLocationOn } from "react-icons/md"

export default function Post(props) {
    return (
        <div className="post">
            <img className="location-img" src={props.imageUrl} alt="location"/>
            <div className="post-details">
                <div className="location-details">
                    <MdLocationOn className="location-pin"/>
                    <h3 className="country">{props.location.toUpperCase()}</h3>
                    <a className="maps-link" href={props.googleMapsUrl.toString()}>View on Google Maps</a>
                </div>
                <h2 className="travel-place">{props.title}</h2>
                <h4 className="travel-date">{props.startDate} - {props.endDate}</h4>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}