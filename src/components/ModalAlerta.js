import { Button, Modal } from 'react-bootstrap';

const ModalAlerta = ({ show, handleClose, alert }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} >
                <Modal.Body><h6 className={alert.text}>{alert.mensaje}</h6></Modal.Body>
                <Modal.Footer>
                    <Button variant={alert.button} onClick={handleClose} size="sm">
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalAlerta;
