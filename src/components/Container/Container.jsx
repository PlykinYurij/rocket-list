import React, { useEffect, useState } from "react"
import classes from "../../App.module.css"
import { launchesApi } from "../../api/api"
import RocketsList from "../RocketsList/RocketsList"
import Header from "../Header/Header"
import { useMemo } from "react"

const Container = (props) => {
    const [launches, setLaunches] = useState([])
    const [selectedRocket, setSelectedRocket] = useState("")
    const [selectedLaunchSite, setSelectedLaunchSite] = useState("")
    const [isFetching, setIsFetching] = useState()

    const url = "https://api.spacexdata.com/v3/launches"

    useEffect(() => {
        setIsFetching(true)
        const fetchLaunches = async () => {
            const response = await launchesApi.getLaunches(url)
            const launches = await response.json()
            setIsFetching(false)
            setLaunches(launches)
        }
        fetchLaunches()
    }, [])

    const rockets = useMemo(() => {
        return [...new Set(launches.map(launch => launch.rocket.rocket_name))]
    }, [launches])
    const launchSites = useMemo(() => {
        return [...new Set(launches.map(launch => launch.launch_site.site_name))]
    }, [launches])

    const filteredLaunches = launches.filter(launch => {
        const rocketFilterPassed = !selectedRocket || launch.rocket.rocket_name === selectedRocket
        const launchSiteFilterPassed = !selectedLaunchSite || launch.launch_site.site_name === selectedLaunchSite
        return rocketFilterPassed && launchSiteFilterPassed
    })

    return (
        <div className={classes.body}>
            <Header rockets={rockets}
                launchSite={launchSites}
                setSelectedRocket={setSelectedRocket}
                setSelectedLaunchSite={setSelectedLaunchSite}
                selectedRocket={selectedRocket}
                selectedLaunchSite={selectedLaunchSite}
                isFetching={isFetching}
                title={props.title}
            />
            <div>
                <RocketsList filteredLaunches={filteredLaunches} />
            </div>
        </div>
    )
}

export default Container