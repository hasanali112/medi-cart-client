import Blog from "@/Component/Ui/Home/Blog/Blog";
import Categories from "@/Component/Ui/Home/Categories/Categories";
import ProductCategory from "@/Component/Ui/Home/Categories/ProductCategory/ProductCategory";
import FeaturesProducts from "@/Component/Ui/Home/FeatureProduct/FeaturesProducts";
import HeroSection from "@/Component/Ui/Home/HeroSection/HeroSection";
import HotOfferDeals from "@/Component/Ui/Home/HotOffer/HotOfferDeals";
import TopRatedProduct from "@/Component/Ui/Home/TopRated/TopRatedProduct";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <ProductCategory />
      <FeaturesProducts />
      <TopRatedProduct />
      <HotOfferDeals />
      <Blog />
    </>
  );
};

export default HomePage;
