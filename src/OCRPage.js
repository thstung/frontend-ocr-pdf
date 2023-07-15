// // // import React, { useState } from 'react';
// // // import { FaFilePdf } from 'react-icons/fa';

// // // const OCRPage = () => {
// // //   const [selectedFile, setSelectedFile] = useState(null);
// // //   const [ocrInProgress, setOcrInProgress] = useState(false);

// // //   const handleFileChange = (event) => {
// // //     setSelectedFile(event.target.files[0]);
// // //   };

// // //   const handleOCRClick = () => {
// // //     // Thực hiện xử lý OCR ở đây
// // //     if (selectedFile) {
// // //       setOcrInProgress(true);
// // //       // Gọi hàm xử lý OCR tại đây
// // //       // ...
// // //       // Sau khi xử lý xong, đặt ocrInProgress thành false
// // //       setOcrInProgress(false);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <div>
// // //         <header style={{
// // //           display: 'flex',
// // //           alignItems: 'center',
// // //           justifyContent: 'flex-start',
// // //           borderBottom: '3px solid #007bff',
// // //           padding: '10px',
// // //           color: '#007bff',
// // //           fontWeight: 'bold',
// // //         }}>
// // //           <FaFilePdf size={40} style={{ marginRight: '10px' }} />
// // //           <span>PDF OCR</span>
// // //         </header>
// // //       </div>
// // //       <main>
// // //         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // //           <h1 style={{ color: 'black', fontFamily: 'Arial' }}>PDF OCR</h1>
// // //           <p style={{ color: 'black', fontFamily: 'Arial' }}>Nhận diện nội dung qua OCR và trích xuất thông tin từ file pdf báo cáo tài chính</p>
// // //           <ul style={{ color: 'black', fontFamily: 'Arial', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
// // //             <li style={{ listStyle: 'none', marginRight: '10px' }}>
// // //               <span style={{ color: 'green', marginRight: '5px' }}>✓</span>Miễn phí
// // //             </li>
// // //             <li style={{ listStyle: 'none', marginRight: '10px' }}>
// // //               <span style={{ color: 'green', marginRight: '5px' }}>✓</span>Trực tuyến
// // //             </li>
// // //           </ul>
// // //         </div>
// // //         <div
// // //           style={{
// // //             width: '80%',
// // //             height: '250px',
// // //             border: '2px dashed darkblue',
// // //             backgroundColor: '#fffce5',
// // //             boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
// // //             display: 'flex',
// // //             alignItems: 'center',
// // //             justifyContent: 'center',
// // //             borderRadius: '10px',
// // //             margin: '0 auto',
// // //           }}
// // //         >
// // //           <div>
// // //             <input
// // //               type="file"
// // //               accept=".pdf"
// // //               onChange={handleFileChange}
// // //               style={{
// // //                 borderRadius: '20px',
// // //                 padding: '10px 20px',
// // //                 backgroundColor: '#d97d0d',
// // //                 color: 'white',
// // //                 cursor: 'pointer',
// // //                 fontSize: '18px'
// // //               }}
// // //             />
// // //             <p style={{ color: 'white', textAlign: 'center', marginTop: '10px' }}>Chọn tệp</p>
// // //           </div>
// // //         </div>
// // //         <div>
// // //           <button
// // //             onClick={handleOCRClick}
// // //             disabled={ocrInProgress}
// // //             style={{
// // //               borderRadius: '20px',
// // //               backgroundColor: '#d97d0d',
// // //               color: 'white',
// // //               cursor: 'pointer',
// // //               marginTop: '20px',
// // //               fontSize: '22px',
// // //               padding: '10px 20px',
// // //             }}
// // //           >
// // //             Khởi động OCR
// // //           </button>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default OCRPage;

// // import React, { useState } from 'react';
// // import { FaFilePdf } from 'react-icons/fa';

// // const OCRPage = () => {
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [ocrInProgress, setOcrInProgress] = useState(false);
// //   const [processingFileName, setProcessingFileName] = useState('');

// //   const handleFileChange = (event) => {
// //     setSelectedFile(event.target.files[0]);
// //   };

// //   const handleOCRClick = () => {
// //     if (selectedFile) {
// //       setOcrInProgress(true);
// //       setProcessingFileName(selectedFile.name);

