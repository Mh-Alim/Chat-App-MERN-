import "./MainContainer.css"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddIcon from '@mui/icons-material/Add';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from "./ConversationItem";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className="sidebar">
            <div className="sb_header">
                <IconButton color="default">
                    <PersonOutlineIcon />
                </IconButton>

                <div>
                    <IconButton onClick={() => navigate("/app/users")}>
                        <PersonAddAltIcon /> 
                    </IconButton>
                    <IconButton onClick={() => navigate("/app/groups")}>
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton onClick={() => navigate("/app/create_group")} >
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <DarkModeIcon />
                    </IconButton>
                </div>
            </div>

            <div className="search">
                <IconButton >
                    <SearchIcon />
                </IconButton>
                <input type="text" placeholder="search" />
            </div>


            <div className="sb_conversation">
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="B" name="Bald" last_message="Last Message" time="time" />
                <ConversationItem logo="T" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="B" name="Bald" last_message="Last Message" time="time" />
                <ConversationItem logo="T" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="B" name="Bald" last_message="Last Message" time="time" />
                <ConversationItem logo="T" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="B" name="Bald" last_message="Last Message" time="time" />
                <ConversationItem logo="T" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
                <ConversationItem logo="A" name="Alim" last_message="Last Message" time="time" />
            </div>


        </div>
    )
}


export default Sidebar