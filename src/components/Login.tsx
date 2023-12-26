import chat_img from "../assets/images/chat.png"

const Login = () => {
  return (
      <div className='login_container'>
          <div className="login_container_image">
              <img src={chat_img} alt="" />
          </div>
          <form className="login_form">
              <p className='grey_font'>Login to your account</p>
              <input type="text" placeholder='Enter your name' />
              <input type='password' placeholder='Enter your password' />
              
              <button type='submit'>Login</button>
          </form>
    </div>
  )
}

export default Login