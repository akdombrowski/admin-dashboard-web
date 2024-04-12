"use client";

import { usePathname } from 'next/navigation';

export default async function LinkPage() {
  const pathname = usePathname();
  const linkId = pathname.split('/').pop(); // Assuming the linkId is always the last segment
  // TODO : Grab coach name and query db to see if the question layer is live or not.  If not redirect to a fallback.
  return <div>Your Link ID is: {linkId}</div>;
}