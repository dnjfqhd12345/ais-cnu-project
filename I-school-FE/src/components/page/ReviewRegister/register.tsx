import { yupResolver } from "@hookform/resolvers/yup"; // yup을 사용하여 폼 유효성 검사
import { Button, TextField , Box, Rating} from "@mui/material"; // Material-UI
import useReview from "hooks/useReview";
import { useParams } from "next/navigation"; // Next.js에서 URL 파라미터를 가져오는 훅
import { useState } from "react";
import { useForm } from "react-hook-form";
import "styles/review-register.css";
import { ReviewRegister } from "types/reviewRegister"; // 타입 불러오기
import * as yup from 'yup' // 폼 유효성 검사를 위한 라이브러리

// 리뷰 등록 폼 컴포넌트 정의
const register = () => {
  const [content] = useState('');   // 텍스트 필드의 내용을 저장할 상태 변수, 초기값 설정
  const { onCreateReview } = useReview();

  const params = useParams();
  const {courseId} = params;

  // courseId를 number로 변환
  const numericCourseId = Number(courseId);

  // 유효성 검사 스키마
  const schema = yup.object().shape({

    rating: yup
    .number()
    .typeError("숫자로 적어주세요")
    .min(1, "평점을 입력해주세요")
    .max(5, "5이하 값을 넣어주세요")
    .required("평점을 입력해주세요"),
    content: yup
    .string()
    .typeError("강의평을 입력해주세요")
    .max(256, "256자 이내로 적어주세요")
    .required("강의평을 입력해주세요"),

  })

  // useForm 훅 사용
  const {
    setValue,
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset, // 폼 초기화. reset
    watch // watch 훅 추가
  } = useForm<ReviewRegister>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
        rating: 0,
        content: "",
    }
  })

  // 폼 제출 핸들러
  const onSubmit = (data:ReviewRegister) => { 
    // 타입에 courseId를 추가한 게 아니라 post요청을 보낼 때 요청 데이터에 포함시켜
    const postData = {...data, course_id:numericCourseId}
    console.log(`Food: ${content}, Img: ${ratingValue}, course_id: ${numericCourseId}`)
    onCreateReview(postData)
    reset()
    // console.log(`Food: ${food}, Img: ${img}`);
  };

  const ratingValue = watch("rating", 0) // rating값을 watch로 가져옵니다.


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="star-rating">
          <Rating
            name="course-rating"
            value={ratingValue}
            onChange={(event, newValue) => {
              setValue("rating", newValue || 0);
            }}
            size="large"
            precision={1}
          />
          {errors.rating && <p>{errors.rating.message}</p>}
        </Box>
        <TextField
          multiline
          rows={8}
          variant="filled"
          fullWidth
          placeholder="이 강의에 대한 총평을 작성해주세요."
          {...register('content')}
          className="rating-textarea"
          helperText={errors.content?.message}
        />
        <Button className="submit-button" type="submit" >등록</Button>
    </form>
  );
};

export default register