import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import useTimetable from 'hooks/useTimetable';
import 'styles/timetable.css';
import { useRouter } from 'next/navigation';
import TimetableCard from './TimetableCard';
import TimetableModal from './TimetableModal';

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

const colors = [
  '#ffbaba', '#ffc092', '#cfff92', '#b0ffd9',
  '#92ebff', '#b0c6ff', '#e1afff', '#ffb8ef'
];

const TimeTable = ({ }) => {
  const { onCreateTimetableList, timetableList } = useTimetable();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    onCreateTimetableList();
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [openModal]);

  const generateColorMap = (courseCodes: string[]) => {
    const colorMap: { [key: string]: string } = {};
    courseCodes.forEach((code, index) => {
      colorMap[code] = colors[index % colors.length];
    });
    return colorMap;
  };

  const handleCardClick = (course: any) => {
    setSelectedCourse(course);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCourse(null);
  };

  const renderTimetable = () => {
    const timetable: React.ReactNode[] = [];

    timetable.push(
      <Grid container key="header">
        <Grid item xs={1}></Grid>
        {days.map((day) => (
          <Grid item xs={2.2} key={day} className="timetable-header">
            <Typography variant="body1" align="center">
              {day}
            </Typography>
          </Grid>
        ))}
      </Grid>
    );

    for (let i = 9; i <= 16; i++) {
      timetable.push(
        <Grid container key={i}>
          <Grid item xs={1} className="timetable-time">
            <Typography variant="body2" align="center">
              {i > 12 ? i - 12 : i}
            </Typography>
          </Grid>
          {days.map((day) => (
            <Grid item xs={2.2} key={day} className="timetable-cell">
              {timetableList.map((course: any) => {
                const courseDayMap: { [key: string]: string } = {
                  Monday: 'MON',
                  Tuesday: 'TUE',
                  Wednesday: 'WED',
                  Thursday: 'THU',
                  Friday: 'FRI',
                };

                const courseStartTime = parseInt(course.courseStartTime.split(':')[0]) * 60 + parseInt(course.courseStartTime.split(':')[1]);
                const courseEndTime = parseInt(course.courseEndTime.split(':')[0]) * 60 + parseInt(course.courseEndTime.split(':')[1]);
                const courseDuration = courseEndTime - courseStartTime;
                const courseStartHour = parseInt(course.courseStartTime.split(':')[0]);

                if (courseDayMap[course.courseDay] === day && courseStartHour === i) {
                  const heightPercentage = (courseDuration / 60) * 9;
                  const backgroundColor = colorMap[course.courseCode] || '#e0e0e0';
                  return (
                    <div
                      key={course.courseId}
                      className="timetable-card-wrapper"
                      style={{
                        height: `${heightPercentage}vh`,
                        backgroundColor: backgroundColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%'
                      }}
                      onClick={() => handleCardClick(course)}
                    >
                      <TimetableCard course={course} backgroundColor={backgroundColor} />
                    </div>
                  );
                }
                return null;
              })}
            </Grid>
          ))}
        </Grid>
      );
    }

    return timetable;
  };

  const courseCodes = Array.from(new Set(timetableList.map((course: any) => course.courseCode)));
  const colorMap = generateColorMap(courseCodes);

  if (!mounted) {
    return null;
  }

  return (
    <Box className="timetable-container">
      <Grid container>
        {renderTimetable()}
      </Grid>
      <TimetableModal
        open={openModal}
        handleClose={handleCloseModal}
        course={selectedCourse}
      />
    </Box>
  );
};

export default TimeTable;
