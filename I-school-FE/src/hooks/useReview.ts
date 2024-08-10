// hooks/useReview.ts
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'redux/store';
import {
  createCourseReview,
  createReviewList, 
  reviewSelector,
} from 'redux/modules/review';
import { postData } from 'types/reviewRegister';

const useReview = () => {
  const dispatch = useDispatch<AppDispatch>();

  const employeeState = useSelector(reviewSelector);
  const { reviewList } = employeeState;

  const onCreateReviewList = (courseName: string, professor: string) => {
    dispatch(createReviewList({ courseName, professor }));
  };

  const onCreateReview = ({ content, rating, course_id }: postData ) => {
    dispatch(createCourseReview({ content, rating, course_id }));
  };

  return {
    onCreateReviewList,
    reviewList,
    onCreateReview,
  };
};

export default useReview;
