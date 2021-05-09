import {Testimonial} from "../../types/testimonial.interface";

export type TestimonialProps = {
    testimonials: Testimonial[]
}

export const TestimonialSection = ({testimonials}: TestimonialProps) => {
    return <div>Testimonials!</div>
}