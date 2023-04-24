import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem-vindo(a) ao meu<br />
        portfólio pessoal
      </SectionTitle>
      <SectionText>
        Estes são alguns dos meus projetos em React.js
      </SectionText>
      <Button>
        <Link href="#projects">Saiba mais</Link>
      </Button>
    </LeftSection>
  </Section >
);

export default Hero;