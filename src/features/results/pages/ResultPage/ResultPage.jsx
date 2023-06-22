import { useEffect } from 'react';
import PdfResult from '../../components/PdfResult/PdfResult';
import TextResult from '../../components/TextResult/TextResult';

import { useDispatch } from 'react-redux';
import { addText } from '../../reducers/result.reducer';
import './ResultPage.css';

export default function ResultPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addText('kaka'));
        dispatch(addText('koko'));
    }, []);

    return (
        <div className="result-page-wrapper">
            <div className="result-page-left-section">
                <PdfResult />
            </div>
            <div className="result-page-right-section">
                <div className="result-page-top-section">
                    <TextResult />
                </div>
                <div className="result-page-bottom-section"></div>
            </div>
        </div>
    );
}
