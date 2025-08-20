// app/ClientWrapper.tsx
"use client";

import React from "react";
import { useLenisScroll } from "./hooks/useLenisScroll";
// Define the type for the component's props
interface ClientWrapperProps {
  children: React.ReactNode;
}

// Apply the props type to the function component
export default function ClientWrapper({ children }: ClientWrapperProps) {
  useLenisScroll(); // or any other client-side logic
  
  return (
     <>{children}</>
       
   );
}