import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getStoredAuth } from '@/lib/api/auth';
import { fetchTimesheetDetail } from '@/lib/api/timesheetDetails';
import { TimesheetDetail, TimesheetEntry } from '@/lib/mock/timesheetDetails';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TimesheetEntryList from '@/components/TimesheetEntryList';
import './styles.css';

const TimesheetDetailView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [timesheet, setTimesheet] = useState<TimesheetDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getStoredAuth();
    if (!auth) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const loadTimesheet = async () => {
      if (!id) return;
      
      setLoading(true);
      const data = await fetchTimesheetDetail(id);
      
      if (data) {
        setTimesheet(data);
      } else {
        navigate('/dashboard');
      }
      setLoading(false);
    };

    loadTimesheet();
  }, [id, navigate]);

  const handleAddEntry = (newEntry: { taskName: string; projectName: string; hours: number; date: string }) => {
    if (!timesheet) return;

    const entry: TimesheetEntry = {
      id: `e${Date.now()}`,
      date: newEntry.date,
      taskName: newEntry.taskName,
      projectName: newEntry.projectName,
      hours: newEntry.hours,
    };

    const updatedTimesheet = {
      ...timesheet,
      entries: [...timesheet.entries, entry],
      totalHours: timesheet.totalHours + newEntry.hours,
    };

    setTimesheet(updatedTimesheet);
  };

  if (loading) {
    return (
      <div className="detail-page">
        <Navbar />
        <main className="detail-main">
          <div className="loading-state">Loading timesheet...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!timesheet) {
    return null;
  }

  const percentage = Math.round((timesheet.totalHours / timesheet.targetHours) * 100);

  return (
    <div className="detail-page">
      <Navbar />
      
      <main className="detail-main">
        <div className="detail-container">
          <button className="back-button" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="back-icon" />
            <span>Back to Dashboard</span>
          </button>

          <div className="detail-content">
            <div className="detail-card">
              <div className="detail-header">
                <div className="header-left">
                  <h1 className="detail-title">This week's timesheet</h1>
                  <p className="detail-date-range">{timesheet.dateRange}</p>
                </div>
                <div className="header-right">
                  <div className="hours-display">
                    <span className="hours-text">{timesheet.totalHours}/{timesheet.targetHours} hrs</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${percentage}%` }} />
                  </div>
                  <span className="percentage-text">{percentage}%</span>
                </div>
              </div>

              <TimesheetEntryList
                entries={timesheet.entries}
                startDate={timesheet.startDate}
                endDate={timesheet.endDate}
                onAddEntry={handleAddEntry}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TimesheetDetailView;
