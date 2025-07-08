type ChipProps = {
    label: string;
};

export const Chip = ({ label }: ChipProps) => {
    return (
        <div className={"relative"}>
            <div className="px-4 py-1 rounded-lg font-semibold bg-slate-800/60 border-2 border-green-500">
                {label}
            </div>
        </div>
    );
};
