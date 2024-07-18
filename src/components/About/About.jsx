import "./About.css"
import aboutimg from "../../assets/about.png"
import playicon from "../../assets/play-icon.png"
const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={aboutimg} alt="" className="about-img"/>
            <img src={playicon} alt="" className="play-icon" />
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nuturing tomorrows Leaders Today</h2>
            <p>
            The mission of MIT is to advance knowledge and educate students in science, technology, and other areas of scholarship that will best serve the nation and the world in the 21st century.</p>
            <p>The Institute is committed to generating, disseminating, and preserving knowledge, and to working with others to bring this knowledge to bear on the world’s great challenges. </p>
            <p>MIT is dedicated to providing its students with an education that combines rigorous academic study and the excitement of discovery with the support and intellectual stimulation of a diverse campus community. We seek to develop in each member of the MIT community the ability and passion to work wisely, creatively, and effectively for the betterment of humankind</p>
        </div>
    </div>
  )
}

export default About