import { CopyOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { resultStateSelector } from '../../reducers/result.reducer';
import './TextResult.css';
import _ from 'lodash';

export default function TextResult() {
    const resultState = useSelector(resultStateSelector);

    const [input, setInput] = useState('');

    useEffect(() => {
        try {
            if (resultState.selectedIndex < 0) return;
            const selectedData = (resultState.data || [])[resultState.selectedIndex];
            if (!selectedData) return;

            const data = selectedData.metadata?.text_metadata || [];
            const reversedData = _.reverse(_.cloneDeep(data));
            setInput(reversedData.map((d) => d.text).join('\n'));
        } catch (error) {
            console.log(error);
        }
    }, [resultState.selectedIndex]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(input);
    };

    return (
        <div className="text-result-wrapper">
            <div className="text-result-data-section">
                <Input.TextArea value={input} onChange={(e) => setInput(e.target.value)} autoSize={{ minRows: 10 }} />
            </div>

            <div className="text-result-action-section">
                <Button icon={<CopyOutlined />} onClick={copyToClipboard}>
                    Copy to clipboard
                </Button>
                <Button icon={<DownloadOutlined />}>Download</Button>
            </div>
        </div>
    );
}
