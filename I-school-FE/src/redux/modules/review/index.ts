import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'constant/api';
import { RootState } from 'redux/store';
import { ReviewState, CourseReview } from 'types/review';
import { postData } from 'types/reviewRegister';
import { api } from 'utill/axios';
import { AxiosError } from 'axios';
import { snakeToCamel } from 'utill/convertType';

export const createReviewList = createAsyncThunk(
  'review/createReviewList',
  async (data: { courseName: string, professor: string }, { rejectWithValue }) => {
    try {
      const decodedCourseName = decodeURIComponent(data.courseName);
      const decodedProfessor = decodeURIComponent(data.professor);

      const response = await api.get(API.COURSER_REVIEW, {
        params: {
          course_name: decodedCourseName,
          professor: decodedProfessor,
        },
      });

      const convertObject = Array.isArray(response.data.data.course_reviews)
        ? response.data.data.course_reviews.map((item: any) => ({
            ...snakeToCamel(item),
            courseReviewId: item.course_id // course_id를 courseReviewId로 매핑
          }))
        : [];
      
      return convertObject;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.');
    }
  }
);

export const createCourseReview = createAsyncThunk(
  'registration/createCourseReview',
  async (data: postData, { rejectWithValue }) => {
    try {
      const response = await api.post(API.REVIEW_REGISTER, data);
      console.log(response.status);
      alert('등록되었습니다.');
      // return response.data
    } catch (err) {
      const error = err as AxiosError;
      if (error.response) {
        const { status } = error.response;
        switch (status) {
          case 400:
            alert('중복된 값입니다.');
            break;
          case 401:
            alert('인증에 실패했습니다.');
            break;
          case 403:
            alert('접근 권한이 없습니다.');
            break;
          case 404:
            alert('리소스를 찾을 수 없습니다.');
            break;
          case 500:
            alert('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
            break;
          default:
            alert('알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        alert('서버로부터 응답이 없습니다. 네트워크 상태를 확인해주세요.');
      } else {
        alert('요청을 보내는 중에 오류가 발생했습니다.');
      }
      console.log(error.message);
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.');
    }
  }
);

const initialState: ReviewState = {
  reviewList: []
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createReviewList.fulfilled, (state, action) => {
        state.reviewList = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(createReviewList.rejected, (state) => {
        state.reviewList = [];
      });
  }
});

export const reviewSelector = (state: RootState) => state.review;

export default reviewSlice.reducer;
