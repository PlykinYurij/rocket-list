import React from "react"
import avatarRocket from "../../../assets/images/avatarRocket4.png"
import classes from "../../../App.module.css"

const RocketItem = ({ filteredLaunches }) => {
    const dateLaunchRockets = (launchDate) => {
        let date = new Date(launchDate)
        return date.toLocaleDateString()
    }
    return (
        <div>
            {filteredLaunches.map((launch, index) => <div key={index} className={classes.container}>
                <div className={classes.containerRocket}>
                    {launch.links.mission_patch_small
                        ? <img src={launch.links.mission_patch_small} className={classes.avatarRocket} />
                        : <img src={avatarRocket} className={classes.avatarRocket} />
                    }
                    <div className={classes.descriptionRocket}>
                        <div className={classes.headerRocket}>
                            <div className={classes.missionName}>{launch.mission_name}</div>
                            <div className={classes.date}>{dateLaunchRockets(launch.launch_date_utc)}</div>
                        </div>
                        <div className={classes.details}>{launch.details || "Upcoming"}</div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default RocketItem