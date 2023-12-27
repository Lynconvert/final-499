import Links from "./Links";
import me from "./me.jpg";


const About = () => {
  return (
    
    <div className="data">
      <Links />
      <h2 >About me</h2>
      <img className="Amm" src={me} alt="" />
      <h2> Hi, my name is Nutthapon. I am 22 years old. <br />
        I am a student at Rangsit University. I love coding.

      </h2>
      
      
    </div>
  );
};

export default About;
