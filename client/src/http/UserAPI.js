import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";
import axios from "axios";

function setCookie(name, value, expiryDays) {
    // Create a date object for the expiration time
    let date = new Date();
    date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000));

    // Set the cookie with the name, value, and expiration date
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString();
}

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    setCookie('token', data.token, 30)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth', )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const fetchUserData = async () => {
    try {
        // Get the authorization token from local storage
        const token = localStorage.getItem('token');
        // Set the authorization header with the token
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        // Make the HTTP GET request to fetch the user data
        const {data} = await axios.get('/api/user/data');
        return data;
    } catch (error) {
        console.error(error);
    }
}
export function getCookie(name) {
    // Get all cookies as a string
    let allCookies = document.cookie;

    // Split the string into individual cookies
    let cookieArray = allCookies.split(';');

    // Loop through the array of cookies
    for (let i = 0; i < cookieArray.length; i++) {
        // Get the name and value of the current cookie
        let cookieName = cookieArray[i].split('=')[0];
        let cookieValue = cookieArray[i].split('=')[1];

        // If the cookie name matches the one we're looking for, return its value
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }
}

export const updateUserData = async (user) => {
    try {
        const {data} = await $authHost.put('api/user/data', user); // make HTTP PUT request to update user data
        return data; // return updated user data
    } catch (error) {
        console.error(error);
    }
}