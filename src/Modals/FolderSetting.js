import React from 'react';
import { Form, Modal } from 'react-bootstrap';

const FolderSetting = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='title' id="contained-modal-title-vcenter">
                    Folder Setting
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='folder'>
                <div>
                    <span className='visible'>Visible</span>
                    <Form.Select className='visible' >
                        <option >All</option>
                    </Form.Select>
                </div>
                <div className='mt-4'>
                    <Form.Label className='visible' htmlFor="inputPassword5">Password File</Form.Label>
                    <div className='box'>
                        <span className='c-box'> <Form.Check className='visible' aria-label="option 1" /> <span className='visible ms-2'>NO</span></span>
                        <span className='c-box'> <Form.Check className='visible' aria-label="option 1" /> <span className='visible ms-2'>YES</span></span>
                    </div>
                </div>
                <div className='mt-4'>
                    <Form.Label className='visible' htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
                <div className='btnss mt-5'>
                    <p className='btn-cancel mt-2'>Cancel</p>
                    <button className='btn-save'>Save</button>
                </div>

            </Modal.Body>
        </Modal>
    );
};

export default FolderSetting;