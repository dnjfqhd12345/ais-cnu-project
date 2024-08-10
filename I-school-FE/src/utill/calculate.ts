import { CourseReview } from "types/review"

// 평균 평점 계산 함수
export const calculateAverageRating = ( courseReviews : CourseReview[]): number => {
    if (courseReviews.length === 0) return 0 // 리뷰가 없으면 0 반환
    const totalRating = courseReviews.reduce((sum, review: CourseReview) => sum + review.rating, 0)
    return parseFloat((totalRating / courseReviews.length).toFixed(1)) // 소수점 첫째 자리까지 반올림
}
