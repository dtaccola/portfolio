import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Estes são alguns dos projetos em React.js
      </SectionText>
      <Button onclik={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;