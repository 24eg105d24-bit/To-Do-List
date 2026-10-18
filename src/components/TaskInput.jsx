import { useState } from 'react';

function TaskInput({ onAdd }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      setError(true);
      return;
    }
    onAdd(value);
    setValue('');
    setError(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (error && e.target.value.trim()) setError(false);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="input-row">
        <input
          type="text"
          className={`task-input${error ? ' task-input--error' : ''}`}
          placeholder="What needs to be done?"
          value={value}
          onChange={handleChange}
          maxLength={200}
          aria-label="New task"
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </div>
      {error && <p className="error-msg">⚠ Please enter a task first.</p>}
    </form>
  );
}

export default TaskInput;
