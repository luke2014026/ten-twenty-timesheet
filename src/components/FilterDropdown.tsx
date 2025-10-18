import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/FilterDropdown.css';

interface FilterDropdownProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const FilterDropdown = ({ label, value, options, onChange }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="filter-dropdown">
      <button
        className="filter-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="filter-text">{selectedOption?.label || label}</span>
        <ChevronDown className="filter-chevron" />
      </button>

      {isOpen && (
        <div className="filter-menu">
          {options.map((option) => (
            <button
              key={option.value}
              className="filter-option"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
