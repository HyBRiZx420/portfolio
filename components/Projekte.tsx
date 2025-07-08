import { ProjektKarte } from "./Shared/ProjektKarte";
import { Section } from "./Shared/Section";

// Elemente in der projektListe(Array) sind Strings der Dateinamen aus dem /public
const slider_images = ["thumb.jpg", "thumb.jpg", "thumb.jpg"];

const projektListe = [
    {
        thumb: "thumb.jpg",
        imgs: slider_images,
        git_url: "",
        subtitle: "Projekt Titel",
    },
    {
        thumb: "thumb.jpg",
        imgs: slider_images,
        git_url: "",
        subtitle: "Projekt Titel",
    },
    {
        thumb: "thumb.jpg",
        imgs: slider_images,
        git_url: "",
        subtitle: "Projekt Titel",
    },
    {
        thumb: "thumb.jpg",
        imgs: slider_images,
        git_url: "",
        subtitle: "Projekt Titel",
    },
];

export const Projekte = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-4 bg-slate-800 shadow-lg border border-slate-600 p-4">
                <p className="text-4xl pb-2"> Projekte(Work in Progress)</p>
                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
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
                    href="mailto:no-A-valid-mail@gmail.com"
                    className="px-6 font-semibold py-3 bg-red-800/10 hover:bg-indigo-800/70 backdrop-blur shadow shadow-indigo-700/70 text-neutral-200 text-center rounded-lg transition">
                    Kontaktieren sie mich hier
                </a>
            </div>
        </>
    );
};
