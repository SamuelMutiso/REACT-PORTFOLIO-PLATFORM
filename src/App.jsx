import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import SearchBar from './components/SearchBar';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Luxury Brand Redesign", 
      tech: "React", 
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", 
      desc: "A modern look for high-end retail." },

    { id: 2, name: "Fitness Tracker App",
       tech: "JavaScript", 
       image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500", 
       desc: "Real-time health monitoring." }
  ]);

  const [search, setSearch] = useState("");

  const addNewProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProjectForm onAdd={addNewProject} />
        </div>
        <div className="lg:col-span-3">
          <SearchBar val={search} onUpdate={setSearch} />
          <ProjectList data={filteredProjects} />
        </div>
      </main>
    </div>
  );
}

export default App;