import { useNavigate } from 'react-router-dom';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip'; 

function Write() {
  const navigate = useNavigate();
  const goToNewPost = () => navigate('/community/new-post');

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px', marginRight:'90px' }}>
      <Tooltip title="새 글 작성">
          <IconButton aria-label="write" onClick={goToNewPost}>
            <ModeOutlinedIcon />
          </IconButton>
        </Tooltip>
    </div>
  );
}

  export default Write;