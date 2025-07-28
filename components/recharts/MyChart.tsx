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
        A: 7.2,
        B: 10,
    },
    {
        subject: "SQL",
        A: 7.5,
        B: 10,
    },
    {
        subject: "PowerBI",
        A: 7,
        B: 10,
    },
    {
        subject: "SoftSkills",
        A: 6.5,
        B: 10,
    },
    {
        subject: "Visuals",
        A: 7.1,
        B: 10,
    },
];

export default class Example extends PureComponent {
    render() {
        return (
            <div className="h-[20rem] w-[22rem]">
                <ResponsiveContainer width="130%" height="140%" className={""}>
                    <RadarChart cx="55%" cy="55%" data={data}>
                        <Legend className="" align="left" verticalAlign="top" />
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />

                        <Radar
                            name="Ziel"
                            dataKey="B"
                            stroke="#00ff00"
                            fill="#00c950"
                            fillOpacity={0.5}
                        />
                        <Radar
                            name="Aktuell"
                            dataKey="A"
                            stroke="#0083ff"
                            fill="#00bbff"
                            fillOpacity={0.5}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
