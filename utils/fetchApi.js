import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '59738bcf79mshd6bde96a915c73cp1e1867jsnd0ee77e62bdc',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'   
        }
    });

    return data;
}