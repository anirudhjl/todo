import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task name");
      return;
    }
    onAdd({ text, date });
    setText("");
    setDate("");
  };

  return (
    <form className="form-group" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task name&nbsp;</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <br />
        <label>Datetime&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <br />
      <input type="submit" value="Save" className="btn btn-block btn-dark" />
      <br />
      <br />
    </form>
  );
};

export default AddTask;
