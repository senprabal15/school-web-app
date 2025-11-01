'use client';
import { useState } from 'react';

export default function FeesPage() {
  const [payments, setPayments] = useState([
    { id: 1, student: 'Ravi Kumar', amount: 5000, date: '2025-10-01' },
  ]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Fees & Billing</h2>
      <div className="bg-white p-4 rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr><th className="p-2">Student</th><th className="p-2">Amount</th><th className="p-2">Date</th></tr>
          </thead>
          <tbody>
            {payments.map(p => (
              <tr key={p.id} className="border-t"><td className="p-2">{p.student}</td><td className="p-2">₹{p.amount}</td><td className="p-2">{p.date}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
