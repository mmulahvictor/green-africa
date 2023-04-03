import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import SustainableLiving from './components/sustainable living/SustainableLiving';
import Environment from './components/environment/Environment';
import GreenEnergy from './components/green energy/GreenEnergy';
import Blog from './components/blog/Blog';
import Resources from './components/resources/Resources';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className='app'>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
      <ErrorBoundary>
        <SustainableLiving />
      </ErrorBoundary>
      <ErrorBoundary>
        <Environment />
      </ErrorBoundary>
      <ErrorBoundary>
        <GreenEnergy />
      </ErrorBoundary>
      <ErrorBoundary>
        <Blog />
      </ErrorBoundary>
      <ErrorBoundary>
        <Resources />
      </ErrorBoundary>
      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default App;

