import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    // Optionally log error to an external service here
    // console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f4f6fa' }}>
          <div style={{ background: '#fff', padding: '2rem 3rem', borderRadius: '1.2rem', boxShadow: '0 0 20px rgba(0,0,0,0.10)', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#e74c3c', marginBottom: '1rem' }}>Something went wrong</h1>
            <p style={{ color: '#555', fontSize: '1.2rem' }}>An unexpected error occurred. Please try refreshing the page.</p>
            <button onClick={this.handleReload} style={{ marginTop: '1.5rem', padding: '0.7rem 2rem', fontSize: '1.1rem', borderRadius: '1.2rem', background: '#2d7aee', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Reload</button>
            <details style={{ marginTop: '1.5rem', color: '#888', fontSize: '0.95rem', textAlign: 'left', maxWidth: 500, margin: '1.5rem auto 0 auto' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 