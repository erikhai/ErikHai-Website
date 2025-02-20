
import usyd_logo from "../assets/university_of_sydney_logo.jpg";
import usyd_succs from "../assets/usyd_csec_logo.jpg";
import aec_logo from "../assets/aec_logo.jpg";
import paragon_logo from "../assets/paragon_logo.png";
import "../styles/Experience.css"
const Experience = () => {


    return (
        <div>
            <h1>My Experience</h1>
            <div class="timeline">
                <div class="container left-container">
                    <img src={paragon_logo} alt="Paragon 4 Logo" />
                    <div class="text-box">
                        <h2>Paragon 4</h2>
                        <h3>Software Consultant</h3>
                        <small>Nov 2024 - Feb 2025</small>
                        <p>Description</p>
                        

                    </div>
                </div>
                <div class="container right-container">
                    <img src={usyd_succs} alt="SUCSS Logo" />
                    <div class="text-box">
                        <h2>USYD Cyber Secuirty Society</h2>
                        <h3>Industry Liason</h3>
                        <small>Nov 2024 - Feb 2025</small>
                        <p>Description</p>
                      

                    </div>
                </div>
                <div class="container left-container">
                    <img src={usyd_succs} alt="SUCCS Logo" />
                    <div class="text-box">
                        <h2>USYD Cyber Secuirty Society</h2>
                        <h3>Event Director</h3>
                        <small>Nov 2024 - Feb 2025</small>
                        <p>Description</p>
                    

                    </div>
                </div>
                <div class="container right-container">
                    <img src={usyd_logo} alt="USYD Logo" />
                    <div class="text-box">
                        <h2>University Of Sydney</h2>
                        <h3>Engineering Peer Mentor</h3>
                        <small>Nov 2024 - Feb 2025</small>
                        <p>Description</p>
                    

                    </div>
                </div>
                <div class="container left-container">
                    <img src={aec_logo} alt="USYD Logo" />
                    <div class="text-box">
                        <h2>AEC</h2>
                        <h3>Polling Assistant</h3>
                        <small>Nov 2024 - Feb 2025</small>
                        <p>Description</p>
                      

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Experience;
