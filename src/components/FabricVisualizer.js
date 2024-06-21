import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const FabricVisualizer = ({ dressImage, fabricImage }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!dressImage || !fabricImage) return;

        const canvas = new fabric.Canvas(canvasRef.current, {
            width: 500,
            height: 700,
        });

        const loadImage = (url) => {
            return new Promise((resolve) => {
                fabric.Image.fromURL(url, (img) => {
                    resolve(img);
                });
            });
        };

        const visualizeFabric = async () => {
            const dressImg = await loadImage(dressImage);
            dressImg.scaleToHeight(700);
            canvas.add(dressImg);

            const fabricImg = await loadImage(fabricImage);
            fabricImg.scaleToWidth(dressImg.width);
            fabricImg.set({
                left: dressImg.left,
                top: dressImg.top,
                clipPath: new fabric.Rect({
                    width: dressImg.width,
                    height: dressImg.height,
                    absolutePositioned: true,
                }),
            });

            canvas.add(fabricImg);
            canvas.renderAll();
        };

        visualizeFabric();

        return () => {
            canvas.dispose();
        };
    }, [dressImage, fabricImage]);

    return <canvas ref={canvasRef} />;
};

export default FabricVisualizer;
