/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function SchedulesNew(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
    const params = new FormData(event.target);
    props.onCreateSchedule(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Schedule</h1>
      <h3>You can find the plant&apos;s ID on the Home page next to its name!</h3>
      <h3>Be sure to enter your starting date using the YYYY-MM-DD format!</h3>
      <form onSubmit={handleSubmit}>
        <div>
          Plant ID: <input name="plant_id" type="text" />
        </div>
        <br />
        <div>
          Watering Start Date: <input name="watering_start_date" type="text" />
        </div>
        <button type="submit">Create schedule</button>
      </form>
    </div>
  );
}
