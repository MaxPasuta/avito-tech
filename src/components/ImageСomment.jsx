import React from 'react';
import moment from "moment";
import 'moment/locale/ru';


const ImageСomment = ({data}) => {
    moment.locale('ru')
    if (data && data.length>0){
        return (
            <div className='comment'>
                {data.map((comment) =>
                    <div key={comment.id}>
                        <div className='comment_date'>{moment(comment.date).format('L')}</div>
                        <div className='comment_text'>{comment.text} </div>
                    </div>
                )}
            </div>

        );
    }

    return (
        <div className='comment'>
            Нет комментариев
        </div>
    );
};

export default ImageСomment;