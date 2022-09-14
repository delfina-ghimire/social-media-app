import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-43-205-99-230.ap-south-1.compute.amazonaws.com:5000",
});

export const uploadImage = (data) => API.post("/upload", data);

export const uploadPost = (data) => API.post("/post", data);
