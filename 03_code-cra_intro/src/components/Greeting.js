import Bootcamp from "./Bootcamp";


function Greeting(props) {
	
    let { name, age, cohort } = props
  
    age -= 2

    const cohortName = "some other class";
    
    return(
        <h1 className='greeting'>
              Hello there, {name} you are {age}!
              <Bootcamp cohort="Some class" />
              <Bootcamp cohort={cohortName} />
              <Bootcamp cohort={cohort} />
          </h1>
      );
  }
  
  export default Greeting;
  