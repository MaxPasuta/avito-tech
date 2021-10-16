import React from 'react';
import moment from "moment";
import 'moment/locale/ru';


const ImageСomment = ({data}) => {
    moment.locale('ru')
    if (data && data.length>0){
        return (
            <div className='comments'>
                {data.map((comment) =>
                    <div key={comment.id}>
                        <ol className='comments_date'>{moment(comment.date).format('L')}</ol>
                        <ol className='comments_text'>{comment.text} </ol>
                    </div>
                )}
            </div>

        );
    }


    return (
        <div className='comments comments_text'>
            Нет комментариев
        </div>
    );
};

export default ImageСomment;