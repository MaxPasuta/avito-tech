import React, {useEffect, useState} from 'react';
import './styles/App.css';
import ImageList from "./components/ImageList";

import Footer from "./components/Footer";
import MyModal from "./UI/MyModal/MyModal";
import ImageService from "./API/ImageService";
import ImageItem from "./components/ImageItem";

function App() {

    const [images, setImages] = useState([])
    const [modal, setModal] = useState(false);

    const [imageId, setImageId] = useState();

    useEffect(() => {
        fetchImages();

    }, [])



    async function fetchImages() {
        const images = await ImageService.getAll()
        setImages(images)
    }




    return (
        <div className="App">
            <h1>TEST APP</h1>
            <ImageList images={images} setImageId = {setImageId}></ImageList>
            <MyModal visible={modal} setVisible={setModal}> <ImageItem imageId = {imageId} setVisible={setModal}></ImageItem></MyModal>


        </div>
    );
}

export default App;
