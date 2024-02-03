import React, { useState } from "react";
import RegionHeader from "../regionHeader/RegionHeader";
import servicesStyles from "./Services.module.css";

const Services = () => {
  const [modal, seModal] = useState(false);

  return (
    <div>
      <RegionHeader title="Services" subTitle="What I offer" />
      <div className={servicesStyles.cardContainer}>
        <div className={servicesStyles.card}>
          <div className={servicesStyles.front_end}></div>
          <p className={servicesStyles.cardText}>
            Frontend development
            <br />
            Ui/Ux
          </p>
          <span>Read more</span>
        </div>
        <div className={servicesStyles.card}>
          <div className={servicesStyles.back_end}></div>
          <p className={servicesStyles.cardText}>
            Backend development
            <br />
            API
          </p>
          <span>Read more</span>
        </div>
        <div className={servicesStyles.card}>
          <div className={servicesStyles.musician}></div>
          <p className={servicesStyles.cardText}>Also musician services</p>
          <span>Read more</span>
        </div>
      </div>
      {/* <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Это модальное окно!</p>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
