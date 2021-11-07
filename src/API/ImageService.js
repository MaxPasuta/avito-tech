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

    static async postAddComment(id,name,text) {
        console.log(id, name, text)
        const response = await axios({
            method: 'post',
            url: `https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`,
            data: {
                name:name,
                test:text,
            }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        return response;
    }
 }