import PdfResult from '../../components/PdfResult/PdfResult';
import TextResult from '../../components/TextResult/TextResult';
import ImageList from '../../components/ImageList/ImageList';

import './ResultPage.css';

export default function ResultPage() {
    return (
        <div className="result-page-wrapper">
            <div className="result-page-left-panel">
                <ImageList />
            </div>
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
