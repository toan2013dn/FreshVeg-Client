import Modal from '@mui/material/Modal';

function AddCategory({ isOpen, onClose }) {
  return <Modal open={isOpen} onClose={onClose}>
    <span style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    }}>dcm</span>
  </Modal>
}

export default AddCategory;
