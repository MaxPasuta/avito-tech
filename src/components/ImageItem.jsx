import React, {useEffect, useState} from 'react';

const ImageItem = ({dataImage}) => {


    return (
        <div className="ImageItem">
            <img src={dataImage.url} alt='image'/>
        </div>
    );
};

export default ImageItem;