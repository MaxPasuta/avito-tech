import React, {useEffect, useState} from 'react';
import ImageService from "../API/ImageService";

const ImageItem = ({imageId, setVisible}) => {

    const [dataImage, setDataImage] = useState([])

    async function fetchById(id) {
        const data = await ImageService.getById(id)
        setDataImage(data)
    }

    useEffect(() => {

        fetchById(imageId);
        setVisible(true);

    }, [imageId])


console.log(dataImage)
    return (
        <div>
            <img src={dataImage.url} alt='' />

        </div>
    );
};

export default ImageItem;