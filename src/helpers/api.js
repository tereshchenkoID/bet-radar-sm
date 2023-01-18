import axios from "axios";


const server = axios.create({
    baseURL: 'https://matchtracker.live/api/'
})

export const getH2H = (url) => {
    return server.get(url)
            .then(response => {
               return response.data.results
            });
}

export const getEvent = (url) => {
    return server.get(url)
        .then(response => {
            return response.data.results[0]
        });
}

export const getTable = (url) => {
    return server.get(url)
        .then(response => {
            console.log(response.data)
            return response.data.results
        });
}
