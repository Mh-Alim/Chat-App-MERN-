import { useSelector } from "react-redux"
import chat_img from "../assets/images/chat.png"

const Login = () => {

  const isDarkTheme:boolean = useSelector((state: { toggleTheme: boolean }) => state.toggleTheme)
  return (
      <div className='login_container'>
          <div className="login_container_image">
              <img src={chat_img} alt="" />
          </div>
          <form className={`login_form ${ isDarkTheme && `dark_bg` } `}>
              <p className='grey_font'>Login to your account</p>
              <input type="text" placeholder='Enter your name' className={ isDarkTheme ? "dark_theme" : ""} />
              <input type='password' placeholder='Enter your password' className={ isDarkTheme ? "dark_theme" : ""} />
              
              <button type='submit'>Login</button>
          </form>
    </div>
  )
}

export default Login