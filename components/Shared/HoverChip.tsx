"use client";
import { useState } from "react";

type ChipProps = {
    skills?: string[] | string;
    label: string;
};

export const HoverChip = ({ label, skills }: ChipProps) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div className={"relative"}>
            <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className=" z-0 border-gray-500 px-4 py-2 rounded-lg font-semibold bg-cyan-900/30 backdrop-blur-md backdrop-opacity-90">
                {label}
            </div>
            {isHover && (
                <div
                    className={
                        "  z-10 border border-gray-500 px-4 py-2 rounded-lg font-semibold bg-cyan-900/70 backdrop-blur-md backdrop-opacity-90 absolute left-27 top-2"
                    }>
                    {Array.isArray(skills)
                        ? skills.map((element) => {
                              return (
                                  <p
                                      className="text-sm font-normal"
                                      key={element}>
                                      {element}
                                  </p>
                              );
                          })
                        : skills}
                </div>
            )}
        </div>
    );
};
