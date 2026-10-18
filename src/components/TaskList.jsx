import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete, filter }) {
  if (tasks.length === 0) {
    const msgs = {
      all: 'No tasks yet — add one above!',
      pending: 'No pending tasks. Great job! 🎉',
      completed: 'No completed tasks yet.',
    };
    return <p className="empty-msg">{msgs[filter]}</p>;
  }

  return (
    <ul className="task-list" aria-label="Task list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
