import axios from 'axios';
import bookModel from '../models/bookModel';

export const getBooks = async () => {
    try {
        const response = await axios.get<Array<bookModel>>('/books.json');
        return response;
    } catch (error) {
        throw new Error('Error fetching books');
    }
};