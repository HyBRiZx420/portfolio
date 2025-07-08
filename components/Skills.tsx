import { Chip } from "./Shared/Chip";
import { Section } from "./Shared/Section";

const skills = [
    "Organisation",
    "Kommunikation",
    "Empathie",
    "Verantwortung",
    "Resilienz",
    "Storytelling",
    "Flexibilität",
    "Lifelong Learner",
    "Hands-on Mentalität",
];
export const Skills = () => {
    return (
        <>
            <div className="w-full px-3 py-4 rounded-xl flex flex-col gap-2 bg-slate-950 shadow-lg border  border-green-500">
                <Section>
                    <p className="text-4xl pb-2"> Meine Fähigkeiten</p>
                    <div className=" grid text-sm md:text-base grid-cols-3 gap-1.5">
                        {skills.map((itm, idx) => {
                            return <Chip key={itm + idx} label={itm} />;
                        })}
                    </div>
                </Section>

                <Section>
                    <p className="text-4xl pt-2 pb-3"> Abschlüsse </p>
                    <p className="text-xl pt-2 pb-0">
                        Qualifikation zum Data-Analyst - Data Craft GmbH München
                        - 2024 - 2025
                        <b></b>
                    </p>
                    <p className="text-xl pt-1 pb-0">
                        Berufsausbildung zum Koch - Best Western Seehotel
                        Frankenhorst - 2008 - 2011
                        <b></b>
                    </p>
                    <p className="text-xl pt-1 pb-0">
                        Hauptschuleabschluss - Volkshochschule Schwerin - 2006 -
                        2007
                        <b></b>
                    </p>
                </Section>
                <Section>
                    <p className="text-4xl pt-2 pb-3"> Sprachen </p>
                    <p>Deutsch, Muttersprache</p>
                    <p>Englisch (B2)</p>
                </Section>
            </div>
        </>
    );
};
