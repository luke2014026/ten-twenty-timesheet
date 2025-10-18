import { mockTimesheets, Timesheet } from '../mock/timesheets';

export interface FetchTimesheetsParams {
  dateRange?: string;
  status?: string;
  page?: number;
  perPage?: number;
}

export interface FetchTimesheetsResponse {
  success: boolean;
  data: Timesheet[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export const fetchTimesheets = async (
  params: FetchTimesheetsParams = {}
): Promise<FetchTimesheetsResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  let filtered = [...mockTimesheets];

  if (params.status && params.status !== 'all') {
    filtered = filtered.filter((ts) => ts.status === params.status);
  }

  if (params.dateRange && params.dateRange !== 'all') {
  }

  const page = params.page || 1;
  const perPage = params.perPage || 5;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = filtered.slice(startIndex, endIndex);

  return {
    success: true,
    data: paginatedData,
    total: filtered.length,
    page,
    perPage,
    totalPages: Math.ceil(filtered.length / perPage),
  };
};
