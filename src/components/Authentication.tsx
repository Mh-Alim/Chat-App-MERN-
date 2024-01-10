import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type PropType = {
  children: ReactNode;
};

const Authentication = ({ children }: PropType) => {
  const navigate = useNavigate();
    const auth = async () => {
      
        const token: string | null = localStorage.getItem("authToken");
        if (!token) {
            navigate("/")
            return 
        }
    const res: Response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL || ""}/user/user-exists`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const jsonRes = await res.json();
    if (!jsonRes.success) {
      navigate("/signup");
      return;
    }
    else {
      navigate("/app/welcome")
    }
  };
  useEffect(() => {
    auth();
  }, []);
  return <>{children}</>;
};

export default Authentication;
