/* eslint-disable react/prop-types */
export function PlantsIndex(props) {
  const numAscending = [...props.plants].sort((a, b) => a.id - b.id);
  console.log(numAscending);

  return (
    <div>
      <h1>All Plants</h1>
      {numAscending.map((plant) => (
        <div key={plant.id}>
          <h2>{[plant.id, ". ", plant.name]}</h2>
          <img src={plant.image_url} />
          <button onClick={() => props.onShowPlant(plant)}>More information</button>
          <br />
        </div>
      ))}
    </div>
  );
}
