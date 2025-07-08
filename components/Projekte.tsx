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
            <div className="w-full flex flex-col gap-4 bg-slate-950 shadow-lg border rounded-xl border-green-500 p-4">
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
                    href="mailto:irgendwasmitdata@web.de"
                    className="px-6 font-semibold py-3 bg-slate-900/60 border border-green-500 hover:bg-emerald-600 backdrop-blur shadow shadow-emerald-600/100 text-neutral-200 text-center rounded-lg transition">
                    Kontaktieren sie mich hier
                </a>
            </div>
        </>
    );
};
