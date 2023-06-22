import { CopyOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { resultStateSelector } from '../../reducers/result.reducer';
import './TextResult.css';

export default function TextResult() {
    const resultState = useSelector(resultStateSelector);

    const [input, setInput] = useState('');

    useEffect(() => {
        setInput(resultState.texts.join(`\n`));
    }, [resultState.texts]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(input);
    };

    return (
        <div className="text-result-wrapper">
            <div className="text-result-data-section">
                <Input.TextArea value={input} onChange={(e) => setInput(e.target.value)} />
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
