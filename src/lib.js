export const BACKENDURL = "https://fsad-backend-bd5s.onrender.com";

export function callApi(reqMethod, url, data, responseHandler)
{
    let options;

    //Get token from localStorage
    const token = localStorage.getItem("token");

    
    const headers = {
        'Content-Type': 'application/json'
    };

    //Attach token if available
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    //Set request options
    if (reqMethod === "GET" || reqMethod === "DELETE") {
        options = {
            method: reqMethod,
            headers: headers
        };
    } else {
        options = {
            method: reqMethod,
            headers: headers,
            body: data
        };
    }

    //API call
    fetch(url, options)
        .then((response) => {
            if (!response.ok)
                throw new Error(response.status + " " + response.statusText);
            return response.text();
        })
        .then((data) => responseHandler(data))
        .catch((err) => alert(err));
}