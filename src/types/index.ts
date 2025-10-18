export interface User {
  id: string
  email: string
  name: string
}

export interface AuthToken {
  token: string
  user: User
  expiresAt: number
}

export interface Timesheet {
  id: string
  week: number
  date: string
  status: "Submitted" | "Pending" | "Approved" | "Rejected"
  hours: number
  userId: string
}

export interface TimesheetEntry {
  id: string
  timesheetId: string
  date: string
  day: string
  hours: number
  description: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  success: boolean
  token?: string
  user?: User
  error?: string
}
