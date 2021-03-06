import * as React from "react";
import Teamphotosection from "../components/About/Teamphotosection";
import Layout from "../components/Layout";
import { DualInfoblock } from "../components/Reusable/DualInfoblock";
import HeroSection from "../components/Reusable/HeroSection";
import Infoblock from "../components/Reusable/Infoblock";

const teamDataStore = require("../TeamData.json");

const About = ({ data }) => (
  <Layout>
    <HeroSection
      title="About this project"
      subtitle="Market Solution"
      heroclass="about-background"
    />
    <DualInfoblock
      heading="Our Clients"
      bodyContent="Highlight your colients"
      srcimg=""
    />
    <Infoblock heading="About our vision" />
    <Teamphotosection teamMember={teamDataStore.teamMemberData} />
  </Layout>
);

export default About;
