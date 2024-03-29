import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import chat_img from "../assets/images/chat.png";
import { ToastCallError, ToastCallSuccess } from "./ReactToast";
import { updateUser } from "../features/userSlice";
import { useAppDispatch } from "../app/hooks";

interface UserType {
  email: string;
  password: string;
}

const backendUrl: string = process.env.REACT_APP_BACKEND_URL || "";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType>({ email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const isDarkTheme: boolean = useSelector(
    (state: { toggleTheme: boolean }) => state.toggleTheme
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.email.trim() || !user.password.trim()) {
      ToastCallError("empty field");
      return;
    }

    setLoading(true);
    const res: Response = await fetch(`${backendUrl}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email.trim(),
        password: user.password.trim(),
      }),
    });

    const jsonRes = await res.json();
    const authorizationHeader = res.headers.get("X-Authorization") || "";
    setLoading(false);
    if (jsonRes.success) {
      dispatch(updateUser(jsonRes.user));
      ToastCallSuccess(jsonRes.message);
      const token = authorizationHeader.split(" ")[1];
      localStorage.setItem("authToken", token);
      navigate("/app/welcome");
      return;
    }

    ToastCallError(jsonRes.message);
    setUser({ email: "", password: "" });
  };
  return (
    <div className="login_container">
      <div className="login_container_image">
        <img src={chat_img} alt="" />
      </div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className={`login_form ${isDarkTheme && `dark_bg`} `}
      >
        <p className="grey_font">Login to your account</p>
        <input
          type="text"
          placeholder="Enter your email"
          className={isDarkTheme ? "dark_theme" : ""}
          value={user.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Enter your password"
          className={isDarkTheme ? "dark_theme" : ""}
          value={user.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        {!loading ? (
          <button type="submit">Login</button>
        ) : (
          <div className="loader_background">
            <span className="loader"></span>
          </div>
        )}
        <p style={{ marginTop: "10px" }}>
          Dont have an account then{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{ color: "blue", marginLeft: "1px", cursor: "pointer" }}
          >
            click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
