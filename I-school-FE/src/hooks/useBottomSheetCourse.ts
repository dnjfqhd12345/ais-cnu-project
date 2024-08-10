import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store'; // RootState 추가
import { createBottomSheetCourseList, selectBottomSheetCourses } from 'redux/modules/timetable/bottomSheet'; // 경로 수정
import { BottomSheetCourse } from 'types/bottomSheetCourses'; // Course 타입 추가
import { useState } from 'react';

// const useBottomSheetCourseList = () => {
//   const dispatch = useDispatch<AppDispatch>();

//   // courses 상태를 선택합니다.
//   const bottomSheetCourseList = useSelector((state: RootState) => state.bottomSheetCourses.bottomSheetCourseList);

//   // 비동기 액션을 디스패치합니다.
//   const fetchAllBottomSheetCourses = () => {
//     dispatch(createBottomSheetCourseList());
//   };

//   return {
//     fetchAllBottomSheetCourses,
//     bottomSheetCourseList
//   };
// };

// export default useBottomSheetCourseList;

const useBottomSheetCourseList = () => {
  const dispatch = useDispatch<AppDispatch>();

  // courses 상태를 선택합니다.
  // const bottomSheetCourseList = useSelector((state: RootState) => state.bottomSheetCourses.bottomSheetCourseList);
  const bottomState = useSelector(selectBottomSheetCourses)
  const bottomSheetCourseList = bottomState

  // 비동기 액션을 디스패치합니다.
  const fetchAllBottomSheetCourses = () => {
    dispatch(createBottomSheetCourseList());
  };

  return {
    fetchAllBottomSheetCourses,
    bottomSheetCourseList
  };
};

export default useBottomSheetCourseList;

