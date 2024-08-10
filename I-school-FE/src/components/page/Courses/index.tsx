import React from 'react';
import { Grid } from '@mui/material';
import CourseBlock from 'components/page/Courses/CourseBlock';
import 'styles/course-search-style.css';

interface Course {
  courseName: string;
  professor: string;
  rating: number;
  courseId: number;
}

const Courses: React.FC<{ courses: Course[] }> = ({ courses }) => (
  <Grid container direction="column" spacing={0}>
    {courses.map((course, index) => (
      <Grid item key={index}>
        <CourseBlock
          courseName={course.courseName}
          professor={course.professor}
          rating={course.rating} courseId={course.courseId}      />
      </Grid>
    ))}
  </Grid>
);

export default Courses;
