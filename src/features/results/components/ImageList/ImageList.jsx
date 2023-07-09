import './ImageList.css';
import { useDispatch, useSelector } from 'react-redux';
import { resultStateSelector, setSelectedIndex } from '../../reducers/result.reducer';
import { useEffect, useState } from 'react';
import { Image, List } from 'antd';

export default function ImageList() {
    const resultState = useSelector(resultStateSelector);
    const dispatch = useDispatch();

    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(resultState.data);
    }, [resultState.data]);

    const onClickImage = (index) => {
        dispatch(setSelectedIndex(index));
    };

    return (
        <div className="image-list-result-wrapper">
            <List
                rowKey={Date.now()}
                bordered
                dataSource={images}
                renderItem={(item, index) => (
                    <List.Item key={index}>
                        <Image
                            width={150}
                            src={item.image_metadata}
                            preview={false}
                            onClick={() => onClickImage(index)}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
}
