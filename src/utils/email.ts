import axios from "axios";

export const sendEmail = async (data: { name: string; email: string; message: string }) => {
  return axios.post("/api/contact", data);
};
