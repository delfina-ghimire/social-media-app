import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-13-232-223-75.ap-south-1.compute.amazonaws.com:5000",
});

export const logIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
