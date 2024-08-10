import 'styles/review.css'

interface StarProps {
    rating: number
    size: number
}

// 평점에 따른 별 출력 컴포넌트 따로 제작
const Star = ({ rating, size }: StarProps) => {
    const roundedRating = Math.round(rating * 2) / 2
    const fullStars = Math.floor(roundedRating)
    const halfStar = roundedRating % 1 !== 0 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStar
    
    const starStyle = {
        width: `${size}px`,
        height: `${size}px`,
        margin: '0 2px',
    }

    return (
        <>
        {Array.from({ length: fullStars }).map((_, index) => (
            <img key={`full-${index}`} src="/img/full-star.png" alt="Star" style={starStyle} />
        ))}

        {halfStar === 1 && (
            <img key="half" src="/img/half-star.png" alt="Half Star" style={starStyle} />
        )}
        
        {Array.from({ length: emptyStars }).map((_, index) => (
            <img key={`empty-${index}`} src="/img/empty-star.png" alt="Empty Star" style={starStyle} />
        ))}
        </>
    )
}

export default Star
