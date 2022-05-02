import { Modal, Button, InputGroup, FormControl } from "react-bootstrap"
import { useCallback, useState } from 'react'; 
import * as Data from '../util/data';

export default function WriteModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [text, setText] = useState('');
    const [imgs, setImgs] = useState([]);
    const onChange = (event) => {
      setText(event.target.value);
    }
    const save = () => {
        const product = Data.productList.find(product => product.id === props.productId);
        const data = {
            id: '3',
            userId: 'a',
            rate: 4,
            review: text,
            date: new Date(),
            img: imgs
        };
        props.onCallback(data);
        handleClose();
    }
    const handleFiles = async (e) => {
        const fileBlob = await readfile(e.target.files[0]);
        const imgs = [{
            file: e.target.files[0],
            fileBlob
        }];
        setImgs(imgs);
    }
    function readfile(file) {
        var reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onloadend = function(evt) {
                // file is loaded
                const result = evt.target.result;
                // const result = new Blob([evt.target.result], { type: file.type });
                resolve(result)
            };
            reader.onerror = reject;
            reader.readAsDataURL(file); //blob이나 파일 읽고 종료되면 readystate done이 되어 onloadend실행
        });
    }
    return (
        <>
        <Button variant="primary" onClick={handleShow}>글쓰기</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>글 작성</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
                {/* <InputGroup.Text></InputGroup.Text> */}
                <FormControl as="textarea" aria-label="With textarea" onChange={onChange}/>
            </InputGroup>
            <InputGroup>
                <input type="file" id="input" onChange={handleFiles}/>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={save}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        );
}
