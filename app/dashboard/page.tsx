'use client'

import { useState, useEffect, useMemo } from 'react'
import { 
  BarChart, 
  Clock, 
  Calendar, 
  Users, 
  FileText, 
  Settings, 
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Search
} from 'lucide-react'
import Image from 'next/image'

// Timesheet data type
type TimesheetEntry = {
  id: number;
  project: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  total: string;
}

// Project allocation data type
type ProjectAllocation = {
  id: number;
  project: string;
  allocation: string;
  startDate: string;
  endDate: string;
}

// Quick stats data type
type QuickStats = {
  hoursThisWeek: number;
  activeProjects: number;
  pendingApprovals: number;
}

// Simulated API calls
const fetchTimesheetData = (): Promise<TimesheetEntry[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, project: "Project Alpha", mon: "4h", tue: "3.5h", wed: "4h", thu: "3h", fri: "2h", total: "16.5h" },
        { id: 2, project: "Project Beta", mon: "2h", tue: "4h", wed: "3h", thu: "4h", fri: "2h", total: "15h" },
        { id: 3, project: "Project Gamma", mon: "1h", tue: "2h", wed: "3h", thu: "2h", fri: "4h", total: "12h" },
        { id: 4, project: "Project Delta", mon: "3h", tue: "3h", wed: "3h", thu: "3h", fri: "3h", total: "15h" },
      ]);
    }, 500);
  });
};

const fetchProjectData = (): Promise<ProjectAllocation[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, project: "Project Alpha", allocation: "50%", startDate: "01/01/2023", endDate: "31/12/2023" },
        { id: 2, project: "Project Beta", allocation: "30%", startDate: "01/03/2023", endDate: "31/08/2023" },
        { id: 3, project: "Project Gamma", allocation: "20%", startDate: "01/06/2023", endDate: "31/12/2023" },
        { id: 4, project: "Project Delta", allocation: "40%", startDate: "01/04/2023", endDate: "30/09/2023" },
      ]);
    }, 500);
  });
};

