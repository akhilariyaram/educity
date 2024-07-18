import "./Testimonial.css"
import nextbtn from "../../assets/next-icon.png"
import backbtn from "../../assets/back-icon.png"
import user1 from "../../assets/user-1.png"
import user2 from "../../assets/user-2.png"
import user3 from "../../assets/user-3.png"
import user4 from "../../assets/user-4.png"
import { useRef } from "react"


const Testimonials = () => {
        const slider = useRef();
        let tx=0;

        const slideForward = ()=>{
          if(tx>-50){
            tx-=25;
          }
          slider.current.style.transform=`translateX(${tx}%)`;
        }
        const slideBackward = ()=>{
          if(tx<0){
            tx+=25;
          }
          slider.current.style.transform=`translateX(${tx}%)`;
        }



  return (
    <div className="testimonials">
        <img src={nextbtn} alt="" className="next-btn" onClick={slideForward} />
        <img src={backbtn} alt="" className="back-btn" onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li> <div className="slide"> <div className="user-info">
                    <img src={user1} alt="" />
                    <div>
                   <h3>william jackson</h3>
                   <span>Edusity</span>
                    </div>
                    </div> 
                    <p>Patricia Crouse, a practitioner in residence of political science and public administration, discusses the unusual situation of the Democratic Party having doubts about President Joe Biden running in the 2024 race.
                      </p> </div> </li>
                      <li> <div className="slide"> <div className="user-info">
                    <img src={user2} alt="" />
                    <div>
                   <h3>william jackson</h3>
                   <span>Edusity</span>
                    </div>
                    </div> 
                    <p>Patricia Crouse, a practitioner in residence of political science and public administration, discusses the unusual situation of the Democratic Party having doubts about President Joe Biden running in the 2024 race.
                      </p> </div> </li>
                      <li> <div className="slide"> <div className="user-info">
                    <img src={user3} alt="" />
                    <div>
                   <h3>william jackson</h3>
                   <span>Edusity</span>
                    </div>
                    </div> 
                    <p>Patricia Crouse, a practitioner in residence of political science and public administration, discusses the unusual situation of the Democratic Party having doubts about President Joe Biden running in the 2024 race.
                      </p> </div> </li>
                      <li> <div className="slide"> <div className="user-info">
                    <img src={user4} alt="" />
                    <div>
                   <h3>william jackson</h3>
                   <span>Edusity</span>
                    </div>
                    </div> 
                    <p>Patricia Crouse, a practitioner in residence of political science and public administration, discusses the unusual situation of the Democratic Party having doubts about President Joe Biden running in the 2024 race.
                      </p> </div> </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials