function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item${task.completed ? ' task-item--done' : ''}`}>
      <button
        className="check-btn"
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? 'Mark as pending' : 'Mark as completed'}
      >
        <span className="check-icon">{task.completed ? '✓' : ''}</span>
      </button>

      <span className="task-text">{task.text}</span>

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  );
}

export default TaskItem;
