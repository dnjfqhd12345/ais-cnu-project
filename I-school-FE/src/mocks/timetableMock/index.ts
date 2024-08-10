import { Course, Timetable, TimetableState } from 'types/timetable'

export const mockCourses: Course[] = [
  {
    courseId: 1,
    courseCode: 'ECE3026', // 추가된 courseCode
    courseName: '네트워크',
    courseRoom: '공7 - 118',
    courseDay: 'Monday',
    courseStartTime: '10:00',
    courseEndTime: '12:30',
    professor: '남지승'
  },
  {
    courseId: 2,
    courseCode: 'ECE4086', // 추가된 courseCode
    courseName: '캡디',
    courseRoom: '공7 - 218',
    courseDay: 'Tuesday',
    courseStartTime: '11:00',
    courseEndTime: '12:30',
    professor: '박재형'
  },
  {
    courseId: 3,
    courseCode: 'ECE3088', // 추가된 courseCode
    courseName: '임베디드',
    courseRoom: '공7-218',
    courseDay: 'Wednesday',
    courseStartTime: '13:00',
    courseEndTime: '14:30',
    professor: '이영우'
  },
  {
    courseId: 4,
    courseCode: 'ECE3026', // 같은 courseCode
    courseName: '네트워크',
    courseRoom: '공7 - 118',
    courseDay: 'Wednesday',
    courseStartTime: '10:00',
    courseEndTime: '12:30',
    professor: '남지승'
  },
  {
    courseId: 5,
    courseCode: 'ECE4086', // 추가된 courseCode
    courseName: '캡디',
    courseRoom: '공7 - 218',
    courseDay: 'Thursday',
    courseStartTime: '11:00',
    courseEndTime: '12:30',
    professor: '박재형'
  }
]

export const mockTimetable: Timetable = {
  timetalbeId: 1,
  courses: mockCourses
}

export const mockTimetableState: TimetableState = {
  timetableList: mockCourses
}
