"use client";
import Image from "next/image";
import { HoverChip } from "./Shared/HoverChip";
import MyChart from "./recharts/MyChart";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const labels = ["Python", "Power BI", "SQL", "Excel", "PM-Tools", "Teamplay"];
const skills = [
    [
        "Pandas",
        "Numpy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Regex",
        "Jupyter Notebook",
        "Web Scraping",
        "API-Anbindung",
        "Arbeiten mit JSON",
        "Arbeiten mit Datumswerten",
        "Virtual Environments",
        "Paketmanagement",
    ],
    [
        "Dashboard Design",
        "DAX",
        "Power Query",
        "Tabellenbeziehungen",
        "Datenmoddelierug",
        "KPI_Visualisierung",
        "Dynamische Visuals",
        "Datenbereinigung",
    ],
    [
        "Joins",
        "Aggregationen",
        "SELECT_Abfragen",
        "WHERE_Klauseln",
        "GROUP BY",
        "Normalisierung",
        "Datentypen",
    ],
    [
        "Pivot Tabellen",
        "Power Query",
        "Verzweigungen",
        "Schleifen",
        "Visualisierung",
        "Formeln",
        "SVERWEIS",
        "INDEX",
        "Dynamische Bereiche",
        "Bedingte Formatierung",
    ],
    [
        "Gantt_Diagramme",
        "Priorisierungsmethoden",
        "Teamrollen",
        "Verantwortlichkeiten",
        "Ressourcenmanagement",
        "Projektzieldefinition",
        "Risikoanalyse",
        "Projektstatusberichte",
    ],
    [
        "Kommunikationsfähigkeit",
        "Kooperationsbereitschaft",
        "Verlässlichkeit",
        "Empathie",
        "Kritikfähigkeit",
        "Lösungsorientiert",
        "Anpassungsfähig",
    ],
    "Interdisziplinäre Zusammenarbeit",
];

export const Hero = () => {
    return (
        <div className="w-full px-3 py-4 rounded-xl flex flex-col gap-6 bg-slate-950 shadow-lg border-2 border-green-500">
            <div className="font-bold text-3xl text-white">
                Michael Matthiesen
            </div>
            <p className="font-bold italic text-sm py-1 text-white">
                IHK-zertifizierter Data-Analyst
            </p>

            {/* Oberer Bereich: zwei Spalten nebeneinander */}
            <div className="flex flex-col md:flex-row w-full justify-center px-2">
                {/* Linke Spalte */}
                <div className="flex flex-col w-full md:flex-row gap-4">
                    {/* Profilbild */}
                    <Image
                        src="/Me2.png"
                        className="rounded-2xl border-2 border-green-500"
                        width={370}
                        height={200}
                        alt="Bewerbungsfoto"
                    />

                    {/* Skillset und Zertifikate */}
                    <div className="flex flex-col gap-4 px-2">
                        <div>
                            <p className="font-bold text-2xl text-white pb-3">
                                Skillset:
                            </p>
                            <div className="grid grid-cols-3 gap-1 text-white">
                                {labels.map((val, idx) => (
                                    <HoverChip
                                        skills={skills[idx]}
                                        key={val + idx}
                                        label={val}
                                    />
                                ))}
                            </div>
                        </div>
                        <hr className="border-1 border-green-500" />
                        <div className="flex justify-center gap-0">
                            <Image
                                src="/cert.png"
                                className="rounded-4xl"
                                width={250}
                                height={200}
                                alt="IHK Zertifikat 1"
                            />
                            {/* <Image
                                src="/cert.png"
                                className="rounded-4xl"
                                width={250}
                                height={200}
                                alt="IHK Zertifikat 2"
                            /> */}
                        </div>
                    </div>
                    {/* Rechte Spalte: Radar-Chart */}
                    <div className="">
                        <MyChart />
                    </div>
                </div>
            </div>

            {/* Was mich ausmacht */}
            <div>
                <p className="font-bold text-2xl text-white py-3">
                    Was mich ausmacht
                </p>
                <p className="text-1xl text-white py-1">
                    Ich bin ein kreativer Data-Analyst mit gastronomischem
                    Background und einer Affinität für Daten und
                    Naturwissenschaften. Meine rasche Auffassungsgabe und mein
                    analytisches Denken ermöglichen es mir, Daten in
                    aussagekräftige Erkenntnisse umzuwandeln. In meinem letzten
                    Projekt habe ich bewiesen, dass ich datenbasierte
                    Entscheidungen treffen kann.
                </p>
            </div>
            <div className="flex gap-4 justify-center mt-6">
                <a
                                        href="mailto:irgendwasmitdata@web.de"
                                        className="flex items-center gap-2 px-6 font-semibold py-3 bg-red-800/10 hover:bg-indigo-800/70 backdrop-blur shadow shadow-indigo-700/70 text-white text-center rounded-lg transition">
                                        Kontaktieren Sie mich hier direkt via Mail
                                        <HiOutlineMail size={24} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/michael-matthiesen-b49b59322/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-6 font-semibold py-3 bg-blue-700/90 hover:bg-blue-800/90 backdrop-blur shadow shadow-blue-700/90 text-white text-center rounded-lg transition">
                                        <FaLinkedin size={24} />
                                        oder via PN bei LinkedIn
                                    </a>
                                    <a
                                        href="https://github.com/HyBRiZx420"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-6 font-semibold py-3 bg-indigo-800 hover:bg-indigo-600/90 backdrop-blur shadow shadow-blue-700/90 text-white text-center rounded-lg transition">
                                        <span className="text">GitHub Profil</span>
                                        <FaGithub size={24} />
                                    </a>
            </div>
        </div>
    );
};
