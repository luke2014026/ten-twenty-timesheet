import { mockTimesheetDetails, TimesheetDetail } from '../mock/timesheetDetails';

export const fetchTimesheetDetail = async (id: string): Promise<TimesheetDetail | null> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return mockTimesheetDetails[id] || null;
};
