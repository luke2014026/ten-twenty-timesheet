import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredAuth } from '@/lib/api/auth';
import { fetchTimesheets } from '@/lib/api/timesheets';
import { Timesheet } from '@/lib/mock/timesheets';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TimesheetTable from '@/components/TimesheetTable';
import FilterDropdown from '@/components/FilterDropdown';
import Pagination from '@/components/Pagination';
import './styles.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [timesheets, setTimesheets] = useState<Timesheet[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [dateRange, setDateRange] = useState('all');
  const [status, setStatus] = useState('all');

  useEffect(() => {
    const auth = getStoredAuth();
    if (!auth) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const loadTimesheets = async () => {
      setLoading(true);
      const response = await fetchTimesheets({
        page: currentPage,
        perPage,
        dateRange,
        status,
      });

      if (response.success) {
        setTimesheets(response.data);
        setTotalPages(response.totalPages);
      }
      setLoading(false);
    };

    loadTimesheets();
  }, [currentPage, perPage, dateRange, status]);

  const handlePerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

  const dateRangeOptions = [
    { value: 'all', label: 'Date Range' },
    { value: 'january', label: 'January 2024' },
    { value: 'february', label: 'February 2024' },
  ];

  const statusOptions = [
    { value: 'all', label: 'Status' },
    { value: 'COMPLETED', label: 'Completed' },
    { value: 'INCOMPLETE', label: 'Incomplete' },
    { value: 'MISSING', label: 'Missing' },
  ];

  return (
    <div className="dashboard-page">
      <Navbar />
      
      <main className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-content">
            <div className="content-card">
              <div className="card-header">
                <h1 className="page-heading">Your Timesheets</h1>
              </div>

              <div className="filters-container">
                <FilterDropdown
                  label="Date Range"
                  value={dateRange}
                  options={dateRangeOptions}
                  onChange={setDateRange}
                />
                <FilterDropdown
                  label="Status"
                  value={status}
                  options={statusOptions}
                  onChange={setStatus}
                />
              </div>

              {loading ? (
                <div className="loading-state">Loading timesheets...</div>
              ) : timesheets.length === 0 ? (
                <div className="loading-state">No timesheets found</div>
              ) : (
                <>
                  <TimesheetTable timesheets={timesheets} />
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    perPage={perPage}
                    onPageChange={setCurrentPage}
                    onPerPageChange={handlePerPageChange}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
