'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartsPage() {
  const data = {
    labels: ['Jan','Feb','Mar','Apr'],
    datasets: [
      { label: 'Attendance %', data: [90,92,88,95] }
    ]
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Attendance Analytics</h2>
      <Bar data={data} />
    </div>
  );
}
