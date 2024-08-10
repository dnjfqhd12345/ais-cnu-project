import React from 'react';
import { Box, IconButton, Modal as MuiModal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import 'styles/select-modal.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onGradeSelect: (grade: number) => void;
}

const GradeModal: React.FC<ModalProps> = ({ show, onClose, onGradeSelect }) => {
  const handleGradeClick = (grade: number) => {
    onGradeSelect(grade);
    onClose();
  };

  return (
    <MuiModal
      open={show}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box className="modalBox" onClick={(e) => e.stopPropagation()}>
        <IconButton className="modalClose" onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <div className="modalContent">
          <h3>학년</h3>
          <ul id="modal-description">
            {[1, 2, 3, 4, 5, 6].map(grade => (
              <li key={grade} onClick={() => handleGradeClick(grade)}>{grade}학년</li>
            ))}
          </ul>
        </div>
      </Box>
    </MuiModal>
  );
};

export default GradeModal;
