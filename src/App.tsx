import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="mx-auto max-w-[500px]">
      <h1 className="mb-4 text-center text-[2rem] font-bold">Github Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
