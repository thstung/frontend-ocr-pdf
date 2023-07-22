import './ImageList.css';
import { useDispatch, useSelector } from 'react-redux';
import { resultStateSelector, setSelectedIndex } from '../../reducers/result.reducer';
import { useEffect, useState } from 'react';
import { Image, List } from 'antd';
import VirtualList from 'rc-virtual-list';

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
            <List>
                <VirtualList data={images} height="calc(100vh - 32px)">
                    {(item, index) => (
                        <List.Item key={index}>
                            <Image
                                width={150}
                                src={item.image_metadata}
                                className={index === resultState.selectedIndex ? 'selected' : ''}
                                preview={false}
                                onClick={() => onClickImage(index)}
                            />
                        </List.Item>
                    )}
                </VirtualList>
            </List>
        </div>
    );
}
