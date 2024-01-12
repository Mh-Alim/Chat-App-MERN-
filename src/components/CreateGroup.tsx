import { IconButton } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useAppSelector } from '../app/hooks';
import { useEffect, useState } from 'react';
import { ToastCallError, ToastCallSuccess } from './ReactToast';
import {io} from "socket.io-client"


const socket = io("http://localhost:5000")
const CreateGroup = () => {
  const isDarkTheme = useAppSelector((state: { toggleTheme: boolean }) => state.toggleTheme);
  const [gpName,setGpName] = useState<string>("")

  const _id = useAppSelector((state: any) => state.user._id);


  useEffect(() => {
    
    socket.on("create_group_success", () => {
      ToastCallSuccess("Group created successfully");
    });
    socket.on("create_group_error", (message : string) => { 
      ToastCallError(message);
    })
    return () => {
      socket.off();
    }
  },[])
  const handleClick = async () => {
    if (!gpName) {
      ToastCallError("Empty Fields");
      return;
    }

    socket.emit("create_group", _id, gpName);
    
  }
  return (
      <div className={`create_group_container ${isDarkTheme && `dark_bg`}`}>
          <div className={ isDarkTheme ?  'dark_theme' : ""}>
            <input value={gpName.trim()} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setGpName(e.target.value)} type="text" placeholder='Enter Group Name' className= { isDarkTheme ?  'dark_theme' : "" } />
            <div onClick={handleClick} >
                <IconButton className={ isDarkTheme ?  'dark_theme' : ""}>
                    <KeyboardDoubleArrowRightIcon />
                </IconButton>
            </div>
          </div>
    </div>
  )
}

export default CreateGroup