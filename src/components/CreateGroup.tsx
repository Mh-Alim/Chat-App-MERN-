import { IconButton } from '@mui/material'
import { useSelector } from 'react-redux';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const CreateGroup = () => {
  const isDarkTheme = useSelector((state : {toggleTheme : boolean}) => state.toggleTheme)
  return (
      <div className={`create_group_container ${isDarkTheme && `dark_bg`}`}>
          <div className={ isDarkTheme ?  'dark_theme' : ""}>
            <input type="text" placeholder='Enter Group Name' className= { isDarkTheme ?  'dark_theme' : "" } />
            <div >
                <IconButton className={ isDarkTheme ?  'dark_theme' : ""}>
                    <KeyboardDoubleArrowRightIcon />
                </IconButton>
            </div>
          </div>
    </div>
  )
}

export default CreateGroup