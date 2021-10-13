import axios from "axios";

export default class ImageService {
    static async getAll(){
        const response = await axios.get('https://boiling-refuge-66454.herokuapp.com/images/')
        return (response.data )
    }

    static async getById(id) {
        const response = await axios.get('https://boiling-refuge-66454.herokuapp.com/images/' + id)
        return (response.data )
    }
 }