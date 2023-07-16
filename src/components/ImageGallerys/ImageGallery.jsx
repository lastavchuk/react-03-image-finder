import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, onModalClick }) => {
    return (
        <StyledImageGallery>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    src={webformatURL}
                    alt={tags}
                    largeImgSrc={largeImageURL}
                    onModalClick={onModalClick}
                ></ImageGalleryItem>
            ))}
        </StyledImageGallery>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        })
    ).isRequired,
    onModalClick: PropTypes.func.isRequired,
};
