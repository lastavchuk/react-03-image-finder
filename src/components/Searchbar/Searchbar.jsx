import PropTypes from 'prop-types';
import { StyledSearchbar } from './Searchbar.styled';
import { SearchForm } from 'components/Forms/SearchForm';

export const Searchbar = ({ onGetNewImages }) => {
    return (
        <StyledSearchbar>
            <SearchForm onGetNewImages={onGetNewImages} />
        </StyledSearchbar>
    );
};
Searchbar.propTypes = {
    onGetNewImages: PropTypes.func.isRequired,
};
