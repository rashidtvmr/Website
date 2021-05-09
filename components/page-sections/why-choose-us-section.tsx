
export type Reason = {
    text: string;
    icon: string; // or component
}
export type WhyChooseUsProps = {
    reasons: Reason[]
}


export const WhyChooseUsSection = ({reasons}: WhyChooseUsProps) => {
    return <div>Why Choose Us</div>
}