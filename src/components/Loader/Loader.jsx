import { StyledOverlay } from 'components/Modal/Modal.styled';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
    return (
        <StyledOverlay>
            <StyledLoader />
        </StyledOverlay>
    );
};
