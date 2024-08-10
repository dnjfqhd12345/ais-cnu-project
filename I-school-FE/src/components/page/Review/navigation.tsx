import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import { styled } from '@mui/system';

const StyledBottomNavigation = styled(BottomNavigation)({
  width: '100%',
  height: '60px',
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  '&.selected': {
    color: '#ff69b4',
    '& .MuiBottomNavigationAction-label': {
      fontWeight: 'bold',
    },
    '& .MuiSvgIcon-root': {
      color: '#ff69b4',
    },
  },
  '&.notSelected': {
    color: '#cccccc',
    '& .MuiBottomNavigationAction-label': {
      fontWeight: 'normal',
    },
    '& .MuiSvgIcon-root': {
      color: '#cccccc',
    },
  },
  '& .MuiBottomNavigationAction-label': {
    fontSize: '10px',
    paddingTop: '2px',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
  },
}));

const SimpleBottomNavigation = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div style={{
      position: "fixed",
      bottom: "0",
      width: '353px',
      borderTop: '1px solid #eeeeee',
    }}>
      <StyledBottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <StyledBottomNavigationAction label="강의평" icon={<StarBorderIcon />}
        className={value === 0 ? 'selected' : 'notSelected'}/>
        <StyledBottomNavigationAction label="시험 정보" icon={<PlagiarismOutlinedIcon />}
        className={value === 1 ? 'selected' : 'notSelected'}/>
      </StyledBottomNavigation>
    </div>
  );
}

export default SimpleBottomNavigation;
