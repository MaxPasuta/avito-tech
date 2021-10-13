import React, {useState} from 'react';

const ImageList= ({images, setImageId}) => {

    function ImageClick(id) {
        setImageId(id);
        console.log(id);
    }


    return (
        <div className={'Images'}>
            {images.map((image) =>
                <img className={'oneImage'} key ={image.id} src={image.url} alt='' onClick={ () => ImageClick(image.id)}/>
            )}
        </div>
    );
}

export default ImageList;