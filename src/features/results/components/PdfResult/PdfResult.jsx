import { Button } from 'antd';
import { Image as ImageConstructor } from 'konva';
import { useEffect, useRef, useState } from 'react';
import { Layer, Stage } from 'react-konva';
import Rectangle from '../../../../konva-components/rectangle/Rectangle';
import './PdfResult.css';

export default function PdfResult() {
    const divRef = useRef(null);
    const stageRef = useRef(null);
    const layerRef = useRef(null);

    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });

    const [rectangles, setRectangles] = useState([]);
    const [selectedId, selectShape] = useState(null);

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const selectingShape = stageRef.current.find(`#${selectedId}`)[0];
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

        const image = new Image();
        image.onload = function () {
            setImage(this);
        };
        image.src = `https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80`;
        image.crossOrigin = 'Anonymous';
    }, []);

    const setImage = (imageObj) => {
        const imageRatio = imageObj.width / imageObj.height;

        const img = new ImageConstructor({
            image: imageObj,
            width: divRef.current.offsetWidth,
            height: divRef.current.offsetWidth / imageRatio,
        });

        layerRef.current.add(img);
    };

    const addBox = (options = {}) => {
        const newRectProps = {
            id: `${Date.now()}`,
            x: 0,
            y: 0,
            width: 50,
            height: 50,
            stroke: 'red',
            draggable: true,
            ...options,
        };

        setRectangles([...rectangles, newRectProps]);
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
                <Button onClick={() => addBox({ stroke: 'red' })}>Add red box</Button>
                <Button onClick={() => addBox({ stroke: 'blue' })}>Add blue box</Button>
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
                                    key={i}
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
