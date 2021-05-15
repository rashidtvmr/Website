export type HeroProps = {
  header: string;
  bodyText: string;
  buttonLabel: string;
  backgroundImage: string; // or ?
}

export const HeroSection = ({
                              bodyText,
                              backgroundImage
                            }: HeroProps) => {

  return (
    <div>
      <div>{backgroundImage}</div>
      <div>
        <h1>{bodyText}</h1>
      </div>
    </div>
  )
}

