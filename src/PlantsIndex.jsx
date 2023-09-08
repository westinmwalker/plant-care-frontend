/* eslint-disable react/prop-types */
export function PlantsIndex(props) {
  const numAscending = [...props.plants].sort((a, b) => a.id - b.id);
  console.log(numAscending);

  return (
    <div>
      {numAscending.map((plant) => (
        <div key={plant.id}>
          <h1>{[plant.id, ") ", plant.name]}</h1>
          <img src={plant.image_url} />
          <button onClick={() => props.onShowPlant(plant)}>More information</button>
          <br />
        </div>
      ))}
    </div>
  );
}
