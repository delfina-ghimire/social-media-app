import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-43-205-99-230.ap-south-1.compute.amazonaws.com:5000",
});

export const getTimelinePosts = (id) => API.get(`post/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`post/${id}/like`, { userId: userId });
