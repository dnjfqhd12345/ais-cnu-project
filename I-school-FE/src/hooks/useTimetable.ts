import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import {
  createTimetableList,
  timetableSelector,
} from 'redux/modules/timetable'

const useTimetable = () => {
  const dispatch = useDispatch<AppDispatch>()

  const employeeState = useSelector(timetableSelector)
  const {timetableList } = employeeState

  const onCreateTimetableList = () => {
    dispatch(createTimetableList())
  }

  return {
    onCreateTimetableList,
    timetableList,
  }
}

export default useTimetable