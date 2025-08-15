import type { ReactNode } from "react";
import React from "react";

interface ErrorBoundaryProps {
  fallback?: ReactNode; // Optional fallback UI
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class RemoteErrorBoundary  extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render shows the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log error to an external service here
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI if provided, otherwise a default message
      return this.props.fallback || <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}