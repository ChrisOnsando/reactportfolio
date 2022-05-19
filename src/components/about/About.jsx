import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card-bg"></div>
        <div className="about-card">
          <img
            src={require('../images/pexels.jpg')}
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtext">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quibusdam, nesciunt? Ut, corporis? Ad animi, quidem saepe necessitatibus 
illum vero officiis! Minus iure maxime vel atque possimus reiciendis omnis
debitis ea.
        </p>
        <p className="about-desc">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        
    </div>
</div>
  );
};

export default About;