// //       // Simulate OCR processing (replace with your actual OCR logic)
// //       setTimeout(() => {
// //         setOcrInProgress(false);
// //         setSelectedFile(null);
// //         setProcessingFileName('');
// //       }, 2000);
// //     }
// //   };

// //   return (
// //     <div>
// //       <div>
// //         <header style={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'flex-start',
// //           borderBottom: '3px solid #007bff',
// //           padding: '10px',
// //           color: '#007bff',
// //           fontWeight: 'bold',
// //         }}>
// //           <FaFilePdf size={40} style={{ marginRight: '10px' }} />
// //           <span>PDF OCR</span>
// //         </header>
// //       </div>
// //       <main>
// //         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// //           <h1 style={{ color: 'black', fontFamily: 'Arial' }}>PDF OCR</h1>
// //           <p style={{ color: 'black', fontFamily: 'Arial' }}>Nhận diện nội dung qua OCR và trích xuất thông tin từ file pdf báo cáo tài chính</p>
// //           <ul style={{ color: 'black', fontFamily: 'Arial', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
// //             <li style={{ listStyle: 'none', marginRight: '10px' }}>
// //               <span style={{ color: 'green', marginRight: '5px' }}>✓</span>Miễn phí
// //             </li>
// //             <li style={{ listStyle: 'none', marginRight: '10px' }}>
// //               <span style={{ color: 'green', marginRight: '5px' }}>✓</span>Trực tuyến
// //             </li>
// //           </ul>
// //         </div>
// //         <div
// //           style={{
// //             width: '80%',
// //             height: '250px',
// //             border: '2px dashed darkblue',
// //             backgroundColor: '#fffce5',
// //             boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
// //             display: 'flex',
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //             borderRadius: '10px',
// //             margin: '0 auto',
// //           }}
// //         >
// //           {ocrInProgress ? (
// //             <div>
// //               <p style={{ color: 'black', textAlign: 'center' }}>Công việc đang được xử lý. Xin chờ một chút.</p>
// //               <p style={{ color: 'black', textAlign: 'center' }}>{processingFileName}</p>
// //             </div>
// //           ) : (
// //             <div>
// //               <input
// //                 type="file"
// //                 accept=".pdf"
// //                 onChange={handleFileChange}
// //                 style={{
// //                   borderRadius: '20px',
// //                   padding: '10px 20px',
// //                   backgroundColor: '#d97d0d',
// //                   color: 'white',
// //                   cursor: 'pointer',
// //                   fontSize: '18px'
// //                 }}
// //               />
// //               <p style={{ color: 'white', textAlign: 'center', marginTop: '10px' }}>Chọn tệp</p>
// //             </div>
// //           )}
// //         </div>
// //         <div>
// //           <button
// //             onClick={handleOCRClick}
// //             disabled={ocrInProgress || !selectedFile}
// //             style={{
// //               borderRadius: '20px',
// //               backgroundColor: ocrInProgress ? '#ccc' : '#d97d0d',
// //               color: 'white',
// //               cursor: 'pointer',
// //               marginTop: '20px',
// //               fontSize: '22px',
// //               padding: '10px 20px',
// //             }}
// //           >
// //             {ocrInProgress ? 'Đang xử lý OCR...' : 'Khởi động OCR'}
// //           </button>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default OCRPage;

// import React, { useState } from 'react';
// import { FaFilePdf, FaDownload, FaEye, FaTrash, FaRedo } from 'react-icons/fa';

