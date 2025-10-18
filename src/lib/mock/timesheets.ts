export interface Timesheet {
  id: string;
  weekNumber: number;
  dateRange: string;
  startDate: string;
  endDate: string;
  status: 'COMPLETED' | 'INCOMPLETE' | 'MISSING';
  hoursLogged: number;
}

export const mockTimesheets: Timesheet[] = [
  {
    id: '1',
    weekNumber: 1,
    dateRange: '1 - 5 January, 2024',
    startDate: '2024-01-01',
    endDate: '2024-01-05',
    status: 'COMPLETED',
    hoursLogged: 40,
  },
  {
    id: '2',
    weekNumber: 2,
    dateRange: '8 - 12 January, 2024',
    startDate: '2024-01-08',
    endDate: '2024-01-12',
    status: 'COMPLETED',
    hoursLogged: 40,
  },
  {
    id: '3',
    weekNumber: 3,
    dateRange: '15 - 19 January, 2024',
    startDate: '2024-01-15',
    endDate: '2024-01-19',
    status: 'INCOMPLETE',
    hoursLogged: 32,
  },
  {
    id: '4',
    weekNumber: 4,
    dateRange: '22 - 26 January, 2024',
    startDate: '2024-01-22',
    endDate: '2024-01-26',
    status: 'COMPLETED',
    hoursLogged: 40,
  },
  {
    id: '5',
    weekNumber: 5,
    dateRange: '29 January - 1 February, 2024',
    startDate: '2024-01-29',
    endDate: '2024-02-01',
    status: 'MISSING',
    hoursLogged: 0,
  },
  {
    id: '6',
    weekNumber: 6,
    dateRange: '5 - 9 February, 2024',
    startDate: '2024-02-05',
    endDate: '2024-02-09',
    status: 'COMPLETED',
    hoursLogged: 40,
  },
  {
    id: '7',
    weekNumber: 7,
    dateRange: '12 - 16 February, 2024',
    startDate: '2024-02-12',
    endDate: '2024-02-16',
    status: 'INCOMPLETE',
    hoursLogged: 28,
  },
  {
    id: '8',
    weekNumber: 8,
    dateRange: '19 - 23 February, 2024',
    startDate: '2024-02-19',
    endDate: '2024-02-23',
    status: 'MISSING',
    hoursLogged: 0,
  },
];
