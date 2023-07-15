import { Image, List } from 'antd';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    resultStateSelector,
    setIsOpenTableResultModal,
    setIsPreviewVisible,
    setSelectedTable,
} from '../../reducers/result.reducer';
import TableResultModal from '../TableResultModal/TableResultModal';
import './TableResult.css';

export default function TableResult() {
    const resultState = useSelector(resultStateSelector);

    const dispatch = useDispatch();

    const tableList = useMemo(() => {
        if (resultState.selectedIndex < 0) return [];

        const selectedData = (resultState.data || [])[resultState.selectedIndex];
        const data = selectedData.metadata?.table_metadata || [];
        return data;
    }, [resultState.selectedIndex, resultState.data]);

    const isPreviewVisible = useMemo(() => {
        return resultState.isPreviewVisible;
    }, [resultState.isPreviewVisible]);

    const onClickImage = (table) => {
        dispatch(setSelectedTable(table));
        dispatch(setIsOpenTableResultModal(true));
    };

    const setVisible = (visible) => {
        dispatch(setIsPreviewVisible(visible));
    };

    return (
        <div className="table-result-modal-wrapper">
            <List
                rowKey={Date.now()}
                bordered
                dataSource={tableList}
                renderItem={(table, index) => (
                    <List.Item key={index}>
                        <Image
                            width={150}
                            src={table.table_image}
                            preview={{
                                visible: isPreviewVisible,
                                onVisibleChange: () => setVisible(false),
                            }}
                            onClick={() => onClickImage(table)}
                        />
                    </List.Item>
                )}
            />
            <TableResultModal />
        </div>
    );
}
