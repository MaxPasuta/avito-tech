import React, {useEffect, useState} from 'react';
import './styles/App.css';
import ImageList from "./components/ImageList";

import Footer from "./components/Footer";
import MyModal from "./UI/MyModal/MyModal";
import ImageService from "./API/ImageService";
import ImageСomment from "./components/ImageСomment";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


function App() {

    const [images, setImages] = useState([])
    const [modal, setModal] = useState(false);
    const [imageId, setImageId] = useState();
    const [dataImage, setDataImage] = useState([])

    const [comment, setComment] = useState({name: '', body: ''})

    useEffect(() => {
        fetchImages();

    }, [])



    async function fetchImages() {
        const images = await ImageService.getAll()
        setImages(images)
    }

    async function response() {
        const data = await ImageService.postAddComment(imageId,comment.name, comment.body)
        console.log(data)
    }

    const addNewComment = (e) => {
        e.preventDefault()
        const newComment = {
            ...comment
        }
        response()
        setComment({name: '', body: ''})
    }



    return (
        <div className="App">
            <h1>TEST APP</h1>
            <ImageList images={images} setImageId = {setImageId}  setDataImage = {setDataImage} setVisible={setModal}></ImageList>
            <MyModal visible={modal} setVisible={setModal}>
                <div className="container">
                    <img className='image' src={dataImage.url} alt='image'/>
                    <ImageСomment className='comments' data={dataImage.comments}></ImageСomment>
                    <button className='exit_btn' onClick={() => setModal(false)}>&times;</button>
                    <form className='comment_form'>
                        <MyInput value={comment.name}
                                 onChange={e => setComment({...comment, name: e.target.value})}
                                 type="text"
                                 placeholder="Ваше имя"/>
                        <MyInput value={comment.body}
                                 onChange={e => setComment({...comment, body: e.target.value})}
                                 type="text"
                                 placeholder="Ваше комментарий"/>
                        <MyButton onClick={addNewComment}>Оставить комментарий</MyButton>
                    </form>
                </div>
            </MyModal>
            <div className="footer">
                <div className="footer_line"></div>
                <div className="footer_content">© 2018-2019
                </div>
            </div>
        </div>
    );
}

export default App;
