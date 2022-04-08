import axios from 'axios'

const apiUrl="http://localhost:4000/admin/addproduct";

export const multiFileUpload = async (data) => {
    try {
        await axios.post(apiUrl + "", data )
    } catch (error) {
        throw error;
        
    }
}