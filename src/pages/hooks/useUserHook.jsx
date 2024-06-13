import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useUserHook = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState();

  const getAllUsers = async (data) => {
    setLoading(true);
    let headers={
        Authorization: "Bearer " + token
    }
    try {
      const response = await axios.get("https://cors-anywhere.herokuapp.com/https://searchapp.ai/api/v1/users", {headers});
      console.log(response,"response")
      setUsers(response?.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    getAllUsers,
    loading,
    users
  };
};
