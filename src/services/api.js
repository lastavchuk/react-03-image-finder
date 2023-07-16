import axios from 'axios';

export const requestGetImages = async (searchTerm, currentPage = 1) => {
    const { data } = await axios.get('https://pixabay.com/api/', {
        params: {
            q: searchTerm,
            key: '14715386-62189850d4fd3a7a1b8d3fb7e',
            page: currentPage,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
        },
    });

    return data;
};
