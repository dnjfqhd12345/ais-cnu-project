import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store'; // RootState 추가
import { fetchCourses } from 'redux/modules/courses'; // 경로 수정
import { Course } from 'types/courses'; // Course 타입 추가

const useCourse = () => {
  const dispatch = useDispatch<AppDispatch>();

  // courses 상태를 선택합니다.
  const courseList = useSelector((state: RootState) => state.courses.courseList);

  // 비동기 액션을 디스패치합니다.
  const fetchAllCourses = () => {
    dispatch(fetchCourses());
  };

  return {
    fetchAllCourses,
    courseList,
  };
};

export default useCourse;
