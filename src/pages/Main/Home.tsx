import '../../styles/fullpage.css';
import Hero from '../../components/Hero/Hero';
import Service from '../../components/Service/Service';
import { SectionsSchema } from './Home.schema';
import type { SectionId } from './Home.schema';
import ReactFullpage from '@fullpage/react-fullpage';
import { useSectionStore } from '../../stores/useSectionStore.ts';

const sections = SectionsSchema.parse([
    'hero',
    'service',
]) satisfies SectionId[];

export default function Home() {
    const setActiveSection = useSectionStore(state => state.setActiveSection);

    return (
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
                    <Service />
                </ReactFullpage.Wrapper>
            )}
        />
    );
}
