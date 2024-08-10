// reviewRegister 입력 데이터 타입 생성

export type ReviewRegister = { // 사용자로부터 입력받고 유효성검사하기 위한 타입
    content: string
    rating: number
}

export type postData = { // URL에있는 variable받아서 post요청 보내기 위한 타입
    content: string
    rating: number
    course_id: number
}