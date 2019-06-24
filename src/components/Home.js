import React from "react";
import { Link } from "react-router-dom";

import './Home.css';

const home = () => {
  return (
    <div title="Home">
      <h1 className="PageTitle">Fertilizer Products</h1>
      <p className="PageSubTitle">Choosing the right fertilizer</p>
      <p className="PageInfoText">Yara’s depth of knowledge and experience helps explain why we have one of the most respected and widely recognized brands in agriculture. Each Yara fertilizer product is precisely formulated to provide accurately targeted nutrition that suits specific situations. We recognize that soils, crops and climates are uniquely varied and that all fields and crops will have different nutritional requirements. Our approach is to properly identify and meet these requirements effectively and in an environmentally sustainable manner. Our fertilizers are grouped into product families to make it easier to choose the right one, or you can scroll down to see which fertilizers are available in different regions or to see all the fertilizers together and use filters to find a specific fertilizer.</p>
      <div className="FertilizerContainer">
        
        <div className="FertilizerBrand">
          <img className="FertilizerLogo" src="https://www.yara.us/siteassets/crop-nutrition/fertiliser-choices/yarabela-premium-nitrates-2018.png"></img>
          <div className="FertilizerInfoTextContainer">
            <Link className="FertilizerUrl" to="/bela">Premium Nitrates - YaraBela</Link>
            <p className="FertilizerInfoText">
              Yara partners with many different fertilizer companies to complement its portfolio, in order to be able to offer its customers and growers a total integrated fertility plan.
            </p>
          </div>        
        </div>
        
        <div className="FertilizerBrand">
          <img className="FertilizerLogo" src="https://www.yara.us/siteassets/crop-nutrition/fertiliser-choices/yaramila-logo-tagline-2017-12-08.png"></img>
          <div className="FertilizerInfoTextContainer">
            <Link className="FertilizerUrl" to="/bela">Homogeneous NPKs - YaraMila</Link>
            <p className="FertilizerInfoText">
              Yara partners with many different fertilizer companies to complement its portfolio, in order to be able to offer its customers and growers a total integrated fertility plan.
            </p>
          </div>
        </div>
        
        <div className="FertilizerBrand">
          <img className="FertilizerLogo" src="https://www.yara.us/siteassets/crop-nutrition/fertiliser-choices/yaraliva-logo-tagline-red.png"></img>
          <div className="FertilizerInfoTextContainer">
            <Link className="FertilizerUrl" to="/bela">Calcium Nitrate - YaraLiva</Link>
            <p className="FertilizerInfoText">
              Yara partners with many different fertilizer companies to complement its portfolio, in order to be able to offer its customers and growers a total integrated fertility plan.
            </p>
          </div>
        </div>
        
        <div className="FertilizerBrand">
          <img className="FertilizerLogo" src="https://www.yara.us/siteassets/crop-nutrition/fertiliser-choices/yaravera-added-value-2018.png"></img>
          <div className="FertilizerInfoTextContainer">
            <Link className="FertilizerUrl" to="/bela">Added Value Urea - YaraVera</Link>
            <p className="FertilizerInfoText">
              Yara partners with many different fertilizer companies to complement its portfolio, in order to be able to offer its customers and growers a total integrated fertility plan.
            </p>
          </div>
        </div>
        
        <div className="FertilizerBrand">
          <img className="FertilizerLogo" src="https://www.yara.us/siteassets/crop-nutrition/fertiliser-choices/yaravita-logo-tagline-blue.png"></img>
          <div className="FertilizerInfoTextContainer">
            <Link className="FertilizerUrl" to="/bela">Foliar Nutrition and Micronutrient Coatings - YaraVita</Link>
            <p className="FertilizerInfoText">
              Yara partners with many different fertilizer companies to complement its portfolio, in order to be able to offer its customers and growers a total integrated fertility plan.
            </p>
          </div>
        </div>

        <div className="FertilizerBrand">
          <img className="FertilizerLogo" src="https://yaraurl.net/25f5"></img>
          <div className="FertilizerInfoTextContainer">
            <Link className="FertilizerUrl" to="/bela">Other Fertilizers</Link>
            <p className="FertilizerInfoText">
              Yara partners with many different fertilizer companies to complement its portfolio, in order to be able to offer its customers and growers a total integrated fertility plan.
            </p>
          </div>
        </div>
      </div>
    </div>    
  );
};

export default home;
