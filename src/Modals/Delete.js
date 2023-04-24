import React from 'react';
import { Modal } from 'react-bootstrap';
import deleteImg from '../images/recycle-bin 1.png';
import './delete.css'

const Delete = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='mod'>
                <div className='deleteImg'>
                    <div className='circle'>
                        <img src={deleteImg} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='delete-text'>Do you want to delete this Folder?</h1>
                    <p className='delete-body'>This folder will have 15  files. Once you delete the folder 15 <br /> files will not show forever. There is no undo option</p>
                </div>
                <div className='btns'>
                    <p className='btn-cancel me-5 mt-2'>No, I Cancelled</p>
                    <button className='btn-dlt'>Delete</button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Delete;