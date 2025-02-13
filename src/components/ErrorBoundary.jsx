import React, { Component } from 'react';

class ErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false, errorMessage: '' };
   }

   static getDerivedStateFromError(error) {
      // Update state so the next render shows the fallback UI.
      return { hasError: true, errorMessage: error.message };
   }

   componentDidCatch(error, errorInfo) {
      // Log the error to an error reporting service (optional)
      console.error("Error caught by Error Boundary: ", error, errorInfo);
   }

   render() {
      if (this.state.hasError) {
         return (
            <div style={{ padding: '20px', backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb', borderRadius: '5px' }}>
               <h2>Something went wrong!</h2>
               <p>{this.state.errorMessage}</p>
               <p>Please try again later.</p>
            </div>
         );
      }

      return this.props.children;
   }
}

export default ErrorBoundary;
