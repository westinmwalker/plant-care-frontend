/* eslint-disable react/prop-types */
export function PlantsIndex(props) {
  return (
    <div>
      <h1>All Plants</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
          <img src={plant.image_url} />
          <h2>{plant.name}</h2>
          <h2>{plant.description}</h2>
          <h2>Healthy amount of sun: {plant.amount_of_sun} hours</h2>
          <h2>Average days between watering: {plant.days_to_water} days</h2>
          <button onClick={() => props.onShowPlant(plant)}>More information</button>
        </div>
      ))}
    </div>
  );
}
