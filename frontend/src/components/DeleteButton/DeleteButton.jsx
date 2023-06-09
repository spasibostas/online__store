import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './DeleteButton.scss'

const DeleteButton = ({handleDelete, id}) => {
  return (
    <div>
        <CloseOutlinedIcon
            className="delete-icon"
            onClick={() => handleDelete(id)}
        />
    </div>
  )
}

export default DeleteButton