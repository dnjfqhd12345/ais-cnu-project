import { Typography, Grid, IconButton, Box } from "@mui/material";
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import 'styles/timetable.css';
import { useState } from "react";
import CourseDrawer from "./BottomSheet"; // CourseDrawer는 BottomSheet에서 변경된 컴포넌트
import useBottomSheetCourseList from 'hooks/useBottomSheetCourse'; // hook을 가져옵니다.

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { fetchAllBottomSheetCourses } = useBottomSheetCourseList(); // hook에서 fetch 함수를 가져옵니다.

    const toggleDrawer = () => {
        if (!isDrawerOpen) {
            fetchAllBottomSheetCourses(); // Drawer가 열릴 때마다 API를 호출합니다.
        }
        setIsDrawerOpen(!isDrawerOpen);
        console.log('clicked')
    };

    return (
        <div>
            <Grid container alignItems="center" justifyContent="space-between" className="header">
                <Box className="timetable-title-box">
                    <Typography>2023학년 2학기</Typography>
                    <Typography variant="h5" className="timetable-title">시간표</Typography>
                </Box>
                <div>
                    <IconButton onClick={toggleDrawer}>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                    <IconButton>
                        <ScheduleIcon />
                    </IconButton>
                </div>
            </Grid>
            <CourseDrawer open={isDrawerOpen} onClose={toggleDrawer} />
        </div>
    );
};

export default Header;
