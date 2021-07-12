
export type Reason = {
    text: string;
    icon: string; // or component
}
export type WhyChooseUsProps = {
    reasons: Reason[]
}

const WhyChooseUsLabel = () => {
    return (
        <div>WhyChooseUsLabel</div>
    )
}

export const WhyChooseUsSection = ({reasons}: WhyChooseUsProps) => {
    return <WhyChooseUsLabel></WhyChooseUsLabel>
}
