import axios from 'axios'
import MockAdapter from "axios-mock-adapter"
import { API } from 'constant/api'
import { mockFormData_Review } from 'mocks/reviewMock'
import { mockCourseLists } from 'mocks/reviewMock/mockData'
import { mockCourses } from 'mocks/timetableMock'


const ENV = process.env.NODE_ENV

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_API_URL
})

if (ENV === 'development') {
    const mockAxios = new MockAdapter(api)
    mockAxios.onGet(API.COURSER_REVIEW).reply(200, mockFormData_Review)
    mockAxios.onGet(API.SHOW_TIMETABLE).reply(200, mockCourses)
    mockAxios.onPost(API.REVIEW_REGISTER).reply(201)
    mockAxios.onGet(API.COURSE_LIST).reply(200, mockCourseLists)
} 
// dev환경에서 백엔드 post요청할 때는 막아놓기.
// 나중에 npm build할 때 세미콜론 등 다른 오류 고쳐야 돌아갈 수 있음.
