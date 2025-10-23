import React, { useEffect, useState } from 'react';
import FarmerSidebar from '../../components/Farmer/FarmerSidebar';
import api from '../../utils/api';
import { farmerDashboardSummary } from '../../api-mocks/dashboardMocks'; // Actual mock data

const FarmerDashboardHome = () => {
  // const { isAuthenticated, userType } = useAuthStore(); // Placeholder for state management
  const [summary, setSummary] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (userType !== 'farmer') { /* Redirect to login or home */ }
    
    // Simulate data fetching from a protected endpoint
    const fetchDashboardData = async () => {
      try {
        // const response = await api.get('/api/farmer/dashboard'); // Production
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API delay
        setSummary(farmerDashboardSummary); // Mock data usage
      } catch (error) {
        console.error("Could not fetch farmer dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  if (loading) return <div className="p-8 text-center text-agri-dark">Loading Dashboard...</div>;

  return (
    <div className="flex min-h-screen bg-agri-earth">
      <FarmerSidebar />
      
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-agri-dark mb-6">Farmer Dashboard 👋</h1>
        <p className="text-agri-brown/90 mb-8">Quick overview of your farm's performance on Agricool.</p>

        {/* Sales & Wallet Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard title="Wallet Balance" value={`Ksh ${summary.walletBalance.toLocaleString()}`} icon="💰" color="bg-agri-green" link="/farmer/wallet" />
          <SummaryCard title="Recent Sales" value={`${summary.recentSales} Orders`} icon="📈" color="bg-agri-gold" link="/farmer/sales" />
          <SummaryCard title="Active Subscriptions" value={summary.subscriptions} icon="📦" color="bg-agri-dark" link="/farmer/subscriptions" />
        </div>

        {/* Quick Actions & Recent Activity (Placeholder for detailed tables) */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-agri-dark mb-4">Quick Links & Activity</h2>
          <div className="flex space-x-4">
            <QuickLinkButton text="Upload New Product" link="/farmer/upload" />
            <QuickLinkButton text="View Transactions" link="/farmer/wallet" />
            <QuickLinkButton text="AI Analysis" link="/farmer/ai-analysis" />
          </div>
          {/* Detailed table of recent orders/transactions would go here */}
        </div>
      </main>
    </div>
  );
};

// Helper component for summary cards
const SummaryCard = ({ title, value, icon, color, link }) => (
  <a href={link} className={`p-6 rounded-xl shadow-xl transition transform hover:scale-[1.02] cursor-pointer ${color} text-white`}>
    <div className="text-4xl mb-3">{icon}</div>
    <p className="text-lg font-medium opacity-80">{title}</p>
    <h3 className="text-4xl font-bold mt-1">{value}</h3>
  </a>
);

// Helper component for quick buttons
const QuickLinkButton = ({ text, link }) => (
    <a href={link} className="px-5 py-2.5 bg-agri-green/10 text-agri-green font-medium rounded-lg hover:bg-agri-green/20 transition">
        {text}
    </a>
);

export default FarmerDashboardHome;
