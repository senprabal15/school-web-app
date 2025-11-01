import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { SchoolProvider, useSchool } from '../lib/store';

function wrapper({ children }: any) { return <SchoolProvider>{children}</SchoolProvider>; }

test('adds and deletes student', () => {
  const { result } = renderHook(() => useSchool(), { wrapper });

  act(() => { result.current.addStudent({ name: 'Test', class: '1-A' }); });
  expect(result.current.students.some((s:any) => s.name === 'Test')).toBeTruthy();

  const id = result.current.students.find((s:any) => s.name === 'Test').id;
  act(() => { result.current.deleteStudent(id); });
  expect(result.current.students.some((s:any) => s.name === 'Test')).toBeFalsy();
});
