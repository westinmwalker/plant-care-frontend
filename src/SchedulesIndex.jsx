/* eslint-disable react/prop-types */

export function SchedulesIndex(props) {
  const numAscending = [...props.schedules].sort((a, b) => a.id - b.id);
  console.log(numAscending);
  return (
    <div>
      <h1>All Scheduled Plants</h1>
      {numAscending.map((schedule) => (
        <div key={schedule.id}>
          <img src={schedule.image_url} />
          <h2>Plant ID: {schedule.plant_id}</h2>
          <h2>User ID: {schedule.user_id}</h2>
          <h2>Watering start date: {schedule.watering_start_date}</h2>
          <button onClick={() => props.onShowSchedule(schedule)}>More info</button>
          <br />
        </div>
      ))}
    </div>
  );
}
