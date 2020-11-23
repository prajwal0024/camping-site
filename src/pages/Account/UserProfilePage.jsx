import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import "./UserProfilePage.scss";
import { ReactComponent as UserSvg } from "../../img/account-user.svg";
import { ReactComponent as BookingSvg } from "../../img/account-booking.svg";
import { ReactComponent as ContactSvg } from "../../img/account-contact.svg";
import { ReactComponent as NotificationSvg } from "../../img/account-notification.svg";
import { ReactComponent as LogoutSvg } from "../../img/account-logout.svg";

export const UserProfilePage = () => {
  return (
    <>
      <Navigation />
      <hr />
      <div className="container account">
        <div className="row">
          <div className="col col-side">
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
          <div className="col col-main"></div>
        </div>
      </div>
    </>
  );
};
