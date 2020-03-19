import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqData} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqData.title} image={faqData.image} />
    <h2>{faqData.header}</h2>
    <p>{faqData.content}</p>
  </Container>
);

export default FAQ;