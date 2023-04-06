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
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div className='app'>
        {/* <ErrorBoundary> */}
          <Navbar />
        {/* </ErrorBoundary> */}
        <Routes>
          {/* <ErrorBoundary> */}
            <Route path="/" element={<Home />} />
          {/* </ErrorBoundary> */}
          {/* <ErrorBoundary> */}
            <Route path="/sustainableliving" element={<SustainableLiving />} />
          {/* </ErrorBoundary> */}
          {/* <ErrorBoundary> */}
            <Route path="/environment" element={<Environment />} />
          {/* </ErrorBoundary> */}
          {/* <ErrorBoundary> */}
            <Route path="/greenenergy" element={<GreenEnergy />} />
          {/* </ErrorBoundary> */}
          {/* <ErrorBoundary> */}
            <Route path="/blog" element={<Blog />} />
          {/* </ErrorBoundary> */}
          {/* <ErrorBoundary> */}
            <Route path="/resources" element={<Resources />} />
          {/* </ErrorBoundary> */}
          {/* <ErrorBoundary> */}
            <Route path="/contact" element={<Contact />} />
          {/* </ErrorBoundary> */}
        </Routes>
      </div>
  );
}

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div>Something went wrong.</div>;
//     }

//     return this.props.children;
//   }
// }

export default App;

