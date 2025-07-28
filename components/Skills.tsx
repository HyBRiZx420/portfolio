import { Chip } from "./Shared/Chip";
import { Section } from "./Shared/Section";

const skills = [
    "Organisation",
    "Empathie",
    "Kreativität",
    "Verantwortung",
    "Resilienz",
    "ADHS-HyperFokus",
    "Kommunikation",
    "Selbständigkeit",
    "Lifelong Learner",
    "Teamplayer",
    "Konstruktivität",
    "Science-FanBoy"
];
export const Skills = () => {
    return (
        <>
            <div className="w-full px-3 py-4 rounded-xl flex flex-col gap-2 bg-slate-950 shadow-lg border-2  border-green-500">
                <Section>
                    <p className="font-bold text-2xl text-white pb-2">
                        {" "}
                        Meine Fähigkeiten
                    </p>
                    <div className="grid text-sm md:text-base text-white grid-cols-3 gap-1.5">
                        {skills.map((itm, idx) => {
                            return <Chip key={itm + idx} label={itm} />;
                        })}
                    </div>
                </Section>

                <Section>
                    <p className="font-bold text-2xl text-white pt-2 pb-3">
                        {" "}
                        Abschlüsse{" "}
                    </p>
                    <p className="text-1xl text-white pt-2 pb-0">
                        Qualifikation zum Data-Analyst - Data Craft GmbH München
                        - 2024 - 2025
                        <b></b>
                    </p>
                    <p className="text-1xl text-white pt-2 pb-0">
                        Berufsausbildung zum Koch - Best Western Seehotel
                        Frankenhorst - 2008 - 2011
                        <b></b>
                    </p>
                    <p className="text-1xl text-white pt-2 pb-0">
                        Hauptschulabschluss - Volkshochschule Schwerin - 2006 -
                        2007
                        <b></b>
                    </p>
                </Section>
                <Section>
                    <p className="font-bold text-2xl text-white pt-2 pb-3">
                        {" "}
                        Sprachen{" "}
                    </p>
                    <p className="text-1xl text-white pt-2 pb-0">
                        {" "}
                        Deutsch, Muttersprache
                    </p>
                    <p className="text-1xl text-white pt-2 pb-0">
                        {" "}
                        Englisch (B2)
                    </p>
                </Section>
            </div>
        </>
    );
};
