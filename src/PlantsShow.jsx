/* eslint-disable react/prop-types */
export function PlantsShow(props) {
  return (
    <div>
      <img src={props.plant.image_url} />
      <h1>Plant information</h1>
      <h2>{props.plant.name}</h2>
      <h2>{props.plant.description}</h2>
      <h2>Healthy amount of sun: {props.plant.amount_of_sun} hours</h2>
      <h2>Average days between watering: {props.plant.days_to_water} days</h2>
    </div>
  );
}
