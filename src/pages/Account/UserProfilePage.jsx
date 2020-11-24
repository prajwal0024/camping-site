import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import "./UserProfilePage.scss";
import { ReactComponent as UserSvg } from "../../img/account-user.svg";
import { ReactComponent as BookingSvg } from "../../img/account-booking.svg";
import { ReactComponent as ContactSvg } from "../../img/account-contact.svg";
import { ReactComponent as NotificationSvg } from "../../img/account-notification.svg";
import { ReactComponent as LogoutSvg } from "../../img/account-logout.svg";
import { ReactComponent as ChangePicSvg } from "../../img/account-change-pic.svg";
import timerImage from "../../img/user-photo.png";
import { FormInput } from "../../components/FormInput/FormInput";

export const UserProfilePage = () => {
  return (
    <>
      <Navigation />
      <hr className="account-hr" />
      <div className="container account">
        <div className="row">
          <div className="col col-side">
            <hr />
            <div className="account__side-link account__side-link--active">
              <UserSvg className="account__side-svg account__side-svg--1" />
              <p className="account__side-text">User Profile</p>
            </div>
            <div className="account__side-link ">
              <BookingSvg className="account__side-svg account__side-svg--2" />
              <p className="account__side-text">Booking</p>
            </div>
            <div className="account__side-link ">
              <ContactSvg className="account__side-svg account__side-svg--3" />
              <p className="account__side-text">Contact</p>
            </div>
            <div className="account__side-link ">
              <NotificationSvg className="account__side-svg account__side-svg--4" />
              <p className="account__side-text">Notification</p>
            </div>
            <div className="account__side-link account__side-link--logout ">
              <LogoutSvg className="account__side-svg account__side-svg--5" />
              <p className="account__side-text">Logout</p>
            </div>
          </div>
          <div className="col col-main">
            <div className="account__main-container">
              <div className="account__row">
                <div className="account-intro">
                  <div className="account-intro__user-photo">
                    <img
                      src={timerImage}
                      alt="user photo"
                      className="account-intro__photo"
                    />
                    <ChangePicSvg className="account-intro__change" />
                  </div>
                  <div className="account-intro__user-text">
                    <p className="account-intro__name">
                      <span>James</span> <span>Smith</span>
                    </p>
                    <p className="account-intro__address">New York, USA</p>
                  </div>
                </div>
                <div className="account-points">
                  <p className="account-points__point">28</p>
                  <p className="account-points__text">Points</p>
                </div>
              </div>
              <div className="account__row">
                <FormInput isLabel="First Name" />
                <FormInput isLabel="Last Name" />
              </div>
              <div className="account__row">
                <FormInput isLabel="Email" />
                <FormInput isLabel="Phone Number" />
              </div>
              <div className="account__row">
                <FormInput isLabel="Date of Birth" />
                <FormInput isLabel="Gender" />
              </div>
              <div className="account__row">
                <FormInput isLabel="Address" />
                <FormInput isLabel="City/State/Province" />
              </div>
              <div className="account__row">
                <FormInput isLabel="Country" />
                <FormInput isLabel="Zip Code" />
              </div>
              <button className="btn btn--primary">Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
