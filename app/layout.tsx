import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  async function logout() {
    try {
      await signOut(auth);
    } catch (e) {}
    document.cookie = 'firebaseAuth=; Max-Age=0; path=/';
    router.push('/login');
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-blue-700 text-white p-6 space-y-6 hidden md:block">
        <h2 className="text-xl font-bold">School Admin</h2>
        <nav className="space-y-3">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/students">Students</Link>
          <Link href="/dashboard/teachers">Teachers</Link>
          <Link href="/dashboard/classes">Classes</Link>
          <Link href="/dashboard/attendance">Attendance</Link>
          <Link href="/dashboard/fees">Fees</Link>
          <Link href="/dashboard/timetable">Timetable</Link>
          <Link href="/dashboard/exams">Exams</Link>
        </nav>
      </aside>

      <div className="flex-1">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Admin Panel</h1>
          <div className="flex items-center gap-4">
            <button onClick={logout} className="text-red-500">Logout</button>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
