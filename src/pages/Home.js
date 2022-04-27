import * as React from "react";

import Layout from "../components/Layout";
import HeroSection from "../components/Reusable/HeroSection";
import Infoblock from "../components/Reusable/Infoblock";
import { DualInfoblock } from "../components/Reusable/DualInfoblock";
import Coursecart from "../components/Cart/Coursecart";

const courseData = require("../CourseData.json");

const Home = () => (
  <Layout>
    <HeroSection
      title="I write Code"
      subtitle="We write Code"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Coursecart courses={courseData.courses} />
    <DualInfoblock heading="Our Team" srcimg="images/team-img.png" />
  </Layout>
);

export default Home;
