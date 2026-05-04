import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4> Software Engineer </h4>
                <h5>Internship In Bharti Airtel </h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a Java development internship, gaining hands-on experience in software development, coding, and project collaboration. Developed a strong foundation in Java programming and contributed to real-world projects, enhancing my skills and preparing me for a successful career in software engineering.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
