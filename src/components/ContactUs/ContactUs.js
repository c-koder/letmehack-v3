import React from "react";
import "@/styles/ContactUs.css"; 

const ContactUs = () => {
  return (
    <div className="container">
      <h1 className="header">Contact Us</h1>
      <p className="p1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy.
      </p>
      <div className="cardContainer">
        {/* Card 1 */}
        <div className="card">
          <div className="card-header">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="profile-picture"
            />
            <div className="header-text">
              <h3 className="name">John Doe</h3>
              <p className="position">Software Engineer</p>
            </div>
          </div>
          <div className="card-body">
            <p>
              John is an experienced software engineer with expertise in
              building scalable web applications and delivering high-quality
              solutions for clients worldwide.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-header">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="profile-picture"
            />
            <div className="header-text">
              <h3 className="name">Jane Smith</h3>
              <p className="position">Project Manager</p>
            </div>
          </div>
          <div className="card-body">
            <p>
              Jane is an expert in managing projects and ensuring timely
              delivery while maintaining the highest quality standards.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-header">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="profile-picture"
            />
            <div className="header-text">
              <h3 className="name">Alice Brown</h3>
              <p className="position">UI/UX Designer</p>
            </div>
          </div>
          <div className="card-body">
            <p>
              Alice specializes in creating intuitive user experiences and
              stunning user interface designs for various platforms.I am niranga
              this is compnent for Hackme web
            </p>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default ContactUs;
