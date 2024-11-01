"use client";

import React, { useEffect, useState } from "react";
import { decodeJwt } from "jwt-js-decode";

const Page = () => {
  const [payload, setPayload] = useState<Record<string, any> | null>(null);

  const token = `eyJraWQiOiJSRHNQSThzRHNrWXJUNEw1aTB6MVh3RW11aVwvNlJpS0JXN0JnVFF4NnB6OD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhMzU0YThlMi01MDgxLTcwOTAtZGEzMi1hYzhhZmU3NTcxODkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9LTmFMQ3haUUUiLCJjbGllbnRfaWQiOiIyZzAxdnQ3M2NtODIwaWQyMWxhZ20wNDUwNSIsIm9yaWdpbl9qdGkiOiI4ZmRiMDM3Ni1iNDA0LTQyYzgtYjZjNi0wODE2NDUzOTZhZjUiLCJldmVudF9pZCI6IjBlYjU4ODFiLTdmZDQtNDE3OC1iMTk1LWY3ODdiMmY2NDBjNCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3Mjk5MzkxNjcsImV4cCI6MTcyOTk0Mjc2NywiaWF0IjoxNzI5OTM5MTY3LCJqdGkiOiIxMjg1M2EwMi1iNjQyLTQ2ZWYtYTNmMy1iNjVhYWYwOGExMjAiLCJ1c2VybmFtZSI6ImEzNTRhOGUyLTUwODEtNzA5MC1kYTMyLWFjOGFmZTc1NzE4OSJ9.KGcNAKEA9LjcdSPN7wFUdJjd0fzJHF77etUQGarnamUKPAlPCgURI4rKHZ_nhD-TEK2owE3eAVj-dnHdEMH0yQEhKoyu5yabnF-tHNtRU-Cc8BZ62jyNi2qEgY9x0TYmuBNjRXgxEAo4vFz5CiDMP91f-cFM9K4H1TWQ-J1WgO4YrT_CdB2LMS1QCUS6I5b0ovCKdSCZXWF4IQaqOAcmTkFbtp6RJBRPJjcJPbrJs50gCVeCmViZ-1T3RNgrbt0k_UsCmFRU_zJrU1TVPXOlesQMYUbxfN_i10CoZSLNBnVF533Mzm0UYh3z_o8E8rF1l4_pg57qBQwUN7RBpuSkFg`;

  useEffect(() => {
    try {
      const decoded = decodeJwt(token);
      setPayload(decoded.payload);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }, []);

  return (
    <div>
      <h1>Decoded JWT Payload</h1>
      {payload ? (
        <ul>
          {Object.entries(payload).map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {JSON.stringify(value)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
