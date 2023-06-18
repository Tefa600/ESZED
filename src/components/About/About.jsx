// import React from "react";
// import aboutpic from "../../images/2.jpg";
// import styles from "./About.module.css";
//
// export default function About() {
//   return (
//     // <div className={`about ${styles.about}`}>
//     //     <div className='text-center position-relative d-flex justify-content-center align-items-center'>
//     //         <h2 className='mb-0 position-absolute'>About Us</h2>
//     //         <h3 className='mb-0'>A</h3>
//     //     </div>
//     // </div>
//     <div className="container ">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="col-md-5 mx-5">
//             <p>
//               Pellentesque vel elit egestas, pretium est ac, convallis orci.
//               Vivamus sem nisl, tristique vel ringilla vitae, efficitur at eros.
//               Duis aliquet aliquet pharetra. Suspendisse bibendum erat quis
//               gravida pulvinar. Phasellus vel eros porta, blandit dui ac,
//               viverra felis.
//             </p>
//             <p>
//               Nunc placerat iaculis pulvinar. Nullam auctor mauris sed urna
//               posuere volutpat. Mauris ut dui sit amet elit fermentum fermentum.
//               Fusce tincidunt diam at bibendum porta.
//             </p>
//             <p>
//               Aliquam nunc felis, sagittis eu purus non, interdum vehicula urna.
//               Vivamus congue diam sapien, eu pellentesque ipsum ultricies quis.
//             </p>
//             <p>
//               Pellentesque vel elit egestas, pretium est ac, convallis orci.
//               Vivamus sem nisl, tristique vel ringilla vitae, efficitur at eros.
//               Duis aliquet aliquet pharetra. Suspendisse bibendum erat quis
//               gravida pulvinar. Phasellus vel eros porta, blandit dui ac,
//               viverra felis.
//             </p>
//             <p>
//               Nunc placerat iaculis pulvinar. Nullam auctor mauris sed urna
//               posuere volutpat. Mauris ut dui sit amet elit fermentum fermentum.
//               Fusce tincidunt diam at bibendum porta.
//             </p>
//           </div>
//           <div className="col-md-6">
//             <img className="w-100 h-100" src={aboutpic} alt="About Pic" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import aboutpic from "../../images/2.jpg";
import styles from "./About.module.css";
import Footer from "../Footer/Footer";
export default function About() {
  return (
    <>
      <div className={`about ${styles.about}`}>
        <div className="text-center position-relative d-flex justify-content-center align-items-center">
          <h2 className="mb-0 position-absolute">Who Are We?</h2>
          <h3 className="mb-0">W</h3>
        </div>

        {/* <p className="text-center w-50 m-auto">Pellentesque elementum libero enim, eget gravida nunc laoreet et. Nullam ac
  enim
  auctor, fringilla risus at, imperdiet turpis. Pellentesque elementum libero enim.</p> */}
      </div>
      <br></br>
      <div className="container ">
        <div className="row">
          <div className="col-md-5">
            <img className="w-100 h-100" src={aboutpic} alt="About Pic" />
          </div>
          <div className="col-md-5 mx-5">
            <p>
              Welcome to our website! We are a group of five ambitious students
              from the Faculty of Science who have personally experienced the
              challenges of finding a suitable space to work on our graduation
              project. Fueled by our own frustrations, we embarked on a journey
              to create a solution that would make it easier for others to find
              the places they need and love. Our initial struggles inspired us
              to launch this platform, accompanied by a user-friendly mobile
              application, which aims to streamline the process of finding the
              perfect location for various purposes. Whether you're searching
              for a peaceful study spot, a cozy café to meet friends, or a
              conducive environment to work on your own projects, our platform
              is here to assist you. We understand the importance of having the
              right space to foster creativity, productivity, and collaboration.
              With our extensive research and passion for creating meaningful
              connections, we have developed a comprehensive database of diverse
              venues, taking into account various preferences and requirements.
              Our goal is to provide you with a hassle-free experience and help
              you discover the ideal places that suit your needs. As a team of
              dedicated individuals, we are committed to continuously improving
              and expanding our platform to ensure that it remains a valuable
              resource for our users. We welcome your feedback and suggestions,
              as they are essential in shaping the future of our website and
              mobile application. Join us on this exciting journey as we
              revolutionize the way people find and connect with their perfect
              spaces. Let us be your trusted companion in your quest for the
              ideal environment, making every moment spent in these places truly
              memorable and productive. Thank you for choosing our platform, and
              we look forward to assisting you in discovering the spaces that
              inspire and empower you. The Team at Space Zone
            </p>
          </div>
        </div>
        <div
          className={"d-flex mt-5"}
          style={{ justifyContent: "center", placeContent: "space-between" }}
        >
          <div className={`homeUsInfo ${styles.homeUsInfo}`}>
            <div>{2800}</div>
            <div>co-workspace</div>
          </div>
          <div className={`homeUsInfo ${styles.homeUsInfo}`}>
            <div>300</div>
            <div>Zone</div>
          </div>
          <div className={`homeUsInfo ${styles.homeUsInfo}`}>
            <div>1000</div>
            <div>Happy Guest</div>
          </div>
        </div>
      </div>
    </>
  );
}
