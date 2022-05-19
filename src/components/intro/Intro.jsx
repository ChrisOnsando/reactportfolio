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
I am a web developer.
My expertise is to create website design and graphic design.
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