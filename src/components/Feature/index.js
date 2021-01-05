import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza do dia</h1>
      <p>Molho de tomates e apimentado muito bom.</p>
      <FeatureButton>Encomendar Já</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
