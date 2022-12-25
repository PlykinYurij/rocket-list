import React from "react"
import preloader from "../../assets/images/loader.gif"
import classes from "./Preloader.module.css"

const Preloader = () => {
    return <div className={classes.container}>
        <div className={classes.preloaderImg}><img src={preloader} /></div>
        <div className={classes.preloaderText}>подождите, идет загрузка...</div>
    </div>
}

export default Preloader