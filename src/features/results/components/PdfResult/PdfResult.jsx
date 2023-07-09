import { Button } from 'antd';
import { Image as ImageConstructor } from 'konva';
import { useEffect, useRef, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import { useSelector } from 'react-redux';
import Rectangle from '../../../../konva-components/rectangle/Rectangle';
import { resultStateSelector } from '../../reducers/result.reducer';
import './PdfResult.css';

export default function PdfResult() {
    const divRef = useRef(null);
    const stageRef = useRef(null);
    const layerRef = useRef(null);

    const resultState = useSelector(resultStateSelector);

    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });

    const [rectangles, setRectangles] = useState([]);
    const [selectedId, selectShape] = useState(null);

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const selectingShape = stageRef.current.findOne(`#${selectedId}`);
        if (!selectingShape) return;

        if (!e.target.getParent() || e.target.getParent().className === 'Transformer') {
            return;
        }

        const clickedOnEmpty = e.target !== selectingShape;
        if (clickedOnEmpty) {
            selectShape(null);
        }
    };

    useEffect(() => {
        if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
            setDimensions({
                width: divRef.current.offsetWidth,
                height: divRef.current.offsetHeight,
            });
        }
    }, []);

    useEffect(() => {
        if (resultState.selectedIndex < 0) return;
        const selectedData = (resultState.data || [])[resultState.selectedIndex];
        if (!selectedData) return;

        const image = new Image();
        image.onload = function () {
            const { width: ratioWidth, height: ratioHeight } = setImage(this);

            const metadata = selectedData.metadata;
            const textData = (metadata || {}).text_metadata || [];
            const tableData = (metadata || {}).table_metadata || [];

            const props = [
                ...textData.map((data) => {
                    const [x, y, width, height] = data['text-region'];
                    return {
                        x: Math.round(x * ratioWidth),
                        y: Math.round(y * ratioHeight),
                        width: Math.round(width * ratioWidth),
                        height: Math.round(height * ratioHeight),
                        stroke: 'blue',
                    };
                }),
                ...tableData.map((data) => {
                    const [x, y, width, height] = data['table_coordinate'];
                    return {
                        x: Math.round(x * ratioWidth),
                        y: Math.round(y * ratioHeight),
                        width: Math.round(width * ratioWidth),
                        height: Math.round(height * ratioHeight),
                        stroke: 'red',
                    };
                }),
            ];
            addBoxes(props, true);
        };
        image.src = selectedData.image_metadata;
    }, [resultState.selectedIndex]);

    const setImage = (imageObj) => {
        const imageRatio = imageObj.width / imageObj.height;

        let currentWidth = dimensions.width;
        let currentHeight = dimensions.height;
        const heightIfKeepWidth = currentWidth / imageRatio;
        const widthIfKeepHeight = currentHeight * imageRatio;
        if (heightIfKeepWidth < currentHeight) {
            currentHeight = heightIfKeepWidth;
        } else {
            currentWidth = widthIfKeepHeight;
        }

        const img = new ImageConstructor({
            id: `image`,
            image: imageObj,
            width: currentWidth,
            height: currentHeight,
        });

        const currentImage = layerRef.current.findOne(`#image`);
        if (currentImage) {
            currentImage.destroy();
        }

        layerRef.current.add(img);

        return {
            width: currentWidth / imageObj.width,
            height: currentHeight / imageObj.height,
        };
    };

    const addBoxes = async (options = [], reset = false) => {
        const rectProps = options.map((option) => {
            const newRectProps = {
                id: `${Date.now()}-${Math.round(Math.random() * 100000)}`,
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                stroke: 'red',
                draggable: true,
                ...option,
            };

            return newRectProps;
        });

        if (reset) {
            setRectangles([...rectProps]);
        } else {
            setRectangles([...rectangles, ...rectProps]);
        }
    };

    const downloadURI = (uri, name) => {
        const link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const saveLink = () => {
        const dataURL = stageRef.current.toDataURL({ pixelRatio: 5 });
        downloadURI(dataURL, 'data.png');
    };

    return (
        <div className="pdf-result-wrapper">
            <div className="pdf-result-action">
                <Button onClick={() => {}}>Show table</Button>
                <Button onClick={() => addBoxes([{ stroke: 'red' }])}>Add red box</Button>
                <Button onClick={() => addBoxes([{ stroke: 'blue' }])}>Add blue box</Button>
                <Button onClick={saveLink}>Save</Button>
            </div>
            <div className="pdf-result-data" ref={divRef}>
                <Stage
                    width={dimensions.width}
                    height={dimensions.height}
                    ref={stageRef}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                >
                    <Layer ref={layerRef}>
                        {rectangles.map((rect, i) => {
                            return (
                                <Rectangle
                                    key={rect.id}
                                    shapeProps={rect}
                                    isSelected={rect.id === selectedId}
                                    onSelect={() => {
                                        selectShape(rect.id);
                                    }}
                                    onChange={(newAttrs) => {
                                        const rects = rectangles.slice();
                                        rects[i] = newAttrs;
                                        setRectangles(rects);
                                    }}
                                />
                            );
                        })}
                    </Layer>
                </Stage>
            </div>
        </div>
    );
}
