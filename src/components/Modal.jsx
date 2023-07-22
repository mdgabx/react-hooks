import { createPortal } from 'react-dom'; 

const Modal = () => {
	return createPortal(
		<div>
			Modal
		</div>, document.querySelector('#modal')

	)
}

export default Modal;