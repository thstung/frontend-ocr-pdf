import { Button, Modal } from 'antd';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { utils, writeFileXLSX } from 'xlsx';
import { resultStateSelector, setIsOpenTableResultModal, setIsPreviewVisible } from '../../reducers/result.reducer';
import TableResultData from '../TableResultData/TableResultData';
import './TableResultModal.css';

export default function TableResultModal() {
    const resultState = useSelector(resultStateSelector);
    const dispatch = useDispatch();

    const tableMetadata = useMemo(() => {
        const selectedData = resultState.selectedTable;
        const data = selectedData || [];
        return data;
    }, [resultState.selectedTable]);

    const onClose = () => {
        dispatch(setIsOpenTableResultModal(false));
    };

    const openPreview = () => {
        dispatch(setIsPreviewVisible(true));
    };

    const downloadTable = () => {
        const selectedData = resultState.selectedTable;
        const rows = selectedData?.table_data?.rows || [];
        const wb = utils.book_new();
        const ws = utils.aoa_to_sheet(rows);
        utils.book_append_sheet(wb, ws, `Table 1`);
        writeFileXLSX(wb, `Table_${Date.now()}.xlsx`);
    };

    return (
        <div className="table-result-modal-wrapper">
            <Modal
                title="Table result"
                centered
                open={resultState.isOpenTableResultModal}
                onOk={() => onClose()}
                onCancel={() => onClose()}
            >
                <Button onClick={() => openPreview()}>Xem ảnh</Button>
                <Button onClick={() => downloadTable()}>Tải xuống</Button>
                <TableResultData metadata={tableMetadata} />
            </Modal>
        </div>
    );
}
