import React from "react"
import classes from "../../App.module.css"
import RocketItem from "./RoketItem/RocketItem"

const RocketsList = ({filteredLaunches}) => {
    const hasLaunches = filteredLaunches.length > 0
    return (
        <div>
            {(!hasLaunches)
                ? <div className={classes.RocketsNotFound} > <h2>Ракет не найдено</h2></div>
                : <RocketItem filteredLaunches={filteredLaunches} />
            }
        </div>
    )
}

export default RocketsList