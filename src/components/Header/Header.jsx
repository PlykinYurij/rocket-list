import React from "react"
import classes from "../../App.module.css"
import Select from "../Select/Select"
import Preloader from "../../common/Preloader/Preloader"

const Header = (props) => {
    return (
        <div className={classes.body}>
            <h2 className={classes.header}>{props.title}</h2>
            <div className={classes.select}>
                <Select options={props.rockets}
                    title={"Rockets"}
                    onSelect={props.setSelectedRocket}
                    selectedValue={props.selectedRocket}
                />
                <Select options={props.launchSite}
                    title={"Launch Site"}
                    onSelect={props.setSelectedLaunchSite}
                    selectedValue={props.selectedLaunchSite}
                />
            </div>
            {props.isFetching ? <Preloader /> : null}
        </div>
    )
}

export default Header