import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'constant/api';
import { RootState } from 'redux/store';
import { BottomSheetCourse, BottomSheetCourses } from 'types/bottomSheetCourses';
import { api } from 'utill/axios';
import { snakeToCamel } from 'utill/convertType';

// 비동기 thunk 생성
export const createBottomSheetCourseList = createAsyncThunk(
  'bottomSheet/createBottomSheetCourseList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(API.COURSE_LIST); // API endpoint 수정
      const convertObject = snakeToCamel(response.data)
      return convertObject.data.courses;
      
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.');
    }
  }
);

// 초기 상태 정의
const initialState: BottomSheetCourses = {
  bottomSheetCourseList : [],
};

// slice 생성
export const createBottomSheetCourseListSlice = createSlice({
  name: 'bottomSheetCourse',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createBottomSheetCourseList.fulfilled, (state, action) => {
        state.bottomSheetCourseList = action.payload;
      })
      .addCase(createBottomSheetCourseList.rejected, (state, action) => {
        console.error(action.payload); // 에러 로그
      });
  },
});

// selector 정의
export const selectBottomSheetCourses = (state: RootState) => state.bottomSheetCourses.bottomSheetCourseList;

export default createBottomSheetCourseListSlice.reducer;
