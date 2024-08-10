"use client"

import React, { useEffect, useState } from 'react';
import Page from 'app/page';
import Courses from 'components/page/Courses';
import CourseSearcher from 'components/page/Courses/CourseSearcher';
import useCourse from 'hooks/useCourse'; // useCourse 훅을 임포트합니다.
import { Course } from 'types/courses'; // Course 타입 임포트
import 'styles/course-search-style.css';
import Header from 'components/page/Courses/BackButton';

const CoursesPage = () => {
  const { courseList, fetchAllCourses } = useCourse();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]); // 타입 지정
  const [searchInput, setSearchInput] = useState(''); // 타입 지정

  useEffect(() => {
    fetchAllCourses(); // 컴포넌트가 마운트될 때 강의 목록을 가져옵니다.
  }, []); // 빈 배열로 변경하여 최초 마운트 시에만 호출

  useEffect(() => {
    handleSearch(searchInput); // courseList가 변경될 때에도 필터링
  }, [courseList]);

  const handleSearch = (searchTerm: string) => {
   
    if (Array.isArray(courseList)) { // courseList가 배열인지 확인
      const filtered = courseList.filter(course =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.professor.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      console.error('courseList is not an array', courseList);
      setFilteredCourses([]); // 배열이 아닌 경우 빈 배열 설정
    }
  };

  const handleTextInputChange = (value: string) => {
    setSearchInput(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(searchInput);
    }
  };

  return (
    <Page title="CoursesPage">
      <div className="component-arrangement">
        <div className="fix-top">
          <div className="header-container">
            <div className="arrow-icon">
              <Header /> {/* 화살표 아이콘 컴포넌트 */}
            </div>
            <div className="header">강의실</div>
          </div>
          <div className="search-container-alignment">
            <CourseSearcher 
              placeholder="교수명, 강의명 검색"  
              onChange={handleTextInputChange} 
              onKeyDown={handleKeyDown} 
              onClick={() => handleSearch(searchInput)} 
            />
          </div>
        </div>
        <div className="courses-container">
          <Courses courses={filteredCourses} />
        </div>
      </div>
    </Page>
  );
  
}

export default CoursesPage;
