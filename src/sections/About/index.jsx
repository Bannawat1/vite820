import {data} from "../../contents/About";
const About = () => {
    return (
      <div className='text-left space-y-4'> 
        <div className='text-primaryAccent font-medium'>{data.title}</div>
        <div>{data.description}</div>
      </div>
    );
  }

  export default About;
