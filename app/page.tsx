import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projekte } from "@/components/Projekte";
import { Skills } from "@/components/Skills";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center bg-slate-900 justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <Hero />
                <Skills />
                <Experience />
                <Projekte />
            </div>
        </>
    );
}
