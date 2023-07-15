import { Table } from 'antd';
import _ from 'lodash';
import { useMemo } from 'react';
import './TableResultData.css';

export default function TableResultData(props = {}) {
    const { metadata = {} } = props;

    const dataSource = useMemo(() => {
        const { table_data = {} } = metadata;
        if (_.isEmpty(table_data)) return [];
        const { rows = [] } = table_data;

        return rows.map((row, index) => {
            return {
                key: index,
                editable: true,
                ...(row || []).reduce((currentData, currentRowData, currentIndex) => {
                    currentData[currentIndex] = currentRowData;
                    return currentData;
                }, {}),
            };
        });
    }, [metadata]);

    const columns = useMemo(() => {
        const { table_data = {} } = metadata;
        if (_.isEmpty(table_data)) return [];
        const { column_number = 0 } = table_data;

        return Array.from(Array(column_number).keys()).map((row, index) => {
            return {
                dataIndex: index,
                key: index,
                editable: true,
            };
        });
    }, [metadata]);

    return (
        <div className="table-result-data-wrapper">
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    );
}
