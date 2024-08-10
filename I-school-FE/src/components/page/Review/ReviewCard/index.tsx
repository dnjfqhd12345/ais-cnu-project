// Review/ReviewCard/index.tsx
import { Card, CardContent, Typography } from "@mui/material";
import { CourseReview } from "types/review";
import 'styles/review.css';
import Star from "components/common/Star";

interface ReviewProps {
  review: CourseReview;
}

const ReviewCard = ({ review }: ReviewProps) => {
  return (
    <Card className="review-card">
      <CardContent className="review-card-content">
        <Typography>
          {review.content}
        </Typography>
        <Typography>
          <Star rating={review.rating} size={15} /> {/* 작은 크기로 별 이미지 표시 */}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
