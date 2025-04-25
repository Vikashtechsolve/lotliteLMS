import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work With Us | Vikash Tech Solutions',
  description: 'Join our team or partner with us to create amazing coding education experiences.',
};

export default function WorkWithUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 