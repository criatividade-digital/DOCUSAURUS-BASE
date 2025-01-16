import React from "react";
import { AuthCheck } from "../components/Auth";
import { UserProvider } from '../context';

export default function Root({ children }) {
  return (
    <UserProvider>
      <AuthCheck children={children} />
    </UserProvider>
  );  
}