// const OCRPage = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [ocrInProgress, setOcrInProgress] = useState(false);
//   const [processingFileName, setProcessingFileName] = useState('');

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleOCRClick = () => {
//     if (selectedFile) {
//       setOcrInProgress(true);
//       setProcessingFileName(selectedFile.name);

//       // Simulate OCR processing (replace with your actual OCR logic)
//       setTimeout(() => {
//         setOcrInProgress(false);
//         setSelectedFile(null);
//         setProcessingFileName('');
//       }, 2000);
//     }
//   };

//   const handleDownloadClick = () => {
//     // Logic to handle download
//     console.log('Download');
//   };

//   const handlePreviewClick = () => {
//     // Logic to handle preview
//     console.log('Preview');
//   };

//   const handleDeleteClick = () => {
//     // Logic to handle delete
//     console.log('Delete');
//   };

//   const handleRestartClick = () => {
//     // Logic to handle restart
//     console.log('Restart');
//   };

//   return (
//     <div>
//       <div>
//         <header
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'flex-start',
//             borderBottom: '3px solid #007bff',
//             padding: '10px',
//             color: '#007bff',
//             fontWeight: 'bold',
//           }}
//         >
//           <FaFilePdf size={40} style={{ marginRight: '10px' }} />
//           <span>PDF OCR</span>
//         </header>
//       </div>
//       <main>
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <h1 style={{ color: 'black', fontFamily: 'Arial' }}>PDF OCR</h1>
//           <p style={{ color: 'black', fontFamily: 'Arial' }}>Nhận diện nội dung qua OCR và trích xuất thông tin từ file pdf báo cáo tài chính</p>
//           <ul style={{ color: 'black', fontFamily: 'Arial', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
//             <li style={{ listStyle: 'none', marginRight: '10px' }}>
//               <span style={{ color: 'green', marginRight: '5px' }}>✓</span>Miễn phí
//             </li>
//             <li style={{ listStyle: 'none', marginRight: '10px' }}>
//               <span style={{ color: 'green', marginRight: '5px' }}>✓</span>Trực tuyến
//             </li>
//           </ul>
//         </div>
//         <div
//           style={{
//             width: '80%',
//             height: '360px',
//             border: '2px dashed darkblue',
//             backgroundColor: ocrInProgress ? '#fff' : '#fffce5',
//             boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRadius: '10px',
//             margin: '0 auto',
//           }}
//         >
//           {ocrInProgress ? (
//             <div style={{ textAlign: 'center' }}>
//               <p style={{ color: 'black', fontFamily: 'Arial' }}>Công việc của bạn đã được xử lý:</p>
//               <p style={{ color: 'black', fontFamily: 'Arial', fontWeight: 'bold' }}>{processingFileName}</p>
//               <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//                 <button
//                   onClick={handleDownloadClick}
//                   style={{
//                     borderRadius: '20px',
//                     backgroundColor: '#007bff',
//                     color: 'white',
//                     cursor: 'pointer',
//                     margin: '0 5px',
//                     padding: '10px 20px',
//                     display: 'flex',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <FaDownload style={{ marginRight: '5px' }} /> Download
//                 </button>
//                 <button
//                   onClick={handlePreviewClick}
//                   style={{
//                     borderRadius: '20px',
//                     backgroundColor: '#28a745',
//                     color: 'white',
//                     cursor: 'pointer',
//                     margin: '0 5px',
//                     padding: '10px 20px',
//                     display: 'flex',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <FaEye style={{ marginRight: '5px' }} /> Xem trước
//                 </button>
//                 <button
//                   onClick={handleDeleteClick}
//                   style={{
//                     borderRadius: '20px',
//                     backgroundColor: '#6c757d',
//                     color: 'white',
//                     cursor: 'pointer',
//                     margin: '0 5px',
//                     padding: '10px 20px',
//                     display: 'flex',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <FaTrash style={{ marginRight: '5px' }} /> Xóa
//                 </button>
//                 <button
//                   onClick={handleRestartClick}
//                   style={{
//                     borderRadius: '20px',
//                     backgroundColor: '#dc3545',
//                     color: 'white',
//                     cursor: 'pointer',
//                     margin: '0 5px',
//                     padding: '10px 20px',
//                     display: 'flex',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <FaRedo style={{ marginRight: '5px' }} /> Khởi động lại
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <input
//                 type="file"
//                 accept=".pdf"
//                 onChange={handleFileChange}
//                 style={{
//                   borderRadius: '20px',
//                   padding: '10px 20px',
//                   backgroundColor: '#d97d0d',
//                   color: 'white',
//                   cursor: 'pointer',
//                 }}
//               />
//               <p style={{ color: 'white', textAlign: 'center', marginTop: '10px' }}>Chọn tệp</p>
//             </div>
//           )}
//         </div>
//         <div>
//           <button
//             onClick={handleOCRClick}
//             disabled={ocrInProgress || !selectedFile}
//             style={{
//               borderRadius: '20px',
//               backgroundColor: ocrInProgress ? '#ccc' : '#d97d0d',
//               color: 'white',
//               cursor: 'pointer',
//               marginTop: '20px',
//               fontSize: '22px',
//               padding: '10px 20px',
//             }}
//           >
//             Khởi động OCR
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default OCRPage;

import React, { useState } from 'react';
import { FaFilePdf, FaDownload, FaEye, FaTrash, FaRedo } from 'react-icons/fa';
import { AxiosInstance } from './plugins/axios';
import { addData } from './features/results/reducers/result.reducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { utils, writeFileXLSX } from 'xlsx';
import _ from 'lodash';

const OCRPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [ocrInProgress, setOcrInProgress] = useState(false);
    const [ocrAfterProgress, setOcrAfterProgress] = useState(false);
    const [orcTotalPage, setOcrTotalPage] = useState(0);
    const [ocrProcessedPage, setOcrProcessedPage] = useState(0);
    const [ocrData, setOcrData] = useState([]);
    const [processingFileName, setProcessingFileName] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const BASE_URL = 'http://localhost:3502';
    const axios = AxiosInstance.create({
        baseURL: BASE_URL,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleOCRClick = async () => {
        if (selectedFile) {
            setOcrTotalPage(0);
            setOcrProcessedPage(0);
            setOcrData([]);
            setOcrInProgress(true);
            setProcessingFileName(selectedFile.name);
            setButtonDisabled(true);
            const formData = new FormData();
            formData.append('file', selectedFile);
            const response = await axios.post(`${BASE_URL}/api/preprocess`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (response?.success) {
                const images = response.data || [];
                setOcrTotalPage(images.length);
                let index = 1;
                for (const image of images) {
                    // if (index > 1) break;
                    const file = base64ToFile(image.page, `page_${index}.jpg`);
                    const formData = new FormData();
                    formData.append('file', file);
                    const response = await axios.post(`${BASE_URL}/api/ocr`, formData, {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    });

                    if (response?.success) {
                        const data = response?.data || {};
                        data.image_metadata = image.page;
                        dispatch(addData(data));
                        setOcrData([...ocrData, data]);
                    }

                    setOcrProcessedPage(index);
                    index++;
                }
            } else {
            }
            // Simulate OCR processing (replace with your actual OCR logic)
            setOcrInProgress(false);
            setOcrAfterProgress(true);
            setSelectedFile(null);
            setProcessingFileName('');
            setButtonDisabled(false);
        }
    };

    const handleDownloadClick = () => {
        // Handle download action
        handleDownloadTextData();
        handleDownloadTableData();
    };

    const handleDownloadTextData = () => {
        const textJsonData = (ocrData || []).map((data) => {
            const textData = data.metadata?.text_metadata || [];
            const textOnlyData = textData.map((d) => ({ text: d.text }));
            const reversedTextOnlyData = _.reverse(textOnlyData);
            return reversedTextOnlyData;
        });

        const fileName = `text_${Date.now()}`;
        const json = JSON.stringify(textJsonData, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const href = URL.createObjectURL(blob);

        // create "a" HTLM element with href to file
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + '.json';
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    };
    const handleDownloadTableData = () => {
        const wb = utils.book_new();

        for (let i = 0; i < ocrData.length; i++) {
            const tableData = ocrData[i];
            const data = tableData.metadata?.table_metadata || [];

            for (let j = 0; j < data.length; j++) {
                const tableMetadata = data[j];
                const rows = tableMetadata?.table_data?.rows || [];
                const ws = utils.aoa_to_sheet(rows);
                utils.book_append_sheet(wb, ws, `Table ${i + 1}_${j + 1}`);
            }
        }

        writeFileXLSX(wb, `Table_${Date.now()}.xlsx`);
    };

    const handlePreviewClick = () => {
        // Handle preview action
        navigate('result');
    };

    const handleDeleteClick = () => {
        // Handle delete action
        setOcrAfterProgress(false);
    };

    const handleRestartClick = () => {
        // Handle restart action
    };
    const base64ToFile = (dataurl, filename) => {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };
    return (
        <div>
            <div>
                <header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        borderBottom: '3px solid #007bff',
                        padding: '10px',
                        color: '#007bff',
                        fontWeight: 'bold',
                    }}
                >
                    <FaFilePdf size={40} style={{ marginRight: '10px' }} />
                    <span>PDF OCR</span>
                </header>
            </div>
            <main>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{ color: 'black', fontFamily: 'Arial' }}>PDF OCR</h1>
                    <p style={{ color: 'black', fontFamily: 'Arial' }}>
                        Nhận diện nội dung qua OCR và trích xuất thông tin từ file pdf báo cáo tài chính
                    </p>
                    <ul
                        style={{
                            color: 'black',
                            fontFamily: 'Arial',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                    >
                        <li style={{ listStyle: 'none', marginRight: '10px' }}>
                            <span style={{ color: 'green', marginRight: '5px' }}>✓</span>Miễn phí
                        </li>
                        <li style={{ listStyle: 'none', marginRight: '10px' }}>
                            <span style={{ color: 'green', marginRight: '5px' }}>✓</span>Trực tuyến
                        </li>
                    </ul>
                </div>
                <div
                    style={{
                        width: '80%',
                        height: '250px',
                        border: '2px dashed darkblue',
                        backgroundColor: ocrInProgress ? '#fff' : ocrAfterProgress ? '#fff' : '#fffce5',
                        boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '10px',
                        margin: '0 auto',
                    }}
                >
                    {ocrInProgress ? (
                        <div>
                            <p style={{ color: 'black', textAlign: 'center' }}>
                                Công việc đang được xử lý. Xin chờ một chút. Tiến độ: {ocrProcessedPage}/{orcTotalPage}
                            </p>
                            <p style={{ color: 'black', textAlign: 'center' }}>{processingFileName}</p>
                        </div>
                    ) : ocrAfterProgress ? (
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ color: 'black', fontFamily: 'Arial' }}>Công việc của bạn đã được xử lý:</p>
                            <p style={{ color: 'black', fontFamily: 'Arial', fontWeight: 'bold' }}>
                                {processingFileName}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <button
                                    onClick={handleDownloadClick}
                                    style={{
                                        borderRadius: '20px',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        cursor: 'pointer',
                                        margin: '0 5px',
                                        padding: '10px 20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <FaDownload style={{ marginRight: '5px' }} /> Download
                                </button>
                                <button
                                    onClick={handlePreviewClick}
                                    style={{
                                        borderRadius: '20px',
                                        backgroundColor: '#28a745',
                                        color: 'white',
                                        cursor: 'pointer',
                                        margin: '0 5px',
                                        padding: '10px 20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <FaEye style={{ marginRight: '5px' }} /> Xem trước
                                </button>
                                <button
                                    onClick={handleDeleteClick}
                                    style={{
                                        borderRadius: '20px',
                                        backgroundColor: '#6c757d',
                                        color: 'white',
                                        cursor: 'pointer',
                                        margin: '0 5px',
                                        padding: '10px 20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <FaTrash style={{ marginRight: '5px' }} /> Xóa
                                </button>
                                <button
                                    onClick={handleRestartClick}
                                    style={{
                                        borderRadius: '20px',
                                        backgroundColor: '#dc3545',
                                        color: 'white',
                                        cursor: 'pointer',
                                        margin: '0 5px',
                                        padding: '10px 20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <FaRedo style={{ marginRight: '5px' }} /> Khởi động lại
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                style={{
                                    borderRadius: '20px',
                                    padding: '10px 20px',
                                    backgroundColor: '#d97d0d',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '18px',
                                }}
                            />
                            <p style={{ color: 'white', textAlign: 'center', marginTop: '10px' }}>Chọn tệp</p>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        onClick={handleOCRClick}
                        disabled={buttonDisabled || !selectedFile}
                        style={{
                            borderRadius: '20px',
                            backgroundColor: buttonDisabled ? '#ccc' : '#d97d0d',
                            color: 'white',
                            cursor: buttonDisabled ? 'default' : 'pointer',
                            marginTop: '20px',
                            fontSize: '22px',
                            padding: '10px 20px',
                        }}
                    >
                        {ocrInProgress ? 'Đang xử lý OCR...' : 'Khởi động OCR'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default OCRPage;
