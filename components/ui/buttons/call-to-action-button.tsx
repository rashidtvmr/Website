type Props = {
    text: string;
}
export const CallToActionButton = ({text}: Props) => {
    return <button>{text || "Call To Action!"}</button>
}