import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-13-232-223-75.ap-south-1.compute.amazonaws.com:5000",
});

export const getTimelinePosts = (id) => API.get(`post/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`post/${id}/like`, { userId: userId });
