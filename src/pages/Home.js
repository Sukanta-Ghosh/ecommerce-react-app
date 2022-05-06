import React, { useEffect, useState } from "react";
import Productcart from "../components/Cart/Productcart";
import Layout from "../components/Layout";
import { DualInfoblock } from "../components/Reusable/DualInfoblock";
import HeroSection from "../components/Reusable/HeroSection";
import Infoblock from "../components/Reusable/Infoblock";
import useContentful from "../components/useContentful";

const Home = () => {
  const getData = useContentful("courses");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData()
      .then((response) => {
        setProductData(response);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  });

  return (
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
      <Productcart products={productData} />
      {/* ProductsData.courses */}
      <DualInfoblock
        heading="Our Team"
        bodyContent="Talk about your amazing team"
        srcimg="images/team-img.png"
      />
    </Layout>
  );
};

export default Home;