const fetchQuickStats = (): Promise<QuickStats> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hoursThisWeek: 35.5,
        activeProjects: 4,
        pendingApprovals: 2,
      });
    }, 500);
  });
};

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [timesheetSearch, setTimesheetSearch] = useState('')
  const [timesheetSort, setTimesheetSort] = useState({ column: '', direction: '' })
  const [projectSearch, setProjectSearch] = useState('')
  const [projectSort, setProjectSort] = useState({ column: '', direction: '' })
  const [timesheetData, setTimesheetData] = useState<TimesheetEntry[]>([])
  const [projectData, setProjectData] = useState<ProjectAllocation[]>([])
  const [quickStats, setQuickStats] = useState<QuickStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [timesheet, projects, stats] = await Promise.all([
          fetchTimesheetData(),
          fetchProjectData(),
          fetchQuickStats()
        ]);
        setTimesheetData(timesheet);
        setProjectData(projects);
        setQuickStats(stats);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter and sort timesheet data
  const filteredTimesheetData = useMemo(() => {
    return timesheetData
      .filter(entry => entry.project.toLowerCase().includes(timesheetSearch.toLowerCase()))
      .sort((a, b) => {
        if (timesheetSort.column === '') return 0
        const aValue = a[timesheetSort.column as keyof TimesheetEntry]
        const bValue = b[timesheetSort.column as keyof TimesheetEntry]
        return timesheetSort.direction === 'asc' ? String(aValue).localeCompare(String(bValue)) : String(bValue).localeCompare(String(aValue))
      })
  }, [timesheetData, timesheetSearch, timesheetSort])

  // Filter and sort project data
  const filteredProjectData = useMemo(() => {
    return projectData
      .filter(entry => entry.project.toLowerCase().includes(projectSearch.toLowerCase()))
      .sort((a, b) => {
        if (projectSort.column === '') return 0
        const aValue = a[projectSort.column as keyof ProjectAllocation]
        const bValue = b[projectSort.column as keyof ProjectAllocation]
        return projectSort.direction === 'asc' ? String(aValue).localeCompare(String(bValue)) : String(bValue).localeCompare(String(aValue))
      })
  }, [projectData, projectSearch, projectSort])

  const handleSort = (table: 'timesheet' | 'project', column: keyof TimesheetEntry | keyof ProjectAllocation) => {
    if (table === 'timesheet') {
      setTimesheetSort(prev => ({
        column,
        direction: prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc'
      }))
    } else {
      setProjectSort(prev => ({
        column,
        direction: prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc'
      }))
    }
  }

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-blue-700 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
        <nav>
          <div className="flex items-center justify-between mb-6 px-4">
            <span className="text-2xl font-semibold">TimeTrack</span>
            <button onClick={toggleSidebar} className="md:hidden">
              <X size={24} />
            </button>
          </div>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white">
            <Clock className="inline-block mr-2 text-yellow-400" size={20} /> Timesheets
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white">
            <BarChart className="inline-block mr-2 text-green-400" size={20} /> Reports
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white">
            <Calendar className="inline-block mr-2 text-red-400" size={20} /> Schedule
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white">
            <Users className="inline-block mr-2 text-purple-400" size={20} /> Projects
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white">
            <FileText className="inline-block mr-2 text-orange-400" size={20} /> Invoices
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white">
            <Settings className="inline-block mr-2 text-pink-400" size={20} /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-blue-600 shadow-md">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button onClick={toggleSidebar} className="text-white focus:outline-none focus:text-blue-200 md:hidden">
                <Menu size={24} />
              </button>
              <h2 className="text-xl font-semibold text-white ml-4">Dashboard</h2>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <button className="flex items-center text-white hover:text-blue-200 focus:outline-none">
                  <Image 
                    src="/placeholder.svg?height=32&width=32" 
                    alt="User avatar" 
                    width={32} 
                    height={32} 
                    className="rounded-full"
                  />
                  <span className="ml-2">John Doe</span>
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {/* Dropdown menu would go here */}
              </div>
              <a href="#" className="ml-4 text-white hover:text-blue-200">
                <LogOut size={20} />
              </a>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Welcome back, John</h3>
            
            {/* Quick Stats */}
            {quickStats && (
              <div className="mt-4">
                <div className="flex flex-wrap -mx-6">
                  <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                      <div className="p-3 rounded-full bg-blue-600 bg-opacity-75">
                        <Clock className="h-8 w-8 text-white" />
                      </div>
                      <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">{quickStats.hoursThisWeek}h</h4>
                        <div className="text-gray-500">Hours This Week</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                      <div className="p-3 rounded-full bg-green-600 bg-opacity-75">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">{quickStats.activeProjects}</h4>
                        <div className="text-gray-500">Active Projects</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                      <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                      <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">{quickStats.pendingApprovals}</h4>
                        <div className="text-gray-500">Pending Approvals</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Timesheet Summary */}
            <div className="mt-8">
              <h4 className="text-gray-600">This Week's Timesheet</h4>
              <div className="mt-4">
                <div className="flex flex-col">
                  <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                      <div className="bg-white p-4 flex justify-between items-center">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search projects..."
                            className="border rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={timesheetSearch}
                            onChange={(e) => setTimesheetSearch(e.target.value)}
                          />
                          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                        </div>
                      </div>
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            {['project', 'mon', 'tue', 'wed', 'thu', 'fri',   'total'].map((column) => (
                              <th
                                key={column}
                                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => handleSort('timesheet', column)}
                              >
                                {column.charAt(0).toUpperCase() + column.slice(1)}
                                {timesheetSort.column === column && (
                                  timesheetSort.direction === 'asc' ? <ChevronUp className="inline ml-1" size={14} /> : <ChevronDown className="inline ml-1" size={14} />
                                )}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {filteredTimesheetData.map((entry) => (
                            <tr key={entry.id}>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 font-medium text-gray-900">{entry.project}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-500">{entry.mon}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-500">{entry.tue}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-500">{entry.wed}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-500">{entry.thu}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-500">{entry.fri}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium text-gray-900">
                                {entry.total}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Allocations */}
            <div className="mt-8">
              <h4 className="text-gray-600">Project Allocations</h4>
              <div className="mt-4">
                <div className="flex flex-col">
                  <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                      <div className="bg-white p-4 flex justify-between items-center">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search projects..."
                            className="border rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={projectSearch}
                            onChange={(e) => setProjectSearch(e.target.value)}
                          />
                          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                        </div>
                      </div>
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            {['project', 'allocation', 'startDate', 'endDate'].map((column) => (
                              <th
                                key={column}
                                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => handleSort('project', column)}
                              >
                                {column === 'startDate' ? 'Start Date' : column === 'endDate' ? 'End Date' : column.charAt(0).toUpperCase() + column.slice(1)}
                                {projectSort.column === column && (
                                  projectSort.direction === 'asc' ? <ChevronUp className="inline ml-1" size={14} /> : <ChevronDown className="inline ml-1" size={14} />
                                )}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {filteredProjectData.map((entry) => (
                            <tr key={entry.id}>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 font-medium text-gray-900">{entry.project}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-500">{entry.allocation}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-500">{entry.startDate}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-500">{entry.endDate}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}