/* eslint-disable react/prop-types */
export function SchedulesShow(props) {
  return (
    <div>
      <h2>Plant ID: {props.schedule.plant_id}</h2>
      <h2>User ID: {props.schedule.user_id}</h2>
      <h2>Watering Start Date: {props.schedule.watering_start_date}</h2>
    </div>
  );
}
