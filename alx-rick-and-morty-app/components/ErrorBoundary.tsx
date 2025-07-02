import React from "react";
import * as Sentry from '@sentry/react';


componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  Sentry.captureException(error, { extra: errorInfo });
}
interface State {
    hasError: boolean;
}
interface ErrorBoundaryProps {
    children: React.ReactNode;
}
    children: React


class ErrorBoundary extends React.Component<ErrorBoundaryProps , State> 
{
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error: Error): State {
        return { hasError: true };
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log({ error, errorInfo});
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    <button onClick={() => this.setState({ hasError: false})}>
                        Try again?
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
function componentDidCatch(Error: ErrorConstructor, Error1: ErrorConstructor, errorInfo: any, ErrorInfo: any) {
    throw new Error("Function not implemented.");
}
