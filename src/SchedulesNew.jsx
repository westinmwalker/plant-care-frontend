/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function SchedulesNew(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/schedules");
    const params = new FormData(event.target);
    props.onCreateSchedule(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Schedule</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Plant ID: <input name="plant_id" type="text" />
        </div>
        <button type="submit">Create schedule</button>
      </form>
    </div>
  );
}
