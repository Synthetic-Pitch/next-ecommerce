'use client';
import { Provider as ReduxProvider } from "react-redux";
import Store from './store';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ReduxProvider store={Store}>{children}</ReduxProvider>;
}