import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FitnessProvider } from './context/FitnessContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import DietPlan from './pages/DietPlan';
import WorkoutPlan from './pages/WorkoutPlan';
import Progress from './pages/Progress';
import AICoach from './pages/AICoach';

export default function App() {
  return (
    <FitnessProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="diet" element={<DietPlan />} />
            <Route path="workout" element={<WorkoutPlan />} />
            <Route path="progress" element={<Progress />} />
            <Route path="coach" element={<AICoach />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FitnessProvider>
  );
}
