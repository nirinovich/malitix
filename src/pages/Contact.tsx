import { Helmet } from 'react-helmet-async';
import CTASection from '../components/Home/CTASection';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Consultation Gratuite | Malitix</title>
        <meta name="description" content="Prenez contact avec Malitix pour discuter de votre projet de développement web, mobile, ou de refonte SI." />
      </Helmet>
      
      <div className="pt-20">
        <CTASection />
      </div>
    </>
  );
}
