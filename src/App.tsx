import type { Component } from 'solid-js';
import Dashboard from './components/Dashboard';

const App: Component = () => {
  return (
    <>
      <div class="scanlines"></div>

      <div class="starfield"></div>
      <Dashboard />
    </>
  );
};

export default App;
