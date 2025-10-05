
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ABBOTT",
      description: "Engaging LMS platform for interactive learning through SCORM-based game modules. Dashboard for easy SCORM uploads, user management via Excel, and detailed analytics & reports for tracking individual progress. Landing page with a dynamic leaderboard, showcasing top performers and providing users with game scores for added motivation.",
      img: "/images/abbott.png",
      link : "https://abbott-lms.blueholding.co.uk"   
    },
    {
      id: 2,
      title: "MeduGate",
      description: "Comprehensive gym management system designed for fitness centers, gyms, and sports clubs. Multi branch support with dashboards for gym admins & branch managers. Member check-in & attendance tracking for better user management. Membership & package management, allowing admins to create and assign subscription plans. Invoice & payment tracking to monitor financial transactions.",
      img: "/images/medugate.svg",
      link : "https://medugate.me"
    },
    {
      id: 3,
      title: "FitKit",
      description: "Comprehensive gym management system designed for fitness centers, gyms, and sports clubs. Multi branch support with dashboards for gym admins & branch managers. Member check-in & attendance tracking for better user management. Membership & package management, allowing admins to create and assign subscription plans. Invoice & payment tracking to monitor financial transactions.",
      img: "/images/logo_white.png",
      link : "https://dev.fit-kit.io"
    },
    {
      id: 4,
      title: "ResHub",
      description: "Advanced booking platform for co-working spaces, padel courts, event halls, and other facilities. Customizable permissions, enabling admins to define user roles and control access. Streamlined user experience with an intuitive and responsive UI",
      img: "/images/reshub.png",
      link :"https://res.sevensquare.net",
    },
    {
      id: 5,
      title: "Meeting Minutes",
      description: "Developed a dynamic form submission system that allows users to input structured data, which is then processed and displayed in an A4 layout before being exported as a PDF document using react and html2canvas package.",
      img: "/images/colabb.svg",
      link :"https://meeting-mintes.vercel.app"
    },
    {
      id : 5,
      title : "KICKS",
      description : "Kicks is a modern shoe e-commerce website built using React.js. It provides an intuitive shopping experience with a seamless UI, real-time data fetching, drag-and-drop product management, offline detection, and an admin dashboard with sales analytics.",
      img : "/images/kicks.png",
      link : "https://github.com/RehabSabryy/Kicks"
    },
    {
      id : 6,
      title : "Nyla",
      description : "Nyla is an Egyptian accommodation booking system designed to simplify hotel and resort reservations across the country, Nyla is web development project using React, Html, CSS, Bootstrap, jQuery.", 
      img : "/images/Group.svg",
      link : "https://www.behance.net/gallery/195859495/Nyla-Egyptian-Hotel-Booking-System",
    } , 
    {
      id : 7,
      title :"E-commerce" ,
      description : "e-commerce website implementing GraphQL functionality to manage categories, products, and attributes after inserting them into the database. This project utilizes native PHP, the Webonyx GraphQL library, MySQL database and React class component",
      img : "/images/e-commerce.jpg",
      link :"https://www.behance.net/gallery/199785685/E-commerce-Website"
    } ,
    {
      id : 8,
      title : "Food Recipes" ,
      description : "Recipe website with functionalities for Browsing categorized recipes, searching recipes, saving favorites, contact us, user authentication using React, The meal DB API, Context, React Helmet ,React Router Dom." ,
      img : "/images/food.png",
      link : "https://www.behance.net/gallery/201423667/TasteBite-Food-Recipes"

    }
  ];

  return (
    <div id="projects" className="container-fluid mt-5">
    <p className="h1 text-center mb-5">Latest Work</p>
  
    <div className="d-flex justify-content-center">
      <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
  
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
  
        <div className="carousel-inner w-75 inner-container">
          {projects.map((project, index) => (
            <div key={project.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="row align-items-center project-slide">
                
                <div className="col-md-6">
                  <div className="p-4">
                    <h2 className="fw-bold">{project.title}</h2>
                    <p>{project.description}</p>
                    <button 
                      type="button" 
                      className="btn yellow-btn" 
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      View Project
                    </button>
                  </div>
                </div>
  
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img 
                    src={project.img} 
                    className="project-img img-fluid" 
                    alt={project.title} 
                  />
                </div>
                
              </div>
            </div>
          ))}
        </div>
  
        <div className="d-flex justify-content-center mt-3">
          <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
  
      </div>
    </div>
  </div>
  );
};  