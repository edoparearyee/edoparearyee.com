import React from 'react';

import HomeSection from '@/components/HomeSection/HomeSection';
import AboutMeSection from '@/components/AboutMeSection/AboutMeSection';
import WorkSection from '@/components/WorkSection/WorkSection';
import ClientsSection from '@/components/ClientsSection/ClientsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import {
  GetCaseStudyOptions,
  getCaseStudies,
  getClients,
} from '@/services/contentful';
import { mapCaseStudyToCard } from '@/utils/mapCaseStudy';

import styles from './page.module.scss';

const getData = async (options?: GetCaseStudyOptions) => {
  return getCaseStudies(options);
};

const getClientsData = async () => {
  return getClients();
};

const Home = async () => {
  const { items: caseStudies, total } = await getData();
  const { items: clients } = await getClientsData();

  return (
    <main className={styles.main}>
      <HomeSection id="home" />
      <AboutMeSection id="about-me" />
      <WorkSection
        id="work"
        initialCards={caseStudies.map(mapCaseStudyToCard)}
        total={total}
      />
      <ClientsSection clients={clients} id="clients" />
      <ContactSection id="contact" />
    </main>
  );
};

export default Home;
