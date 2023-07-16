import PropTypes from 'prop-types';
import { StyledImageGalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, largeImgSrc, onModalClick }) => {
    return (
        <StyledImageGalleryItem>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onClick={() => {
                    onModalClick({ largeImgSrc, alt });
                }}
            />
        </StyledImageGalleryItem>
    );
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImgSrc: PropTypes.string.isRequired,
    onModalClick: PropTypes.func.isRequired,
};
