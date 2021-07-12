import {ServiceCard} from "../containers/page-sections/home/our-services-section";

type Props = {
  type: ServiceCard
}
export const OurServicesCard = ({type}: Props) => {
  return <div>{JSON.stringify(type)}</div>
}
