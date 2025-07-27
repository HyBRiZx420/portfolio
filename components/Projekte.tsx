import { ProjektKarte } from "./Shared/ProjektKarte";
import { Section } from "./Shared/Section";

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
                <p className="font-bold text-2xl pb-2">
                    {" "}
                    Projekte(Work in Progress)
                </p>
                <Section>
                    <div className="font-semibold text-1xl pt-2 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
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
                <a
                    href="mailto:irgendwasmitdata@web.de"
                    className="px-6 font-bold py-3 bg-slate-900/60 border-2 border-green-500 hover:bg-emerald-600 backdrop-blur shadow shadow-emerald-600/100 text-neutral-200 text-center rounded-lg transition">
                    Kontaktieren sie mich hier
                </a>
            </div>
        </>
    );
};
