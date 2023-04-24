import React from 'react';
import { Modal } from 'react-bootstrap';
import './share.css';
import s1 from '../images/dropbox-logo 1.png'
import s2 from '../images/Vector.png'
const FileUpload = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='title' id="contained-modal-title-vcenter">
                    File Upload
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='drop-img'>
                    <div className='img-div'>
                        <img src={s1} alt="" />
                        <p>Upload from your Dropbox</p>
                        <button className='btn-save'>Upload</button>
                    </div>
                    <div className='img-div'>
                        <img src={s2} alt="" />
                        <p>Upload from your Device</p>
                        <button className='btn-save'>Upload</button>
                    </div>
                </div>
                <div className='btnss'>
                    <p className='btn-cancel mt-2'>No, I Cancelled</p>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default FileUpload;