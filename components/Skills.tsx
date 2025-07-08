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
            <div className="w-full px-3 py-4 rounded-xl flex flex-col gap-2 bg-slate-800 shadow-lg border border-slate-600">
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
                    <p>
                        Lorem ipsum dolor sit amet.
                        <b>...</b>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet.
                        <b>...</b>
                    </p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet.
                        <b>...</b>
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
