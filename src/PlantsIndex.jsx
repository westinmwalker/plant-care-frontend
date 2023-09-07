/* eslint-disable react/prop-types */
export function PlantsIndex(props) {
  return (
    <div>
      <h1>All Plants</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <button onClick={() => props.onShowPlant(plant)}>More information</button>
          <img src={plant.image_url} />
          <br />
        </div>
      ))}
    </div>
  );
}
