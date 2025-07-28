import { ProjektKarte } from "./Shared/ProjektKarte";
import { Section } from "./Shared/Section";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// Elemente in der projektListe(Array) sind Strings der Dateinamen aus dem /public
const google = [
    "google2.png",
    "google3.png",
    "google4.png",
    "google5.png",
    "google6.png",
    "google7.png",
];

const exoplanets = [
    "exo1.png",
    "exo2.png",
    "exo3.png",
];

const ihk_lowcode = [
    "IHK_1.png",
    "IHK_2.png",
    "IHK_3.png",
    "IHK_4.png",
    "IHK_5.png",
];

const redezeit = [
    "projektbeschreibung.png",
    "rz2.jpg",
    "final_page1.png",
    "final_page2.png",
    "final_page3.png",
    "app1.png",
    "app2.png",
];

const projektListe = [
    {
        thumb: "google2.png",
        imgs: google,
        git_url: "https://github.com/Stringsdaemon/datavis_g5",
        subtitle: "Google-Play-Store Analyse",
    },
    {
        thumb: "exo4.png",
        imgs: exoplanets,
        git_url: "https://github.com/HyBRiZx420/SQL_DA_Project",
        subtitle: "SQL DataBase Nasa Exoplanets",
    },
    {
        thumb: "IHK_thumb.png",
        imgs: ihk_lowcode,
        git_url: "https://github.com/Ameroras/IHK_Pruefung",
        subtitle: "IHK LowCode Prüfung",
    },
    {
        thumb: "intro.png",
        imgs: redezeit,
        git_url: "https://github.com/AmerorasWorks/Redezeit-Analyse",
        subtitle: "DataCraft Abschlussprojekt Redezeit.de",
    },
];

export const Projekte = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-4 bg-slate-950 shadow-lg border-2 rounded-xl border-green-500 p-4">
                <p className="font-bold text-2xl text-white pb-2">
                    {" "}
                    Projekte(Work in Progress)
                </p>
                <Section>
                    <div className="font-semibold text-white text-1xl pt-2 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
                        {projektListe.map((lnk, idx) => {
                            return (
                                <ProjektKarte
                                    imageSet={lnk.imgs}
                                    url={lnk.thumb}
                                    key={idx}
                                    git_url={lnk.git_url}
                                    subtitle={lnk.subtitle}
                                />
                            );
                        })}
                    </div>
                </Section>
                <div className="flex gap-4 justify-center">
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
        </>
    );
};
