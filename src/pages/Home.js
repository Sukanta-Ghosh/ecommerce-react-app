import * as React from "react";

import Layout from "../components/Layout";
import HeroSection from "../components/Reusable/HeroSection";
import Infoblock from "../components/Reusable/Infoblock";
import { DualInfoblock } from "../components/Reusable/DualInfoblock";
import Productcart from "../components/Cart/Productcart";

const ProductsData = require("../ProductsData.json");

const Home = () => (
  <Layout>
    <HeroSection
      title="Build as you like"
      subtitle="Now you can build your own e-commerce site"
      heroclass="hero-background"
    />
    <Infoblock
      heading="About our Products & Servises"
      bodyContent="Market your products / services here "
    />
    <Productcart courses={ProductsData.courses} />
    <DualInfoblock
      heading="Our Team"
      bodyContent="Talk about your amazing team"
      srcimg="images/team-img.png"
    />
  </Layout>
);

export default Home;
