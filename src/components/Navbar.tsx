import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Activity, LogOut, LayoutDashboard, History } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 glass border-b border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="w-6 h-6 text-cyan-400" />
            <span className="font-display font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              FUTURE SIM
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard" className="text-sm font-medium hover:text-cyan-400 transition-colors hidden sm:flex items-center space-x-1">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <Link to="/history" className="text-sm font-medium hover:text-cyan-400 transition-colors hidden sm:flex items-center space-x-1">
                  <History className="w-4 h-4" />
                  <span>History</span>
                </Link>
                <div className="hidden sm:block w-px h-6 bg-slate-700 mx-2"></div>
                <div className="flex items-center space-x-3">
                  <img src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}`} alt="Avatar" className="w-8 h-8 rounded-full border border-cyan-500 shadow-[0_0_10px_rgba(0,240,255,0.3)]" />
                  <button onClick={() => { logout(); navigate('/'); }} className="p-2 hover:bg-slate-800 rounded-full transition-colors group">
                    <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-400 transition-colors" />
                  </button>
                </div>
              </>
            ) : (
              <button 
                onClick={login}
                className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500 hover:text-slate-900 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300"
              >
                Connect Identity
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
