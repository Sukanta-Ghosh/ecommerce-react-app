import * as React from "react";

import Layout from "../components/Layout";
import HeroSection from "../components/Reusable/HeroSection";
import Infoblock from "../components/Reusable/Infoblock";
import { DualInfoblock } from "../components/Reusable/DualInfoblock";
import Coursecart from "../components/Cart/Coursecart";

const courseData = require("../CourseData.json");

const Home = ({ data }) => (
  <Layout>
    <HeroSection
      title="I write Code"
      subtitle="We write Code"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Coursecart courses={courseData.courses} />
    <DualInfoblock
      heading="Our Team"
      srcimg="https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&dpr=2&fit=crop&h=250&w=360"
    />
  </Layout>
);

export default Home;
