import React from 'react';
import ImageCard from 'shared/components/imageCard/imageCard';
import { Link } from 'react-router-dom';
import smallLogo from 'images/logos/large-stacked-logo-blue.png';
import armySeal from 'images/serviceSeals/Army.png';
import navySeal from 'images/serviceSeals/Navy.png';
import marineSeal from 'images/serviceSeals/USMC.png';
import marineReserveSeal from 'images/serviceSeals/USMCReserve.png';
import coastGuardSeal from 'images/serviceSeals/USCG.png';
import airForceSeal from 'images/serviceSeals/AirForce.png';
import airForceReserveSeal from 'images/serviceSeals/AirForceReserve.png';
import armyReserveSeal from 'images/serviceSeals/ArmyReserve.png';
import navyReserveSeal from 'images/serviceSeals/NavyReserve.png';
import Section from 'shared/components/section/section';
import styles from './about.css';

const About = () => (
  <div>
    <Section title="Donate" theme="white">
      <p>
        Operation Code depends on your donations to help veterans learn to code and find employment in the tech industry. You can read about our organization&apos;s history <Link to="/history">here</Link>.
      </p>

      <div className={styles.moocCards}>
        <ImageCard
          image={smallLogo}
          title="Donate Today"
          cardText="12 Backers: Yearly Budget: $1355"
          buttonText="Donate"
          link="https://edx.org/"
        />
      </div>

    </Section>

    <Section title="How Your Donation Supports Veterans">
      <p className={styles.sectionParagraph}>
        Operation Code is leading the way to expand opportunities for military veterans and their families. We aim to help veterans learn new skills and build their careers in the fast-growing technology sector. Our team’s mission - led by veterans and other dedicated, passionate volunteers - is to help open doors for our diverse member base through unique program offerings, such as our Software Mentor Program, conference scholarships, and employment services. All of this is made possible by individual donations and corporate partnerships.
      </p>
    </Section>

    <Section title="Who We Serve" theme="white">
      <p className={styles.sectionParagraph}>
        Past and present Army, Navy, Marines, Air Force, and Coast Guard service members, veterans, military spouses, and family members are welcome to apply to any of our programs. Through our online community, we work with 2000+ members around the world.
      </p>
      <br />
      <div className={styles.serviceSealWrapper}>
        <img className={styles.serviceSeal} src={armySeal} alt="Army Seal" />
        <img className={styles.serviceSeal} src={navySeal} alt="Navy Seal" />
        <img className={styles.serviceSeal} src={marineSeal} alt="Marine Seal" />
        <img className={styles.serviceSeal} src={marineReserveSeal} alt="Marine Reserve Seal" />
        <img className={styles.serviceSeal} src={coastGuardSeal} alt="Coast Guard Seal" />
        <img className={styles.serviceSeal} src={airForceSeal} alt="Air Force Seal" />
        <img className={styles.serviceSeal} src={airForceReserveSeal} alt="Air Force Reserve Seal" />
        <img className={styles.serviceSeal} src={armyReserveSeal} alt="Army Reserve Seal" />
        <img className={styles.serviceSeal} src={navyReserveSeal} alt="Navy Reserve Seal" />
      </div>
    </Section>

    <Section title="Thank You to Our Donors">
      <p className={styles.sectionParagraph}>
        Operation Code is leading the way to expand opportunities for military veterans and their families. We aim to help veterans learn new skills and build their careers in the fast-growing technology sector. Our team’s mission - led by veterans and other dedicated, passionate volunteers - is to help open doors for our diverse member base through unique program offerings, such as our Software Mentor Program, conference scholarships, and employment services. All of this is made possible by individual donations and corporate partnerships.
      </p>
    </Section>

    <Section title="Success Stories" theme="white">
      <p className={styles.sectionParagraph}>
        Past and present Army, Navy, Marines, Air Force, and Coast Guard service members, veterans, military spouses, and family members are welcome to apply to any of our programs. Through our online community, we work with 2000+ members around the world.
      </p>
      <br />
      <div className={styles.moocCards}>
        <ImageCard
          image={smallLogo}
          title="Donate Today"
          cardText="Offers free courses with the option to pay for certificates/grading."
          buttonText="Donate"
          link="https://edx.org/"
        />
      </div>
    </Section>
  </div>
);

export default About;
