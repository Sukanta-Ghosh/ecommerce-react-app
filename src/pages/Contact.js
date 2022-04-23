import * as React from "react";
import { ContactInfo } from "../components/Contact/ContactInfo";
import Layout from "../components/Layout";
import HeroSection from "../components/Reusable/HeroSection";
import Infoblock from "../components/Reusable/Infoblock";

const contact = ({ data }) => (
  <Layout>
    <HeroSection title="Contact us" subtitle="" heroclass="about-background" />
    <Infoblock heading="How we can help?" />
    <ContactInfo />
  </Layout>
);

export default contact;
