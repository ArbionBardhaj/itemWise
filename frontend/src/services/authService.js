import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};



//Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/register`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("User registered succsessfully");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};


//Login user
export const loginUser = async (userData) => {
   try {
     const response = await axios.post(
       `${BACKEND_URL}/api/users/login`,
       userData,
     );
     if (response.statusText === "OK") {
       toast.success("User Loged In succsessfully");
     }
     return response.data;
   } catch (error) {
     const message =
       (error.response && error.response.data && error.response.data.message) ||
       error.message ||
       error.toString();
     toast.error(message);
   }
 };