export async function getData() {

    let response = await fetch('http://localhost:3000/data');

    if (response.ok) {
    // if HTTP-status is 200-299
    // get the response body (the method explained below)
        return await response.json();
    } else {
        console.log("HTTP-Error: " + response.status);
        }
    
}