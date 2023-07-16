import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledModal, StyledOverlay } from './Modal.styled';

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keyup', this.onPressKeyEsc);
    }
    componentWillUnmount() {
        window.removeEventListener('keyup', this.onPressKeyEsc);
    }

    onPressKeyEsc = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    onCloseModal = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        return (
            <StyledOverlay onClick={this.onCloseModal}>
                <StyledModal>
                    <img
                        src={this.props.modalData.largeImgSrc}
                        alt={this.props.modalData.alt}
                    />
                </StyledModal>
            </StyledOverlay>
        );
    }
}

Modal.propTypes = {
    modalData: PropTypes.shape({
        largeImgSrc: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};
