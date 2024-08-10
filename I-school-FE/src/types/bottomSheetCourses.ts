// export type BottomSheetCourse = {
//     courseId: string;
//     courseName: string;
//     professor: string;
//     major: string;
//     grade: number;
//     rating: number;
// };
export type BottomSheetCourse = {
    courseId: number;
    courseCode: string;
    courseName: string;
    courseRoom: string;
    courseDay: string;
    courseStartTime: string;
    courseEndTime: string;
    professor: string;
    rating: number;
    grade: number;
    major: string;
  };

export type BottomSheetCourses = {
    bottomSheetCourseList: BottomSheetCourse[];
  }

