import { IconButton } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const CreateGroup = () => {
  return (
      <div className='create_group_container'>
          <div>
            <input type="text" placeholder='Enter Group Name' />
            <div>
                <IconButton>
                    <KeyboardDoubleArrowRightIcon />
                </IconButton>
            </div>
          </div>
    </div>
  )
}

export default CreateGroup