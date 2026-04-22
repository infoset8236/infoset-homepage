import '../../styles/fullpage.css';
import { SectionsSchema } from './Home.schema';
import type { SectionId } from './Home.schema';
import ReactFullpage from '@fullpage/react-fullpage';
import { useSectionStore } from '../../stores/useSectionStore.ts';
import Header from '../../layout/Header/Header.tsx';
import Hero from '../../sections/Hero/Hero.tsx';
import Business from '../../sections/Business/Business.tsx';
import Portfolio from '../../sections/Portfolio/Portfolio.tsx';
import Partners from '../../sections/Partners/Partners.tsx';
import Footer from '../../layout/Footer/Footer.tsx';
import Inquiry from '../../sections/Hero/Inquiry.tsx';
import styles from './Home.module.css';
import infoIco from '@/assets/images/hero/infoIco.svg';
import { useState } from 'react';

const sections = SectionsSchema.parse([
  'hero',
  'business',
  'portfolio',
  'partners',
  'footer',
]) satisfies SectionId[];

export default function Home() {
  const setActiveSection = useSectionStore((state) => state.setActiveSection);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Header />
      <div
        className={styles.infoIco}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        <img src={infoIco} alt="info icon" />
      </div>

      <ReactFullpage
        anchors={sections}
        responsiveWidth={768}
        scrollOverflow
        fitToSection
        credits={{ enabled: false }}
        onLeave={(_, destination) => {
          if (destination.anchor) {
            setActiveSection(destination.anchor as SectionId);
          }
        }}
        render={() => (
          <ReactFullpage.Wrapper>
            <Hero />
            <Business />
            <Portfolio />
            <Partners />
            <Footer />
          </ReactFullpage.Wrapper>
        )}
      />

      {/* ReactFullpage 아래로 이동 */}
      {isOpen && <Inquiry onClose={() => setIsOpen(false)} />}
    </>
  );
}
