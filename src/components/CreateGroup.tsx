import { IconButton } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useAppSelector } from '../app/hooks';
import { useEffect, useState } from 'react';
import { ToastCallError, ToastCallSuccess } from './ReactToast';
import {io} from "socket.io-client"


let socket:any;
const CreateGroup = () => {
  const isDarkTheme = useAppSelector((state: { toggleTheme: boolean }) => state.toggleTheme);
  const [gpName,setGpName] = useState<string>("")

  const _id = useAppSelector((state: any) => state.user._id);



  useEffect(() => { 
    socket = io("http://localhost:5000");

    socket.on('create_gp_success', () => {
      ToastCallSuccess("Group created successfully");
    });

    socket.on("create_gp_error", (message: string) => {
      ToastCallError(message);
    });

    return () => {
      socket.disconnect();
    }
  }, []);
  const handleClick = async () => {
    if (!gpName.trim()) {
      ToastCallError("Empty Fields");
      return;
    }

    socket.emit('create_gp', _id, gpName);

    setGpName("");
  }
  return (
      <div className={`create_group_container ${isDarkTheme && `dark_bg`}`}>
          <div className={ isDarkTheme ?  'dark_theme' : ""}>
            <input value={gpName} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setGpName(e.target.value)} type="text" placeholder='Enter Group Name' className= { isDarkTheme ?  'dark_theme' : "" } />
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