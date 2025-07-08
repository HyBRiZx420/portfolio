type SectionProps = {
    children: React.ReactElement | React.ReactElement[];
};

export const Section = ({ children }: SectionProps) => {
    return <div className="border-b border-gray-100/80 py-4 ">{children}</div>;
};
