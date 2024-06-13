import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useVirtualOfficeHook = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [virtualOffice, setVirtualOffice] = useState();

  const getAllVirtualOffices = async (data) => {
    setLoading(true);
    let headers={
        Authorization: "Bearer " + token
    }
    try {
      const response = await axios.get("https://cors-anywhere.herokuapp.com/https://searchapp.ai/api/v1/virtualoffices", {headers});
      console.log(response,"response")
      setVirtualOffice(response?.data?.data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    getAllVirtualOffices,
    loading,
    virtualOffice
  };
};
