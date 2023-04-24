import React from 'react';
import { Modal } from 'react-bootstrap';
import './share.css'
import s1 from '../images/gmail 1.png'
import s2 from '../images/dropbox-logo 1.png'
import s3 from '../images/dropbox-logo 2.png'

const Share = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='title' id="contained-modal-title-vcenter">
                    Share
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='drop-img'>
                    <div className='img-div'>
                        <img src={s2} alt="" />
                        <p>Dropbox</p>
                    </div>
                    <div className='img-div'>
                        <img src={s1} alt="" />
                        <p>Gmail</p>
                    </div>
                    <div className='img-div'>
                        <img src={s3} alt="" />
                        <p>Google Drive</p>
                    </div>
                </div>
                <div className='btnss'>
                    <p className='btn-cancel mt-2'>Cancel</p>
                    <button className='btn-save'>Save</button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Share;