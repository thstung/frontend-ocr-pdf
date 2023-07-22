import { Image, List } from 'antd';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    resultStateSelector,
    setIsOpenTableResultModal,
    setIsPreviewVisible,
    setSelectedTable,
} from '../../reducers/result.reducer';
import TableResultModal from '../TableResultModal/TableResultModal';
import './TableResult.css';
import VirtualList from 'rc-virtual-list';

export default function TableResult() {
    const resultState = useSelector(resultStateSelector);

    const dispatch = useDispatch();

    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

    const tableList = useMemo(() => {
        if (resultState.selectedIndex < 0) return [];

        const selectedData = (resultState.data || [])[resultState.selectedIndex];
        const data = selectedData?.metadata?.table_metadata || [];
        return data;
    }, [resultState.selectedIndex, resultState.data]);

    const isPreviewVisible = useMemo(() => {
        return resultState.isPreviewVisible;
    }, [resultState.isPreviewVisible]);

    const onClickImage = (table, index) => {
        dispatch(setSelectedTable(table));
        dispatch(setIsOpenTableResultModal(true));
        setSelectedImageIndex(index);
    };

    const setVisible = (visible) => {
        dispatch(setIsPreviewVisible(visible));
    };

    return (
        <div className="table-result-wrapper">
            <List>
                <VirtualList data={tableList} direction="row">
                    {(table, index) => (
                        <List.Item key={index}>
                            <Image
                                height={100}
                                width={200}
                                src={table.table_image}
                                preview={{
                                    visible: isPreviewVisible && index === selectedImageIndex,
                                    onVisibleChange: () => setVisible(false),
                                }}
                                onClick={() => onClickImage(table, index)}
                            />
                        </List.Item>
                    )}
                </VirtualList>
            </List>
            <TableResultModal />
        </div>
    );
}
