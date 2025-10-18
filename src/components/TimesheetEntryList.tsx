import { useState } from 'react';
import { format } from 'date-fns';
import { Plus } from 'lucide-react';
import { TimesheetEntry } from '@/lib/mock/timesheetDetails';
import AddEntryModal from './AddEntryModal';
import EntryRow from './EntryRow';
import '../styles/TimesheetEntryList.css';

interface TimesheetEntryListProps {
  entries: TimesheetEntry[];
  startDate: string;
  endDate: string;
  onAddEntry: (entry: { taskName: string; projectName: string; hours: number; date: string }) => void;
}

const TimesheetEntryList = ({ entries, startDate, endDate, onAddEntry }: TimesheetEntryListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const groupedEntries: Record<string, TimesheetEntry[]> = {};
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dates: string[] = [];
  
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dateStr = format(d, 'yyyy-MM-dd');
    dates.push(dateStr);
    groupedEntries[dateStr] = [];
  }
  
  entries.forEach(entry => {
    if (groupedEntries[entry.date]) {
      groupedEntries[entry.date].push(entry);
    }
  });

  const handleAddTask = (date: string) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="entry-list">
      {dates.map(date => (
        <div key={date} className="day-section">
          <div className="day-header">
            <span className="day-label">{format(new Date(date), 'MMM dd')}</span>
          </div>
          
          <div className="day-entries">
            {groupedEntries[date].length > 0 ? (
              groupedEntries[date].map((entry) => (
                <EntryRow key={entry.id} entry={entry} />
              ))
            ) : null}
            
            <button 
              className="add-task-button"
              onClick={() => handleAddTask(date)}
            >
              <Plus className="plus-icon" />
              <span>Add new task</span>
            </button>
          </div>
        </div>
      ))}
      </div>

      <AddEntryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        date={selectedDate}
        onSubmit={onAddEntry}
      />
    </>
  );
};

export default TimesheetEntryList;
