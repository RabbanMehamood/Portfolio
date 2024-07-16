import "../styles/Main.css";

function Main() {
  return (
    <section className="about">
      <div className="inside-about">
        <div className="upper">
          <div className="upper-left">
            <h2 className="welcome">Welcome to My Portfolio</h2>
            <h3 className="upper-h3">About Me</h3>
            <p>
              Hello! My name is Mehamood Rabban, and I am delighted to welcome
              you to my portfolio. I am a passionate and dedicated individual
              with a keen interest in web development, particularly using React.
              My goal is to create intuitive and dynamic user experiences that
              captivate and engage users.
            </p>
            <br />
            <p>
              With a strong foundation in modern web technologies, I have been
              able to craft and contribute to a variety of projects that
              demonstrate my ability to blend creativity with functionality. My
              journey in web development began a few years ago and has been
              marked by continuous learning, creative problem-solving, and a
              commitment to excellence.
            </p>
            <h3 className="upper-h3">My Philosophy</h3>
            <p>
              I believe that the intersection of creativity and technology
              offers limitless possibilities. My approach is driven by a desire
              to not only meet but exceed expectations, ensuring that every
              project I work on is both visually appealing and functionally
              robust. I am constantly exploring new techniques and staying
              up-to-date with industry trends to bring fresh and innovative
              ideas to life.
            </p>
          </div>
          <img src="dp.jpeg" alt="Mehamood Rabban" className="dp" />
        </div>
      </div>

      <div className="left-side-bottom">
        <div className="card-1">
          <h3>Technologies Learnt</h3>
          <ul className="technologies">
            <li>- MERN Stack</li>
            <li>- FrontEnd: HTML, CSS, Bootstrap</li>
            <li>- Programming Languages: Python, Javascript</li>
            <li>- Backend: Node, Express</li>
            <li>- Database: Mongodb, SQL , sqlite</li>
          </ul>
        </div>
        <div className="card-2">
          <h3>Projects Hosted</h3>
          <ul>
            <li>- Instashare (Ins Clone)</li>
            <li>- NxtTrendz (E-Com App)</li>
            <li>- Nxt Watch (YT Clone)</li>
            <li>- IPL Dashboard</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Main;
