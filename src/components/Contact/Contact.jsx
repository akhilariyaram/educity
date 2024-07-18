import "./Contact.css"
import msgicon from "../../assets/msg-icon.png"
import mailicon from "../../assets/mail-icon.png"
import phoneicon from "../../assets/phone-icon.png"
import locicon from "../../assets/location-icon.png"
import whitearrow from "../../assets/white-arrow.png"
import React from "react"

const Contact = () => {
    
    const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e56a6e55-729f-46d9-b3c4-a5e03c931aa5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
    return (
    <div className="contact">
            <div className="contact-col">
                <h3>Send Us A Message  <img src={msgicon} alt="" />  </h3>
                <p>Free Free to reach out through contact form or find our conatact information below
                    .Your fedback,question and suggestions are informatant to us as we strive yo provide
                    exceptional service to our university community.
                    <ul>
                        <li><img src={mailicon}alt="" />anssmbfan@gmail.com </li>
                        <li> <img src={phoneicon} alt="" />+ 91 123456789</li>
                        <li><img src={locicon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02139 ,United States of Ammerpet </li>
                    </ul>
                </p>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label >Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required/>
                    <label >Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your Mobile Number" required/>
                    <label >Write your message here</label>
                   <textarea name="message" rows="6" placeholder="Enter Your Message" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit Now <img src={whitearrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
    </div>
  )
}

export default Contact