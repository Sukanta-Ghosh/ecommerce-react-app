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
      subtitle=""
      heroclass="about-background"
    />
    <DualInfoblock
      heading="Message from CEO"
      srcimg="https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=250&w=360"
    />
    <Infoblock heading="About our vision" />
    <Teamphotosection teamMember={teamDataStore.teamMemberData} />
  </Layout>
);

export default About;
