import React from 'react';
import PropTypes from 'prop-types';
import { Rating, Typography, Box } from "@mui/material";

interface CourseBlockProps {
  courseName: string;
  professor: string;
  courseId: number;
  rating: number;
}

const CourseBlock: React.FC<CourseBlockProps> = ({ courseName, professor, rating, courseId }) => {
  const handleClick = () => {
    const firstCourseId = courseId.toString()[0];
    window.location.href = `/review-page/${courseName}/${professor}/${firstCourseId}`;
  };

  return (
    <button className="course-block" onClick={handleClick}>
      <h3>{courseName}</h3>
      <p>{professor} 교수님</p>
      <p>
      <Rating
                name="course-rating"
                value={rating}
                precision={0.5}
                readOnly
                sx={{ fontSize: '0.8rem' }} // 크기 조정을 위한 추가 스타일
            />
      </p>
    </button>
  );
};

CourseBlock.propTypes = {
  courseName: PropTypes.string.isRequired,
  professor: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default CourseBlock;
