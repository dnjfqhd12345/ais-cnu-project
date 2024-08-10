import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'constant/api';
import { RootState } from 'redux/store';
import { Courses } from 'types/courses';
import { api } from 'utill/axios';
import { snakeToCamel } from 'utill/convertType';

// 비동기 thunk 생성
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API.COURSE_LIST); // API endpoint 수정
      const convertObject = snakeToCamel(response.data);
      console.log(convertObject.data.courses)
      return convertObject.data.courses;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.');
    }
  }
);

// 초기 상태 정의
const initialState: Courses = {
  courseList: [],
};

// slice 생성
export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courseList = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        console.error(action.payload); // 에러 로그
      });
  },
});

// selector 정의
export const selectCourses = (state: RootState) => state.courses.courseList;

export default coursesSlice.reducer;
