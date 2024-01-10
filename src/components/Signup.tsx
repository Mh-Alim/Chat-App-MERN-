import { useSelector } from "react-redux";
import { useState } from "react";
import chat_img from "../assets/images/chat.png";
import { useNavigate } from "react-router-dom";
import { ToastCallError, ToastCallSuccess } from "./ReactToast";
import { useAppDispatch } from "../app/hooks";
import { updateUser } from "../features/userSlice";
type IUser = {
  name: string;
  email: string;
  password: string;
};

type event = React.ChangeEvent<HTMLInputElement>;
const backendUrl: string = process.env.REACT_APP_BACKEND_URL || "";

const Signup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  const isDarkTheme: boolean = useSelector(
    (state: { toggleTheme: boolean }) => state.toggleTheme
  );

  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.name.trim() || !user.email.trim() || !user.password.trim()) {
      ToastCallError("Empty Fields");
      return;
    }

    setLoading(true);
    const res: Response = await fetch(`${backendUrl}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name.trim(),
        email: user.email.trim(),
        password: user.password.trim(),
      }),
    });

    const jsonRes = await res.json();
    const authorizationHeader = res.headers.get("X-Authorization") || "";
    setLoading(false);
    if (res.status === 201) {

      dispatch(updateUser(jsonRes.user))
      ToastCallSuccess(jsonRes.message);
      const token = authorizationHeader.split(" ")[1];
      localStorage.setItem("authToken", token);
      navigate("/app/welcome");
      return;
    }
    
    ToastCallError(jsonRes.message);
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div className="login_container">
      <div className="login_container_image">
        <img src={chat_img} alt="" />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`login_form ${isDarkTheme && `dark_bg`} `}
      >
        <p className="grey_font">Signup</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={user.name}
          onChange={(e: event) => {
            setUser({ ...user, name: e.target.value });
          }}
          className={isDarkTheme ? "dark_theme" : ""}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e: event) => {
            setUser({ ...user, email: e.target.value });
          }}
          className={isDarkTheme ? "dark_theme" : ""}
        />
        <input
          type="password"
          value={user.password}
          placeholder="Enter your password"
          onChange={(e: event) => {
            setUser({ ...user, password: e.target.value });
          }}
          className={isDarkTheme ? "dark_theme" : ""}
        />

        {!loading ? (
          <button type="submit">Signup</button>
        ) : (
          <div className="loader_background">
            <span className="loader"></span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
