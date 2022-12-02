import React from "react";
import classes from "../../App.module.css"

const RocketsList = (props) => {
    const dateLaunchRockets = (launchDate) => {
        let date = new Date(launchDate)
        return date.toLocaleDateString()
    }

    const launches = props.launches

    const filterSelected = launches.filter(launch => {
        const rocketFilterPassed = !props.selectedRockets || launch.rocket.rocket_name === props.selectedRockets
        const launchSiteFilterPassed = !props.selectedLaunchSite || launch.launch_site.site_name === props.selectedLaunchSite

        return rocketFilterPassed && launchSiteFilterPassed
    })
    return (
        <div>
            { (!filterSelected[0])
            ? <div>Ракет не найдено</div>
            :  filterSelected.map((launch, index) => <div key={index} className={classes.container}>
                <div className={classes.containerRocket}>
                    <img src={launch.links.mission_patch_small} className={classes.avatarRocket} />
                    <div className={classes.description}>
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

export default RocketsList;