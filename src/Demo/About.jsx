import {useParams} from 'react-router-dom';

const About=(props)=>{
  const {userName}=useParams();
    return(
      <>
      <h1>Hello {userName}, THIS IS MY ABOUT PAGE.</h1>
      </>
    );
};
export default About;