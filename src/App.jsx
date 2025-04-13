import './App.css'
import AboutUs from './components/AboutUs.jsx';
import BasicForm from './components/BasicForm.jsx';
import BillingForm from './components/BillingForm.jsx';
import First from './components/First.jsx';
import IntermediateForm from './components/IntermediateForm.jsx';
import JobApplication from './components/JobApplication.jsx';
import Student from './components/Student.jsx';
import SignIn from './components/SignIn.jsx';
import ComunityForm from './components/ComunityForm.jsx';

function App() {
  

  return (
    <>
    <First />
    <br></br>
    <BasicForm />
    <br></br>
    <IntermediateForm />
    <br></br>
    <Student />
    <br></br>
    <BillingForm />
   <hr></hr>
   <JobApplication />
   <hr></hr>
   <AboutUs />
   <hr></hr>
  <SignIn />
  <hr></hr>
  <ComunityForm />
      
    </>
  )
}

export default App
