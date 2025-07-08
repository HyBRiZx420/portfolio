"use client";
import Image from "next/image";
import { useState } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa6";
import ImageSliderOverlay from "./ImageSliderOverlay";

type ProjektKarteProps = {
    url: string;
    imageSet: string[];
    git_url: string;
    subtitle: string;
};

export const ProjektKarte = ({
    url,
    imageSet,
    git_url,
    subtitle,
}: ProjektKarteProps) => {
    const [hovState, setHovState] = useState<boolean>(false);
    return (
        <>
            <div
                className="flex flex-col max-w-10/12 cursor-pointer"
                onMouseEnter={() => setHovState(true)}
                onMouseLeave={() => setHovState(false)}>
                {hovState && (
                    <HoverLayer git_url={git_url} imageSet={imageSet} />
                )}
                <div className="border-b border-indigo-950/10 rounded-2xl">
                    <Image
                        src={"/" + url}
                        className="rounded-t-2xl min-h-56 w-full"
                        width={420}
                        height={320}
                        alt=""
                    />
                </div>
                <div className="border-b border-indigo-950/30 bg-indigo-700/30 rounded-b-2xl  text-center">
                    <p className="">{subtitle}</p>
                </div>
            </div>
        </>
    );
};

type HoverLayerProps = {
    imageSet: string[];
    git_url: string;
};

const HoverLayer = ({ imageSet, git_url }: HoverLayerProps) => {
    const [showOverlay, setShowOverlay] = useState(false);
    return (
        <div className="relative">
            {showOverlay && (
                <ImageSliderOverlay
                    images={imageSet}
                    onClose={() => setShowOverlay(false)}
                />
            )}
            <div className="w-full flex items-center justify-center gap-6 absolute top-20 bg-white/20 backdrop-blur-md backdrop-opacity-65 py-3 transition duration-150">
                <div className="text-gray-950 hover:text-indigo-600/80">
                    <a href={git_url} target="_blank">
                        <FaGithubAlt size={52} />
                    </a>
                </div>
                <div className="text-gray-950 hover:text-indigo-600/80">
                    <FaRegImages
                        size={52}
                        onClick={() => setShowOverlay(true)}
                    />
                </div>
            </div>
        </div>
    );
};
