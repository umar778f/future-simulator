import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Activity, LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full text-center space-y-8 z-10"
      >
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          Predict Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Future Trajectory
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-400">
          Enter your current skills, goals, and habits. Our advanced Gemini engine will simulate your
          best, average, and worst-case career outcomes.
        </p>

        <div className="pt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 border border-cyan-500/50 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-3 text-lg">
              <span>Initialize Simulation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-24 z-10">
        <FeatureCard 
           icon={<BrainCircuit className="w-6 h-6 text-purple-400" />}
           title="Gemini Engine"
           desc="State-of-the-art simulation logic using the Gemini model to synthesize complex career paths."
        />
        <FeatureCard 
           icon={<Activity className="w-6 h-6 text-cyan-400" />}
           title="Probabilistic Outcomes"
           desc="Get hyper-realistic best-case, expected, and worst-case scenarios based on consistency metrics."
        />
        <FeatureCard 
           icon={<LineChart className="w-6 h-6 text-blue-400" />}
           title="Trajectory Visualization"
           desc="Analyze your skill growth and potential salary projections with crisp, clear data visualizations."
        />
      </div>
    </div>
  );
}

// Plain Javascript Component
function FeatureCard({ icon, title, desc }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl flex flex-col space-y-4 bg-slate-900/50 border border-slate-800 backdrop-blur-sm"
    >
      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}