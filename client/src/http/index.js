import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:5000/'
})

const $authHost = axios.create({
    baseURL: 'http://localhost:5000/'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhZG1pbjIzQG1haWwucnUiLCJpYXQiOjE2NzQ2NTA3MzEsImV4cCI6MTY3NDczNzEzMX0.AGVSLdGqYjbhqyLZVW5PlQ_XU2DQM-wKgua6QoIJhkQ`
    return config
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $authHost,
    $host
}