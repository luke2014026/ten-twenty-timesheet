# ticktock - Timesheet Management Application

A modern, responsive timesheet management application for tracking employee work hours and productivity.


## 📋 Features

- **Authentication System**: Secure login with session management
- **Dashboard**: Clean interface to view and manage timesheets
- **Table View**: Display timesheet entries with week number, date range, and status
- **Detail View**: Daily task breakdown with hours tracking
- **Add/Edit Entries**: Modal forms for managing timesheet tasks
- **Filtering**: Filter timesheets by date range and status
- **Pagination**: Navigate through timesheet entries with configurable page size
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **HTTP Client**: TanStack Query
- **Date Handling**: date-fns

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AddEntryModal.tsx
│   ├── EntryRow.tsx
│   ├── FilterDropdown.tsx
│   ├── Footer.tsx
│   ├── LoginForm.tsx
│   ├── LoginHero.tsx
│   ├── Navbar.tsx
│   ├── Pagination.tsx
│   ├── TimesheetEntryList.tsx
│   └── TimesheetTable.tsx
├── lib/
│   ├── api/            # API integration layer
│   │   ├── auth.ts
│   │   ├── timesheets.ts
│   │   └── timesheetDetails.ts
│   ├── mock/           # Mock data
│   │   ├── timesheetDetails.ts
│   │   ├── timesheets.ts
│   │   └── users.ts
│   └── utils.ts
├── pages/              # Page components
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   ├── TimesheetDetailView.tsx
│   └── NotFound.tsx
├── styles/             # CSS modules
│   ├── AddEntryModal.css
│   ├── Dashboard.css
│   ├── EntryRow.css
│   ├── FilterDropdown.css
│   ├── Footer.css
│   ├── Login.css
│   ├── LoginForm.css
│   ├── LoginHero.css
│   ├── Navbar.css
│   ├── Pagination.css
│   ├── TimesheetDetailView.css
│   ├── TimesheetEntryList.css
│   └── TimesheetTable.css
└── ui/                 # Base UI components
```

## 🔧 Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:8080
```

## 🔑 Test Credentials

Use these credentials to login:

- **Admin User**
  - Email: `admin@ticktock.com`
  - Password: `admin123`

- **Regular User**
  - Email: `user@ticktock.com`
  - Password: `user123`

## 📊 Mock Data

The application includes mock data for:

- **User Authentication**: 2 test users with credentials
- **Timesheet Entries**: 8 sample weekly timesheets with various statuses
  - COMPLETED: 40 hours logged
  - INCOMPLETE: Less than 40 hours logged
  - MISSING: No hours logged
- **Timesheet Details**: Daily task breakdowns for demonstration

## 🎨 Design System

The application uses a custom design system with:

- **Primary Color**: Blue (#1C64F2)
- **Gray Scale**: Custom gray palette for text and backgrounds
- **Typography**: Inter font family
- **Components**: Consistent spacing, border-radius, and shadows

All colors are defined in HSL format in `src/index.css` for easy theming.

## 🔐 Authentication Flow

1. User enters credentials on login page
2. API validates against mock user data
3. Session token is stored in sessionStorage
4. Protected routes check for valid session
5. Auto-redirect to login if session is invalid
6. Logout clears session and redirects to login

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🚦 Status Types

- **COMPLETED** (Green): User has logged 40 hours
- **INCOMPLETE** (Yellow): User has logged less than 40 hours
- **MISSING** (Pink): User hasn't logged any hours

## 📦 Build for Production

```bash
npm run build
```

The production build will be created in the `dist` folder.

---

**TenTwenty Frontend Assessment 2025**
