import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ResultPage from './features/results/pages/ResultPage/ResultPage';

export default function RootRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
            <Routes>
                <Route path="result" element={<ResultPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
