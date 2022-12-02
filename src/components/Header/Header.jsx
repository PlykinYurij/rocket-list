import React, { useEffect, useState } from "react";
import classes from "../../App.module.css"
import { fetchURL } from "../api/api";
import Preloader from "../common/Preloader/Preloader";
import RocketsList from "../RocketsList/RocketsList";
import Select from "../Select";

const Header = (props) => {
    const [launches, setLaunches] = useState([])
    const [rockets, setRockets] = useState([])
    const [selectedRockets, setSelectedRockets] = useState("")
    const [launchSite, setLaunchLaunchSite] = useState([])
    const [selectedLaunchSite, setSelectedLaunchSite] = useState("")
    const [isFetching, setIsFetching] = useState()

    useEffect(() => {
        setIsFetching(true)
        const fetchLaunches = async () => {
            const response = await fetchURL.getRockets()
            const launches = await response.json();
            setIsFetching(false)
            setLaunches(launches)
            const rockets = [...new Set(launches.map(launch => launch.rocket.rocket_name))]
            const launchSite = [...new Set(launches.map(launch => launch.launch_site.site_name))]
            setRockets(rockets)
            setLaunchLaunchSite(launchSite)
        }
        fetchLaunches()
    }, [])

    return (
        <div className={classes.body}>
            <h2 className={classes.header}>{props.title}</h2>
            <div className={classes.select}>
                <Select options={rockets} title={"Rockets"} onSelect={setSelectedRockets} selectedValue={selectedRockets} />
                <Select options={launchSite} title={"Launch Site"} onSelect={setSelectedLaunchSite} selectedValue={selectedLaunchSite} />
            </div>
            {isFetching ? <Preloader /> : null}
            <div>
                <RocketsList launches={launches} selectedRockets={selectedRockets} selectedLaunchSite={selectedLaunchSite} />

            </div>
        </div>
    )
}

export default Header;