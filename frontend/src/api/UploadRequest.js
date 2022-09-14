import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-13-232-223-75.ap-south-1.compute.amazonaws.com:5000",
});

export const uploadImage = (data) => API.post("/upload", data);

export const uploadPost = (data) => API.post("/post", data);
