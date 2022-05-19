import "./contact.css";

const Contact = () => {
  return (
      <div className="contact">
      <div className="form"></div> 
      <h1>Contact Me!</h1> 
      <h2>
        I'm always interested in hearing about new projects, so if you'd like to
        chat please get in touch.
      </h2>
  <form action="#">
      <input
        type="text"
        name="fullname"
        placeholder="Full names"
        maxlength="30"
        autocomplete="name"
        required
        />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        autocomplete="email"
        required
        />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        maxlength="500"
        placeholder="Enter text here..."
        required
      ></textarea>
      <button type="submit" class="button">Get in touch</button>
      </form>
      </div>

  );
};

export default Contact;    