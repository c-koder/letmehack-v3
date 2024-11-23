import React from "react";
import "@/styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container p-5 py-16">
      <h1 className="pb-3 text-5xl font-extrabold text-center">Contact Us</h1>
      <p className="pb-10 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy.
      </p>
      <div className="grid justify-center grid-cols-1 gap-4 lg:grid-cols-3 ">
        {/* Card 1 */}
        <div className="flex items-center justify-center p-10 px-5 border rounded-xl">
          <div className="">
            <div className="flex pb-2">
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

        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-center p-10 px-5 border rounded-xl">
          <div className="">
            <div className="flex pb-2">
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

        </div>


        {/* Card 3 */}
        <div className="flex items-center justify-center p-10 px-5 border rounded-xl">
          <div className="">
            <div className="flex pb-2">
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
      </div>
    </div>
  );
};

export default ContactUs;
