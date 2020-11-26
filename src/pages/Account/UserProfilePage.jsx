import React, { useState, useEffect } from "react";
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
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { fireDb } from "../../firebase";

export const UserProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  console.log(currentUser);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    country: "",
    zipCode: 0,
  });

  useEffect(() => {
    fireDb
      .child("Users")
      .child(currentUser.uid)
      .once("value")
      .then((snapshot) => {
        console.log(snapshot.val() && snapshot.val());
        setUserInfo(
          (snapshot.val() && snapshot.val()) || {
            firstName: "",
            lastName: "",
            phone: "",
            dob: "",
            gender: "",
            address: "",
            city: "",
            country: "",
            zipCode: 0,
          }
        );
      });
  }, []);

  // fireDb.child("Users").child(currentUser.uid).push({ name: "Prajwal" });
  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function handleUpdate() {
    setLoading(true);
    fireDb
      .child("Users")
      .child(currentUser.uid)
      .set(userInfo)
      .then(setLoading(false));
  }

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Failed to Log Out");
    }
  }

  return (
    <>
      {error && alert(error)}
      <Navigation
        hideLinks={true}
        primaryLink={{ link: "", title: "Go Back" }}
      />
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
            <div
              className="account__side-link account__side-link--logout "
              onClick={handleLogout}
            >
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
                <FormInput
                  isLabel="First Name"
                  state={userInfo.firstName}
                  handleChange={handleChange}
                  name="firstName"
                />
                <FormInput
                  isLabel="Last Name"
                  state={userInfo.lastName}
                  handleChange={handleChange}
                  name="lastName"
                />
              </div>
              <div className="account__row">
                <FormInput
                  disabled={true}
                  isLabel="Email"
                  state={currentUser.email}
                />
                <FormInput
                  isLabel="Phone Number"
                  state={userInfo.phone}
                  handleChange={handleChange}
                  name="phone"
                />
              </div>
              <div className="account__row">
                <FormInput
                  isLabel="Date of Birth"
                  type="date"
                  state={userInfo.dob}
                  handleChange={handleChange}
                  name="dob"
                />
                <FormInput
                  isLabel="Gender"
                  state={userInfo.gender}
                  handleChange={handleChange}
                  name="gender"
                  isDropdown="gender"
                />
              </div>
              <div className="account__row">
                <FormInput
                  isLabel="Address"
                  state={userInfo.address}
                  handleChange={handleChange}
                  name="address"
                />
                <FormInput
                  isLabel="City/State/Province"
                  state={userInfo.city}
                  handleChange={handleChange}
                  name="city"
                />
              </div>
              <div className="account__row">
                <FormInput
                  isLabel="Country"
                  state={userInfo.country}
                  handleChange={handleChange}
                  name="country"
                  isDropdown={true}
                />
                <FormInput
                  isLabel="Zip Code"
                  state={userInfo.zipCode}
                  handleChange={handleChange}
                  name="zipCode"
                />
              </div>
              <button
                disabled={loading}
                className="btn btn--primary"
                onClick={handleUpdate}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
