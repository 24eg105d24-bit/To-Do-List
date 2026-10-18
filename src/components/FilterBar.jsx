const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'pending', label: 'Pending' },
  { key: 'completed', label: 'Completed' },
];

function FilterBar({ current, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter tasks">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          className={`filter-btn${current === key ? ' filter-btn--active' : ''}`}
          onClick={() => onChange(key)}
          aria-pressed={current === key}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
