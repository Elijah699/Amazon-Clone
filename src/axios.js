import axios from "axios";


const instance = axios.create({
  //The API (cloud function) URL
  baseURL: "https://us-central1-clone-d223e.cloudfunctions.net/api",
  //"http://localhost:5001/clone-d223e/us-central1/api",
});


export default instance;