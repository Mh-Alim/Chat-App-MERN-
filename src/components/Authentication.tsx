import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { updateUser } from "../features/userSlice";

type PropType = {
  children: ReactNode;
  routing?: string;
};

const Authentication = ({ routing, children }: PropType) => {
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = async () => {
    const token: string | null = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
      return;
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
    // if (!jsonRes.success) {
    //   console.log("req coming here !!");
    //   navigate("/");
    //   return;
    // }
    // else {
    //   dispatch(updateUser(jsonRes.user));
    //   console.log("routing -> ",routing)
    //   routing && navigate(routing);
    // }
  };
  useEffect(() => {
    auth();
  }, []);
  return (
    <>
      {children}
    </>
  );
};

export default Authentication;
