import { Card } from '../styles/components/card'
import { Phase3 } from '../styles/pages/our-process'
import { AnimeBall, Ball, BallCenter, ExpandCircle } from '../styles/components/ball'
import MedalSVG from "../public/assets/process/medal.svg"
import MicSVG from "../public/assets/process/mic.svg"
import FaceSVG from "../public/assets/process/face.svg"


type Props = {}

export const OurProcess = (props: Props) => {
    return <>
        <Phase3>
            <Card>
                <img src={MedalSVG} alt="" />
                <h3>DOCUMENTATION & <br/>QUALITY ASSURANCE</h3>
            </Card>
            <Card>
                <img src={MicSVG} alt="" />
                <h3>SUPPORT & <br/>MAINTENANCE</h3>
            </Card>
            <Card>
                <img src={FaceSVG} alt="" />
                <h3>CUSTOMER <br/>SATISFACTION</h3>
            </Card>
        </Phase3>
        <AnimeBall>
            <Ball/>
            <BallCenter/>
            <ExpandCircle className="circle1"/>
            <ExpandCircle className="circle2"/>
            <ExpandCircle className="circle3"/>
            <ExpandCircle className="circle4"/>
            <ExpandCircle className="circle5"/>
            <ExpandCircle className="circle6"/>
            <ExpandCircle className="circle7"/>
            <ExpandCircle className="circle8"/>
        </AnimeBall>
    </>
}

export default OurProcess;
