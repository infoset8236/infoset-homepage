import ReactFullpage from '@fullpage/react-fullpage';

import '../../styles/fullpage.css';

import Service from '../../components/Service/Service';
import Hero from '../../components/Hero/Hero';
import { SectionsSchema } from './Home.schema';
import type { SectionId } from './Home.schema';

const sections: SectionId[] = SectionsSchema.parse([
    'hero',
    'service',
]);

export default function Home() {
    return (
        <ReactFullpage
            anchors={sections}
            navigation
            responsiveWidth={768}
            scrollOverflow
            fitToSection
            credits={{ enabled: false }}
            render={() => (
                <ReactFullpage.Wrapper>
                    <Hero />
                    <Service />
                </ReactFullpage.Wrapper>
            )}
        />
    );
}
