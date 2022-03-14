import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return (  
    <>
      <Kitchen key='Kitchen' />
      <Bath key='Bath' />
      <LivingRoom key='LivingRoom'/>
      <Bedroom key='Bedroom'/>
    </>
  );
}
 
export default FloorPlan;