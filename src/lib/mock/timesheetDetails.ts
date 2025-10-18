export interface TimesheetEntry {
  id: string;
  date: string;
  taskName: string;
  projectName: string;
  hours: number;
}

export interface TimesheetDetail {
  id: string;
  weekNumber: number;
  dateRange: string;
  startDate: string;
  endDate: string;
  totalHours: number;
  targetHours: number;
  entries: TimesheetEntry[];
}

export const mockTimesheetDetails: Record<string, TimesheetDetail> = {
  '1': {
    id: '1',
    weekNumber: 1,
    dateRange: '1 - 5 January, 2024',
    startDate: '2024-01-01',
    endDate: '2024-01-05',
    totalHours: 40,
    targetHours: 40,
    entries: [
      { id: 'e1', date: '2024-01-01', taskName: 'Design System Setup', projectName: 'E-Commerce Platform', hours: 8 },
      { id: 'e2', date: '2024-01-02', taskName: 'Component Library', projectName: 'E-Commerce Platform', hours: 8 },
      { id: 'e3', date: '2024-01-03', taskName: 'API Integration', projectName: 'E-Commerce Platform', hours: 6 },
      { id: 'e4', date: '2024-01-03', taskName: 'Bug Fixes', projectName: 'Client Portal', hours: 2 },
      { id: 'e5', date: '2024-01-04', taskName: 'Database Optimization', projectName: 'E-Commerce Platform', hours: 8 },
      { id: 'e6', date: '2024-01-05', taskName: 'Code Review', projectName: 'Client Portal', hours: 4 },
      { id: 'e7', date: '2024-01-05', taskName: 'Documentation', projectName: 'E-Commerce Platform', hours: 4 },
    ],
  },
  '2': {
    id: '2',
    weekNumber: 2,
    dateRange: '8 - 12 January, 2024',
    startDate: '2024-01-08',
    endDate: '2024-01-12',
    totalHours: 24,
    targetHours: 40,
    entries: [
      { id: 'e8', date: '2024-01-08', taskName: 'Sprint Planning', projectName: 'Mobile App', hours: 4 },
      { id: 'e9', date: '2024-01-09', taskName: 'UI Development', projectName: 'Mobile App', hours: 8 },
      { id: 'e10', date: '2024-01-10', taskName: 'Testing', projectName: 'Mobile App', hours: 6 },
      { id: 'e11', date: '2024-01-11', taskName: 'Code Review', projectName: 'Client Portal', hours: 4 },
      { id: 'e12', date: '2024-01-12', taskName: 'Bug Fixes', projectName: 'Mobile App', hours: 2 },
    ],
  },
  '3': {
    id: '3',
    weekNumber: 3,
    dateRange: '15 - 19 January, 2024',
    startDate: '2024-01-15',
    endDate: '2024-01-19',
    totalHours: 32,
    targetHours: 40,
    entries: [
      { id: 'e13', date: '2024-01-15', taskName: 'Feature Development', projectName: 'Dashboard Project', hours: 8 },
      { id: 'e14', date: '2024-01-16', taskName: 'Backend Integration', projectName: 'Dashboard Project', hours: 8 },
      { id: 'e15', date: '2024-01-17', taskName: 'Unit Testing', projectName: 'Dashboard Project', hours: 6 },
      { id: 'e16', date: '2024-01-18', taskName: 'Performance Optimization', projectName: 'E-Commerce Platform', hours: 8 },
      { id: 'e17', date: '2024-01-19', taskName: 'Documentation', projectName: 'Dashboard Project', hours: 2 },
    ],
  },
  '4': {
    id: '4',
    weekNumber: 4,
    dateRange: '22 - 26 January, 2024',
    startDate: '2024-01-22',
    endDate: '2024-01-26',
    totalHours: 0,
    targetHours: 40,
    entries: [],
  },
  '5': {
    id: '5',
    weekNumber: 5,
    dateRange: '29 January - 2 February, 2024',
    startDate: '2024-01-29',
    endDate: '2024-02-02',
    totalHours: 40,
    targetHours: 40,
    entries: [
      { id: 'e18', date: '2024-01-29', taskName: 'Architecture Design', projectName: 'Microservices API', hours: 8 },
      { id: 'e19', date: '2024-01-30', taskName: 'Service Implementation', projectName: 'Microservices API', hours: 8 },
      { id: 'e20', date: '2024-01-31', taskName: 'Authentication Module', projectName: 'Microservices API', hours: 8 },
      { id: 'e21', date: '2024-02-01', taskName: 'API Testing', projectName: 'Microservices API', hours: 8 },
      { id: 'e22', date: '2024-02-02', taskName: 'Deployment Setup', projectName: 'Microservices API', hours: 8 },
    ],
  },
  '6': {
    id: '6',
    weekNumber: 6,
    dateRange: '5 - 9 February, 2024',
    startDate: '2024-02-05',
    endDate: '2024-02-09',
    totalHours: 36,
    targetHours: 40,
    entries: [
      { id: 'e23', date: '2024-02-05', taskName: 'Frontend Refactoring', projectName: 'Client Portal', hours: 8 },
      { id: 'e24', date: '2024-02-06', taskName: 'State Management', projectName: 'Client Portal', hours: 8 },
      { id: 'e25', date: '2024-02-07', taskName: 'Component Testing', projectName: 'Client Portal', hours: 7 },
      { id: 'e26', date: '2024-02-08', taskName: 'Performance Tuning', projectName: 'Client Portal', hours: 7 },
      { id: 'e27', date: '2024-02-09', taskName: 'Code Review', projectName: 'Mobile App', hours: 6 },
    ],
  },
  '7': {
    id: '7',
    weekNumber: 7,
    dateRange: '12 - 16 February, 2024',
    startDate: '2024-02-12',
    endDate: '2024-02-16',
    totalHours: 0,
    targetHours: 40,
    entries: [],
  },
  '8': {
    id: '8',
    weekNumber: 8,
    dateRange: '19 - 23 February, 2024',
    startDate: '2024-02-19',
    endDate: '2024-02-23',
    totalHours: 28,
    targetHours: 40,
    entries: [
      { id: 'e28', date: '2024-02-19', taskName: 'Security Audit', projectName: 'E-Commerce Platform', hours: 6 },
      { id: 'e29', date: '2024-02-20', taskName: 'Vulnerability Fixes', projectName: 'E-Commerce Platform', hours: 8 },
      { id: 'e30', date: '2024-02-21', taskName: 'Integration Testing', projectName: 'E-Commerce Platform', hours: 7 },
      { id: 'e31', date: '2024-02-22', taskName: 'Client Meeting', projectName: 'Client Portal', hours: 3 },
      { id: 'e32', date: '2024-02-23', taskName: 'Feature Planning', projectName: 'Dashboard Project', hours: 4 },
    ],
  },
  '9': {
    id: '9',
    weekNumber: 9,
    dateRange: '26 February - 1 March, 2024',
    startDate: '2024-02-26',
    endDate: '2024-03-01',
    totalHours: 40,
    targetHours: 40,
    entries: [
      { id: 'e33', date: '2024-02-26', taskName: 'Payment Gateway Integration', projectName: 'E-Commerce Platform', hours: 8 },
      { id: 'e34', date: '2024-02-27', taskName: 'Checkout Flow', projectName: 'E-Commerce Platform', hours: 8 },
      { id: 'e35', date: '2024-02-28', taskName: 'Order Management', projectName: 'E-Commerce Platform', hours: 8 },
      { id: 'e36', date: '2024-02-29', taskName: 'Email Notifications', projectName: 'E-Commerce Platform', hours: 8 },
      { id: 'e37', date: '2024-03-01', taskName: 'Testing & QA', projectName: 'E-Commerce Platform', hours: 8 },
    ],
  },
  '10': {
    id: '10',
    weekNumber: 10,
    dateRange: '4 - 8 March, 2024',
    startDate: '2024-03-04',
    endDate: '2024-03-08',
    totalHours: 35,
    targetHours: 40,
    entries: [
      { id: 'e38', date: '2024-03-04', taskName: 'Admin Dashboard', projectName: 'E-Commerce Platform', hours: 8 },
      { id: 'e39', date: '2024-03-05', taskName: 'Analytics Integration', projectName: 'E-Commerce Platform', hours: 7 },
      { id: 'e40', date: '2024-03-06', taskName: 'Report Generation', projectName: 'E-Commerce Platform', hours: 8 },
      { id: 'e41', date: '2024-03-07', taskName: 'User Management', projectName: 'Client Portal', hours: 7 },
      { id: 'e42', date: '2024-03-08', taskName: 'Documentation', projectName: 'Client Portal', hours: 5 },
    ],
  },
};
