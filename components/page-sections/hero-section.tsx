export const HeroSection = ({
    text,
    backgroundImage
                            }) => {

    return (
        <div>
            <div>{backgroundImage}</div>
            <div>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

