import React, { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useRouter } from 'next/navigation';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import { API } from 'constant/api';

interface TimetableModalProps {
  open: boolean;
  handleClose: () => void;
  course: any;
}

const TimetableModal: React.FC<TimetableModalProps> = ({ open, handleClose, course }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  if (!course) return null;

  const handleReviewClick = () => {
    const courseName = encodeURIComponent(course.courseName);
    const professor = encodeURIComponent(course.professor);
    const courseId = encodeURIComponent(course.courseId);
    router.push(`/review-page/${courseName}/${professor}/${courseId}`);
  };

  const handleExamInfoClick = () => {
    console.log(`시험정보: ${course.courseName} - ${course.professor}`);
  };

  const handleDeleteClick = async () => {
    setIsDeleting(true);
    try {
      await axios.request({
        method: 'DELETE',
        url: API.SHOW_TIMETABLE,
        data: {
          courseCode: course.courseCode,
        },
      });
      console.log(`수업 삭제: ${course.courseName} - ${course.professor}`);
      handleClose();
    } catch (error) {
      console.error('Error deleting course:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ border: 0 }} // 테두리 색상을 투명으로 설정
    >
      <Box
        className="modal-box"
        sx={{ backgroundColor: 'white', padding: 4, border: 0, margin: 'auto', width: '300px', borderRadius: '8px' }}
      >
        <Button 
          color="secondary" 
          sx={{ mt: 1, width: '100%', border: 'none', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', outline: 'none' }} 
          onClick={handleReviewClick}
        >
          <StarBorderIcon sx={{ mr: 1 }} />
          강의평
        </Button>
        <Button 
          color="secondary" 
          sx={{ mt: 1, width: '100%', border: 'none', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', outline: 'none' }}
          onClick={handleExamInfoClick}
        >
          <PlagiarismOutlinedIcon sx={{ mr: 1 }} />
          시험정보
        </Button>
        <Button
          color="secondary"
          sx={{ mt: 1, width: '100%', border: 'none', color: 'red', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', outline: 'none' }}
          onClick={handleDeleteClick}
          disabled={isDeleting}
        >
          <DeleteOutlineIcon sx={{ mr: 1 }} />
          {isDeleting ? '삭제 중...' : '수업삭제'}
        </Button>
      </Box>
    </Modal>
  );
};

export default TimetableModal;
