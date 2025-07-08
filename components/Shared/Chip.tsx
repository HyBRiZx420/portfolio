type ChipProps = {
    label: string;
};

export const Chip = ({ label }: ChipProps) => {
    return (
        <div className={"relative"}>
            <div className="border border-gray-500 px-4 py-2 rounded-lg font-semibold bg-cyan-900">
                {label}
            </div>
        </div>
    );
};
