export default async function getAllvideo() {

    const response = await fetch('http://localhost:3000/api/video');
    response.then(function (response) {
        console.log(response);
    })
}