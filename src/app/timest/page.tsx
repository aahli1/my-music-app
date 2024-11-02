// src/app/page.tsx

"use client";

import React, { useState } from 'react';
import timestamp from 'unix-timestamp';

export default function HomePage() {
  const [unixTime, setUnixTime] = useState(1633910400); // Example timestamp
  const date = timestamp.toDate(unixTime); // Convert Unix timestamp to Date

  return (
    <div>
      <h1>Convert Unix Timestamp to Date</h1>
      <p>Unix Timestamp: {unixTime}</p>
      <p>Date: {date.toString()}</p>
      <input
        type="number"
        value={unixTime}
        onChange={(e) => setUnixTime(Number(e.target.value))}
        placeholder="Enter Unix timestamp"
      />
    </div>
  );
}
