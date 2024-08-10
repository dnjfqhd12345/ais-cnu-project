import { Typography } from "@mui/material";
import Star from "components/common/Star";
import { useReview } from "hooks";
import { useEffect } from "react";
import { calculateAverageRating } from "utill/calculate";

interface AverageStarProps {
  courseName: string;
  professor: string;
}

const AverageStar = ({ courseName, professor }: AverageStarProps) => {
  const { onCreateReviewList, reviewList } = useReview();

  useEffect(() => {
    if (courseName && professor) {
      onCreateReviewList(courseName, professor);
    }
  }, [courseName, professor]);

  const averageRating = calculateAverageRating(reviewList);

  return (
    <Typography className="average-rate">
      평균 별점: <Star rating={averageRating} size={20} /> {averageRating}
    </Typography>
  );
};

export default AverageStar;
