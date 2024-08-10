import { combineReducers } from '@reduxjs/toolkit'

import reviewReducer from './review'
import timetableReducer from './timetable'
import courseReducer from './courses'
import bottomSheetCourseReducer from './timetable/bottomSheet'

const rootReducer = combineReducers({
  review: reviewReducer,
  timetable: timetableReducer,
  courses: courseReducer,
  bottomSheetCourses: bottomSheetCourseReducer
})

export default rootReducer
