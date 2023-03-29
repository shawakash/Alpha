export const KEY_ACCESS_TOKEN = "access_token";
export function getItem(key) {              // to be called when we need to check if the user is logged in or not 
    return localStorage.getItem(key);      // to get the access token in local store
}

export function setItem(key, value) {      // to be called when the frontend needs to change the accestoken
    localStorage.setItem(key, value);   
}

export function removeItem(key) {
    localStorage.removeItem(key);
}