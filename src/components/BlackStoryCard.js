import React from 'react'
import './BlackStoryCard.css'

function BlackStoryCard(props) {
    return (
        <div className="outerCard">
            <div className="innerCard">
                <div className="cardTitle">{props.data.title}</div>
                <div className="plot">{props.data.plot}</div>
                <div className="dividerGroup">
                    <div className="divider" />
                    <div className="divider" />
                    <div className="divider" />
                </div>
                <div className="plotReveal">{props.data.plotReveal}</div>
            </div>
        </div>
    )
}

export default BlackStoryCard;