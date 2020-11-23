import React from "react";
import { BookingPicker } from "../../components/BookingPicker/BookingPicker";
import Navigation from "../../components/Navigation/Navigation";
import "./HomePage.scss";
import { ReactComponent as OpenHoursSvg } from "../../img/open-24-hours.svg";
import { ReactComponent as MenuSvg } from "../../img/menu.svg";
import { ReactComponent as ActivitesSvg } from "../../img/activites.svg";

export const HomePage = () => {
  return (
    <>
      <header className="header">
        <Navigation />
        <div className="header__center-box">
          <h1 className="header__heading">
            Exprience Camping Like Never Before
          </h1>
          <p className="header__sub-heading">
            Make lifetime memories, book a unique trip with our custom plans
          </p>
        </div>
        <BookingPicker />
      </header>
      <section className="section-services">
        <h2 className="heading-secondary">
          <span>Our</span> &nbsp;<span>Services</span>
        </h2>
        <p className="paragraph">
          Our services will make sure, your stay is memorable (…in a good way)
        </p>
        <div className="row service-feature">
          <div className="col col-1-of-3">
            <OpenHoursSvg className="service-feature__svg" />
            <p className="paragraph">
              We are always here for you, full time personal assistance covering
              all your needs
            </p>
          </div>
          <div className="col col-1-of-3">
            <MenuSvg className="service-feature__svg" />
            <p className="paragraph">
              All types of food available no matter your taste, we got you
              covered
            </p>
          </div>
          <div className="col col-1-of-3">
            <ActivitesSvg className="service-feature__svg" />
            <p className="paragraph">
              Enjoy various types of fun activities for all the age groups
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
