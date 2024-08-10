import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { Course } from 'types/timetable'

interface TimetableProps {
  course: Course;
  backgroundColor: string; // 배경색을 받을 수 있도록 추가
}

const TimetableCard = ({ course, backgroundColor }: TimetableProps) => {
  return (
    <Card 
      className="timetable-card"
      style={{
        backgroundColor: backgroundColor, // 배경색 설정
        border: 'none', // 테두리 없애기
        boxShadow: 'none', // 그림자 없애기 (선택 사항)
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Typography className='course-name'>
          {course.courseName}
        </Typography>
        <Typography className='course-room'>
          {course.courseRoom}
        </Typography>
        {/* hidden input으로 courseCode와 professor를 추가 */}
        <input type="hidden" value={course.courseCode} className="course-code" />
        <input type="hidden" value={course.professor} className="course-professor" />
        <input type="hidden" value={course.courseId} className="course-id" />
      </CardContent>
    </Card>
  )
}

export default TimetableCard
