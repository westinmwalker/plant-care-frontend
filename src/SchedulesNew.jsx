export function SchedulesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
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
