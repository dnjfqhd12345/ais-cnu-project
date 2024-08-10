export type Course = {
  courseId: number;
  courseCode: string;
  courseName: string;
  courseRoom: string;
  courseDay: string;
  courseStartTime: string;
  courseEndTime: string;
  professor: string;
};

export type Timetable = {
  timetalbeId: number;
  courses: Course[];
};

export type TimetableState = {
  timetableList: Course[]
}