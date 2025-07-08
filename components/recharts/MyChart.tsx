import React, { PureComponent } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Legend,
} from "recharts";

const data = [
    {
        subject: "Python",
        A: 5,
        B: 8,
    },
    {
        subject: "SQL",
        A: 6,
        B: 7,
    },
    {
        subject: "PowerBI",
        A: 4,
        B: 6,
    },
    {
        subject: "SoftSkills",
        A: 6.5,
        B: 8,
    },
    {
        subject: "PM-Tools",
        A: 3.5,
        B: 5,
    },
];

export default class Example extends PureComponent {
    render() {
        return (
            <div className="h-[20rem] w-[22rem] ">
                <ResponsiveContainer width="130%" height="140%" className={""}>
                    <RadarChart cx="52%" cy="55%" data={data}>
                        <Legend className="" align="left" verticalAlign="top" />
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />

                        <Radar
                            name="Ziel"
                            dataKey="B"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                            fillOpacity={0.6}
                        />
                        <Radar
                            name="Aktuell"
                            dataKey="A"
                            stroke="#8884d8"
                            fill="#8884d8"
                            fillOpacity={0.7}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
