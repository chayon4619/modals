
import { Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import FolderSetting from './Modals/FolderSetting';
import FileUpload from './Modals/FileUpload';
import Share from './Modals/Share';
import Delete from './Modals/Delete';

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalUpload, setModalUpload] = useState(false);
  const [modalShare, setModalShare] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  return (
    <div className="App mt-5">
      <Button className='me-3' variant="outline-success" onClick={() => setModalShow(true)}>
        Folder Settings
      </Button>
      <FolderSetting
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
      </FolderSetting>


      <Button className='me-3' variant="outline-dark" onClick={() => setModalUpload(true)}>
        File Upload
      </Button>
      <FileUpload
        show={modalUpload}
        onHide={() => setModalUpload(false)}
      ></FileUpload>


      <Button className='me-3' variant="outline-secondary" onClick={() => setModalShare(true)}>
        Share
      </Button>
      <Share
        show={modalShare}
        onHide={() => setModalShare(false)}>
      </Share>



      <Button variant="outline-danger" onClick={() => setModalDelete(true)}>
        Delete
      </Button>
      <Delete
        show={modalDelete}
        onHide={() => setModalDelete(false)}
      ></Delete>

    </div>
  );
}

export default App;
