//import react from 'react';
import CommonEventDetail from '../CommonEventDetail';
import web2 from '../images/andaz.jpg';
const AndazAwadh = () =>{
    return(
        <div>
            <CommonEventDetail name="Andaz-Awadh"            
            rule1="50% of the total participants will be shortlisted by the judges panel on the basis of their registration forms and PI."
            rule2="Will consist of a Rapid Fire round in which the selected participants (top 20) will be questioned on the basis of GENEREAL AWAIRNES by the jury."
            rule3="Task based round in which selected contestants will be given a task by the jury on the basis of their hobbies and random topic will be provided to them on which they have to speak for at least for 2 min."
            rule4="It will be a stage round in which the contestants have to show their talent in front of the external jury."
            rule5="Cross questioning will be done by the jury."            
             imgsrc={web2} visit="/register" btname="Register" />
        </div>
    )
}
export default AndazAwadh;