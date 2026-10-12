import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className="text-xl font-bold text-primary">MERAM Healthcare</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 bg-gray-100">
            <span className="mx-3">Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
            <span className="mx-3">Appointments</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
            <span className="mx-3">Patients</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
            <span className="mx-3">Settings</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          <p className="text-gray-600">Welcome back to your dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Total Patients</h3>
            <p className="text-3xl font-bold text-gray-800">1,234</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Today's Appointments</h3>
            <p className="text-3xl font-bold text-gray-800">12</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Pending Reports</h3>
            <p className="text-3xl font-bold text-gray-800">5</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
            <p className="text-3xl font-bold text-gray-800">$12,345</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-medium text-gray-800">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600">JD</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-800">John Doe</p>
                  <p className="text-sm text-gray-600">New appointment scheduled</p>
                </div>
                <div className="ml-auto">
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">AS</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-800">Alice Smith</p>
                  <p className="text-sm text-gray-600">Report uploaded</p>
                </div>
                <div className="ml-auto">
                  <p className="text-sm text-gray-600">4 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 