'use client';
import { auth, googleProvider } from '@/lib/firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  async function handleGoogleLogin() {
    if (!auth || !googleProvider) return;
    await signInWithPopup(auth, googleProvider);
    document.cookie = 'firebaseAuth=1; path=/';
    router.push('/dashboard');
  }

  async function handleEmailLogin(e: any) {
    e.preventDefault();
    if (!auth) return;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(auth, email, password);
    document.cookie = 'firebaseAuth=1; path=/';
    router.push('/dashboard');
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input name="email" type="email" className="w-full border rounded-xl p-2" placeholder="Enter email" required />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input name="password" type="password" className="w-full border rounded-xl p-2" placeholder="Enter password" required />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white rounded-xl py-2">Login</button>
        </form>

        <div className="mt-4">
          <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white rounded-xl py-2">Sign in with Google</button>
        </div>

        <a href="/" className="block text-center text-blue-500 mt-4 text-sm">← Back to Home</a>
      </div>
    </main>
  );
}
