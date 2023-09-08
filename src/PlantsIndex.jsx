/* eslint-disable react/prop-types */
export function PlantsIndex(props) {
  return (
    <div>
      <h1>All Plants</h1>
      {props.plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <img src={plant.image_url} />
          <button onClick={() => props.onShowPlant(plant)}>More information</button>
          <br />
        </div>
      ))}
    </div>
  );
}
