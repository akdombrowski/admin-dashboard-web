"use client";

import { usePathname } from 'next/navigation';

export default async function LinkPage() {
  const pathname = usePathname();
  const linkId = pathname.split('/').pop(); // Assuming the linkId is always the last segment

  return <div>Your Link ID is: {linkId}</div>;
}