import { useNavigate } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import { Timesheet } from '@/lib/mock/timesheets';
import '../styles/TimesheetTable.css';

interface TimesheetTableProps {
  timesheets: Timesheet[];
}

const TimesheetTable = ({ timesheets }: TimesheetTableProps) => {
  const navigate = useNavigate();

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'status-completed';
      case 'INCOMPLETE':
        return 'status-incomplete';
      case 'MISSING':
        return 'status-missing';
      default:
        return '';
    }
  };

  const getActionText = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'View';
      case 'INCOMPLETE':
        return 'Update';
      case 'MISSING':
        return 'Create';
      default:
        return 'View';
    }
  };

  const handleAction = (timesheetId: string) => {
    navigate(`/timesheet/${timesheetId}`);
  };

  return (
    <div className="timesheet-table">
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">
              <div className="header-content">
                <span>WEEK #</span>
                <ChevronUp className="header-icon" />
              </div>
            </th>
            <th className="table-header">
              <div className="header-content">
                <span>DATE</span>
                <ChevronUp className="header-icon" />
              </div>
            </th>
            <th className="table-header">
              <div className="header-content">
                <span>STATUS</span>
                <ChevronUp className="header-icon" />
              </div>
            </th>
            <th className="table-header table-header-center">
              <span>ACTIONS</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {timesheets.map((timesheet) => (
            <tr key={timesheet.id}>
              <td className="table-cell">{timesheet.weekNumber}</td>
              <td className="table-cell">{timesheet.dateRange}</td>
              <td className="table-cell">
                <span className={`status-badge ${getStatusClass(timesheet.status)}`}>
                  {timesheet.status}
                </span>
              </td>
              <td className="table-cell table-cell-center">
                <button 
                  className="action-button"
                  onClick={() => handleAction(timesheet.id)}
                >
                  {getActionText(timesheet.status)}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimesheetTable;
