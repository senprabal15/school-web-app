'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSchool } from '@/lib/store';

export default function RequireRole({ role, children }: any) {
  const { currentUser } = useSchool();
  const router = useRouter();

  useEffect(()=>{
    if (!currentUser || (role && currentUser.role !== role)) {
      router.push('/dashboard');
    }
  },[currentUser, role, router]);

  return <>{children}</>;
}
