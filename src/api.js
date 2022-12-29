import axios from 'axios';

const SearchImages = async (term) => { 
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: { 
            Authorization: 'Client-ID yCjdR9hNAXpYNuLLhR42CSkiIWX3Ed_gLSDsLaepvWs'
        },
        params: {
            query: term,
         },
    });
    console.log(response);
    return response.data.results;
    
}

export default SearchImages;