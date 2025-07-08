import React, { useState } from "react";

interface ImageSliderOverlayProps {
    images: string[];
    onClose: () => void;
    startIndex?: number;
}

const ImageSliderOverlay = ({
    images,
    onClose,
    startIndex = 0,
}: ImageSliderOverlayProps) => {
    const [current, setCurrent] = useState(startIndex);

    const prevImage = () =>
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextImage = () =>
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    const handleBackdropClick = (e: React.MouseEvent) => {
        if ((e.target as HTMLDivElement).id === "slider-backdrop") onClose();
    };

    return (
        <div
            id="slider-backdrop"
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            onClick={handleBackdropClick}>
            <div className="relative bg-white/30 rounded-2xl p-6 shadow-2xl flex flex-col items-center w-8/12 h-6/12">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl"
                    onClick={onClose}>
                    ×
                </button>
                <div className="w-10/12 h-10/12 flex items-center justify-center overflow-hidden p-4">
                    <img
                        src={images[current]}
                        alt={`Slide ${current + 1}`}
                        className="object-contain w-full h-full rounded-xl"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="p-2 rounded-full hover:bg-gray-200"
                        onClick={prevImage}>
                        ‹
                    </button>
                    <span>
                        {current + 1} / {images.length}
                    </span>
                    <button
                        className="p-2 rounded-full hover:bg-gray-200"
                        onClick={nextImage}>
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageSliderOverlay;
