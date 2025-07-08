type SectionProps = {
    children: React.ReactElement | React.ReactElement[];
};

export const Section = ({ children }: SectionProps) => {
    return (
        <div className="border-b-2 border-green-500 py-4 ">{children}</div>
    );
};
