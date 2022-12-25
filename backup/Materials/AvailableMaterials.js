import Card from "../UI/Card";
import MaterialItem from "./MaterialItem/MaterialItem";
import classes from "./AvailableMaterials.module.css"

const DUMMY_MATERIALS = [
    {
        id: 1,
        name: "Valve 630DN",
        description: "630DN Valve with required specs etc.",
        code: "HDPEVALVE630"
    },
    {
        id: 2,
        name: "90° Bend 630DN",
        description: "630DN 90 degree bend with required specs etc.",
        code: "HDPE90DEGBEND630"
    },
    {
        id: 3,
        name: "Valve 315DN",
        description: "315DN Valve with required specs etc.",
        code: "HDPEVALVE315"
    },
    {
        id: 4,
        name: "Reducing Tee 250DN/160DN",
        description: "250DN/160DN Reducing Tee required specs etc.",
        code: "HDPEREDUCINGTEE250160"
    },
]

const AvailableMaterials = () => {

    const mealsList = DUMMY_MATERIALS.map(material => (
      <MaterialItem
        id ={material.id}
        key={material.id} 
        name={material.name} 
        description={material.description} 
        code={material.code}
      />));
  
      return ( 
      <section className={classes.meals}>
        <Card>
          <ul>
            {mealsList}
          </ul>
        </Card>
      </section>
      )
  }
  
  export default AvailableMaterials;