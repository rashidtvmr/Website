export type HeroProps = {
  header: string;
  bodyText: string;
  buttonLabel: string;
  backgroundImage: string; // or ?
}

export const HeroSection = ({
                              text,
                              backgroundImage
                            }: HeroProps) => {

  return (
    <div>
      <div>{backgroundImage}</div>
      <div>
        <h1>{text}</h1>
      </div>
    </div>
  )
}

