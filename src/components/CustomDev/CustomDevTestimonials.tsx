import { useABTest } from '../../context/ABTestContext';
import { TestimonialVariantA, TestimonialVariantB, TestimonialVariantC } from './CustomDevTestimonialsVariants';

export default function CustomDevTestimonials() {
  const { variants } = useABTest();

  return (
    <div id="testimonials-section">
      {variants.testimonial === 'B' && <TestimonialVariantB />}
      {variants.testimonial === 'C' && <TestimonialVariantC />}
      {variants.testimonial === 'A' && <TestimonialVariantA />}
    </div>
  );
}

