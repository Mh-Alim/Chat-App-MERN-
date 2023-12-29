import { useSelector } from "react-redux"
const User = () => {
  const isDarkTheme:boolean = useSelector((state: { toggleTheme: boolean }) => state.toggleTheme)
  return (
    <div className={`user ${ isDarkTheme && `dark_theme` }`}>
        <p>T</p>
        <p>Test User</p>
    </div>
  )
}

export default User