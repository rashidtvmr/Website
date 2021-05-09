export const STEP_1_TITLE = "Consultation";
export const STEP_2_TITLE = "Agile Application Development";
export const STEP_3_TITLE = "Deployment and Support";

export const STEP_1_GRAPHIC = "";
export const STEP_2_GRAPHIC = "";
export const STEP_3_GRAPHIC = "";

export const ACTION_BUTTON_LABEL = "Explore";
export const OUR_PROCESS_SECTION_TITLE = "Our Process";

export interface Step {
  title: string;
  label: string;
  image: string; // Or component?
}

export interface OurProcessProps {
  steps: Step[];
  actionButtonLabel: string;
}

export const OurProcessSection = ({
                                    steps,
                                    actionButtonLabel
                                  }: OurProcessProps) => {

  return (
    <div>
      <div>image</div>
      <div>
        <h1>{"Our Process"}</h1>
      </div>
    </div>
  )
}

