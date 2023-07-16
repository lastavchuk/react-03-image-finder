import PropTypes from 'prop-types';
import { StyledSearchForm } from './SearchForm.styled';

export const SearchForm = ({ onGetNewImages }) => {
    return (
        <StyledSearchForm className="form" onSubmit={onGetNewImages}>
            <button type="submit" className="button">
                <span className="button-label">Search</span>
            </button>

            <input
                className="input"
                type="text"
                autoComplete="off"
                name="search"
                autoFocus
                placeholder="Search images and photos"
            />
        </StyledSearchForm>
    );
};

SearchForm.propTypes = {
    onGetNewImages: PropTypes.func.isRequired,
};
