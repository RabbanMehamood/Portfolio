import './AboutMe.css'



function AboutMe() {
    return ( 
      <section className="">
        <div className="container">
         <div className='half'>
           <h1 className='welcome-heading'>Welcome to My Portfolio</h1>
           <h4 class="zoom-on-hover">About Me</h4>
           <p class="zoom-on-hover">Hello! My name is Mehamood Rabban, and I am delighted to welcome you to my portfolio. I am a passionate and dedicated individual with a keen interest in web development, particularly using React. My goal is to create intuitive and dynamic user experiences that captivate and engage users.
               With a strong foundation in modern web technologies, I have been able to craft and contribute to a variety of projects that demonstrate my ability to blend creativity with functionality. My journey in web development began a few years ago and has been marked by continuous learning, creative problem-solving, and a commitment to excellence.</p>
           <h4 class="zoom-on-hover">My Philosophy</h4>
           <p class="zoom-on-hover">I believe that the intersection of creativity and technology offers limitless possibilities. My approach is driven by a desire to not only meet but exceed expectations, ensuring that every project I work on is both visually appealing and functionally robust. I am constantly exploring new techniques and staying up-to-date with industry trends to bring fresh and innovative ideas to life.</p> 
           <div className="cards-container">
            <div  className="tech-container zoom-on-hover ">
             <h2>Technologies Learnt</h2>
            
             <p>MERN Stack</p>
             <p>FrontEnd: HTML, CSS, Bootstrap</p>
             <p>Programming Languages: Python, Javascript</p>
             <p>Backend: Node, Express</p>
             <p>Database: Mongodb, sql , sqlite</p>
            </div>
            <div className=" tech-container zoom-on-hover">
              <h2>Projects Hosted</h2>
              <p>Instashare (Instagram Clone)</p>
              <p>NxtTrendz (E-shopping app)</p>
              <p>Nxt Watch (youtube clone)</p>
              <p>Ipl Dashboard</p>
            </div>
           </div>
         </div>
         <div className='half'>   
         </div>
        </div>
        </section>
     );
}
 
export default AboutMe;


