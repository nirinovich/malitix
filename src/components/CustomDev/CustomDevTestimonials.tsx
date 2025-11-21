import { useABTest } from '../../context/ABTestContext';
import { TestimonialVariantA, TestimonialVariantB, TestimonialVariantC } from './CustomDevTestimonialsVariants';

export default function CustomDevTestimonials() {
  const { variants } = useABTest();

  switch (variants.testimonial) {
    case 'B':
      return <TestimonialVariantB />;
    case 'C':
      return <TestimonialVariantC />;
    default:
      return <TestimonialVariantA />;
  }
}

