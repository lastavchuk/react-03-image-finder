import styled from 'styled-components';
import svgSearch from '../../images/search.svg';

export const StyledSearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;

    & .button {
        display: inline-block;
        width: 48px;
        height: 48px;
        border: 0;
        background-image: url(${svgSearch});
        background-size: 40%;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.6;
        transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        outline: none;
    }

    & .button:hover {
        opacity: 1;
    }

    & .button-label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        clip-path: inset(50%);
        border: 0;
    }

    & .input {
        display: inline-block;
        width: 100%;
        font: inherit;
        font-size: 20px;
        line-height: 1.3;
        border: none;
        outline: none;
        padding-left: 4px;
        padding-right: 4px;
    }

    & .input::placeholder {
        font: inherit;
        font-size: 18px;
    }
`;
