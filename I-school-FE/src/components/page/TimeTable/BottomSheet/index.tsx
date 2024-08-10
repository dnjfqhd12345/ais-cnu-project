import React, { useEffect, useState } from 'react';
import { Button, Drawer, TextField } from '@mui/material';
import BottomSheetCourseBlock from './BottomSheetCourseBlock';
import 'styles/bottom-sheet-style.css';
import GradeModal from '../GradeSelect';
import MajorModal from '../MajorSelect';
import useBottomSheetCourseList from 'hooks/useBottomSheetCourse';
import { BottomSheetCourse } from 'types/bottomSheetCourses';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

const CourseDrawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  const { bottomSheetCourseList, fetchAllBottomSheetCourses } = useBottomSheetCourseList();
  const [filteredCourses, setFilteredCourses] = useState<BottomSheetCourse[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
  const [gradeButtonText, setGradeButtonText] = useState<string>('학년');
  const [majorButtonText, setMajorButtonText] = useState<string>('전공');
  const [showGradeModal, setShowGradeModal] = useState<boolean>(false);
  const [showMajorModal, setShowMajorModal] = useState<boolean>(false);

  useEffect(() => {
    if (bottomSheetCourseList.length > 0) {
      applyFilters(selectedGrade, selectedMajor);
    } else {
      fetchAllBottomSheetCourses();
    }
  }, [bottomSheetCourseList, selectedGrade, selectedMajor]);

  const truncateMajorName = (major: string): string => {
    return major.length > 3 ? `${major.slice(0, 3)}..` : major;
  };

  const handleSearch = (searchTerm: string) => {
    
    const filtered = bottomSheetCourseList.filter((course: { courseName: string; professor: string; }) =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.professor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filtered)
    setFilteredCourses(filtered);
  };

  const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(searchInput);
    }
  };

  const toggleGradeModal = () => {
    setShowGradeModal(!showGradeModal);
  };

  const toggleMajorModal = () => {
    setShowMajorModal(!showMajorModal);
  };

  const handleGradeSelect = (grade: number) => {
    setSelectedGrade(grade);
    setGradeButtonText(`${grade}학년`);
    applyFilters(grade, selectedMajor);
  };

  const handleMajorSelect = (major: string) => {
    setSelectedMajor(major);
    setMajorButtonText(truncateMajorName(major));
    applyFilters(selectedGrade, major);
  };

  const applyFilters = (grade: number | null, major: string | null) => {
    let filtered: BottomSheetCourse[] = bottomSheetCourseList || [];
  
    if (grade !== null) {
      filtered = filtered.filter(course => course.grade === grade);
    }
    if (major !== null) {
      filtered = filtered.filter(course => course.major === major);
    }
  
    setFilteredCourses(filtered);
  };

  const handleDrawerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const resetFilters = () => {
    setSelectedGrade(null);
    setGradeButtonText('학년');
    setSelectedMajor(null);
    setMajorButtonText('전공');
    setFilteredCourses(bottomSheetCourseList);
  };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '353px',
          margin: 'auto',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        }
      }}
    >
      <div className="drawer-content" onClick={handleDrawerClick}>
        <div className="fix-top">
          <div className="top-section">
            <Button
              onClick={toggleGradeModal}
              variant="contained"
              className="button upper-button"
            >
              {gradeButtonText}
              <GradeModal show={showGradeModal} onClose={toggleGradeModal} onGradeSelect={handleGradeSelect} />
            </Button>
            <Button
              onClick={toggleMajorModal}
              variant="contained"
              className="button upper-button"
            >
              {majorButtonText}
              <MajorModal show={showMajorModal} onClose={toggleMajorModal} onMajorSelect={handleMajorSelect} />
            </Button>
            <input 
              type="text" 
              placeholder="교수명, 강의명 검색" 
              value={searchInput}
              onChange={handleTextInputChange}
              onKeyDown={handleKeyDown}
              className="search-bar" 
            />
          </div>
        </div>
        <div className="courses-container">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <BottomSheetCourseBlock key={course.courseId} course={course} />
            ))
          ) : (
            <div className="no-results-message">
              해당 조건의 강의는 없습니다.
            </div>
          )}
        </div>
        <div className="button-container">
          <Button onClick={resetFilters} variant="contained" className='reset-button'>
            초기화
          </Button>
          <Button onClick={onClose} variant="contained" className='close-button'>
            닫기
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default CourseDrawer;