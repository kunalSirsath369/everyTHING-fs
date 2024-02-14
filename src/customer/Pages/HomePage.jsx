import React from "react";
import MainCarousel from "../components/homeCarousel/MainCarousel";
import HomeSectionCorousal from "../components/HomeSectionCorusel/HomeSectionCorousal";
import { mens_kurta } from "../../data/mens_kurta";
import { mens_shoes } from "../../data/mens_shoes";
import { women_dress } from "../../data/women_dress";
import { women_saree } from "../../data/women_saree";
import { women_cloth } from "../../data/women_cloth"
import Newslatters from '../components/footer/Newslatters'
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
const HomePage = () => {
  return (
    <div>
    <Header/>
      <MainCarousel />
      <div className="py-20 space-y-10 flex-col justify-center px-5 lg:px-10">
        <HomeSectionCorousal data={mens_kurta} sectionName="Mens Kurta"/>
        <HomeSectionCorousal data={mens_shoes} sectionName="Men's Shoes"/>
        <HomeSectionCorousal data={women_cloth}  sectionName="New Arrivals"/>
        <HomeSectionCorousal data={women_saree} sectionName="Women's Saree"/>
        <HomeSectionCorousal data={women_dress} sectionName="Women's drees"/>

      
      </div>
      <div className="flex flex-col m-0">
       
       
        </div>
    </div>
  );
};

export default HomePage;
