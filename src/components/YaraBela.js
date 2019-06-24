import React from "react";
import { Link } from "react-router-dom";

import './FertilizerPage.css'

const about = () => {
  return (
    <div className="FertilizerPage">
      <div className="FertilizerImageContainer">
        <div className="InfoText">
          <p className="FertilizerTitle">
          Premium Nitrates - YaraBela
          </p>
          <div className="TextAlignment">
            <p>
            The YaraBela® premium nitrate fertilizer range is a proven solution for the crops fertilization; products that have been tried, tested and proven over many years across a range of crops worldwide.
            </p>
            <p>
            YaraBela nitrate based fertilizers are pure nutrients, offering the required precision efficiency and reliability to meet the agronomic and environmental imperatives of modern agriculture.
            </p>
          </div>
        </div>
        <div>
        <img className="InfoImage" src="https://www.yara.us/siteassets/crop-nutrition/fertiliser-choices/yarabela-premium-nitrates-2018.png"></img>
        </div>
      </div>
      <div className="FertilizerTextContainer">
        <div className="InfoText--NoImage">
        <p>
          Our products are of superior quality with a balanced supply of nitrate and ammonium. More importantly, the products are easy to handle and can be applied to a wide range of crops. YaraBela fertilizers are commonly used as dry applications on large-scale field crops.
        </p>
        <p>
          YaraBela CAN fertilizers contain limestone or dolomite, reducing acidification and liming requirements.
        </p>
        <p>
          YaraBela nitrates are supported by Yara’s vast knowledge of application strategy in order to get the best performance from the crop. This in turn brings optimum return on investment for the grower.
        </p>
        <p>
          Our YaraBela range is mainly used in arable crops like cereals, corn, canola, sugar beet, potato or grassland.
        </p>
        </div>
      </div>
      <p className="Button">
        <Link to="/">Back</Link>
      </p>
    </div>
  );
};

export default about;
