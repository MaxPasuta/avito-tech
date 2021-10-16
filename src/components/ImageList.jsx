import React, {useState} from 'react';
import ImageService from "../API/ImageService";

const ImageList= ({images, setImageId, setDataImage, setVisible}) => {

    async function fetchById(id) {
        const data = await ImageService.getById(id)
        setDataImage(data)
    }

    function ImageClick(id) {
        fetchById(id);
        setImageId(id);
        setVisible(true);
    }

    return (
        <div className={'gallery'}>
            {images.map((image) =>
                <img className={'gallery__image'} key ={image.id} src={image.url} alt='' onClick={ () => ImageClick(image.id)}/>
            )}
        </div>
    );
}

export default ImageList;