import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-header">Hello, My name is</h2>
          <h1 className="intro-name">Chris Onsando</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Photographer</div>
              <div className="intro-title-item">Content Creator</div>
            </div>
          </div>
          <p className="intro-desc">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Alias sunt quod a, temporibus minima facilis nulla voluptas
quam optio numquam quaerat illum delectus enim accusamus architecto,
eveniet sit libero modi.
          </p>
    </div>
</div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        {/* <img src={Me} alt="" className="intro-img" /> */}
      </div>
    </div>
  );
};

export default Intro;