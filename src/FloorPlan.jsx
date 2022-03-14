import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return (  
    <div id='floorplan'>
      <Bedroom key='Bedroom1' bedNum='1'/>
      <Kitchen key='Kitchen' />
      <Bath key='Bath1' size='Half'/>
      <LivingRoom key='LivingRoom'/>
      <Bedroom key='Bedroom2' bedNum='2'/>
      <Bath key='Bath2' size='Full'/>
      <Bedroom key='Bedroom3' bedNum='3'/>
    </div>
  );
}
 
export default FloorPlan;