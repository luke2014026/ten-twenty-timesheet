import { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import { TimesheetEntry } from '@/lib/mock/timesheetDetails';
import '../styles/EntryRow.css';

interface EntryRowProps {
  entry: TimesheetEntry;
}

const EntryRow = ({ entry }: EntryRowProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleEdit = () => {
    console.log('Edit entry:', entry.id);
    setIsMenuOpen(false);
  };

  const handleDelete = () => {
    console.log('Delete entry:', entry.id);
    setIsMenuOpen(false);
  };

  return (
    <div className="entry-row">
      <div className="entry-content">
        <span className="entry-task">{entry.taskName}</span>
      </div>
      <div className="entry-actions">
        <span className="entry-hours">{entry.hours} hrs</span>
        <a href="#" className="entry-project">{entry.projectName}</a>
        
        <div className="entry-menu-container">
          <button 
            className="entry-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MoreVertical className="menu-icon" />
          </button>
          
          {isMenuOpen && (
            <>
              <div 
                className="menu-overlay" 
                onClick={() => setIsMenuOpen(false)}
              />
              <div className="entry-dropdown">
                <button className="dropdown-item" onClick={handleEdit}>
                  Edit
                </button>
                <button className="dropdown-item delete" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EntryRow;
