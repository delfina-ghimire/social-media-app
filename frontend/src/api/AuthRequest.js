import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-43-205-99-230.ap-south-1.compute.amazonaws.com:5000",
});

export const logIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
