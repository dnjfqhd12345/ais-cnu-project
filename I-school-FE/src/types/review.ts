export type CourseReview = {
    courseReviewId: number;
    rating: number;
    content: string;
    courseId: number; // 필요한 경우 추가 필드
  };
  
  export type Course = {
    courseId: number;
    courseName: string;
    courseReviews: CourseReview[];
  };
  
  export type ReviewState = {
    reviewList: CourseReview[];
  };
  