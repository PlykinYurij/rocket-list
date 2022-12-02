
export const fetchURL = {
    getRockets () {
        return fetch("https://api.spacexdata.com/v3/launches")
    }
}