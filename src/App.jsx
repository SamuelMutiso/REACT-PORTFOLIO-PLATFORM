import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import SearchBar from './components/SearchBar';
import ProjectDetail from './components/ProjectDetail'; // New Component

function App() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH PROJECTS ON LOAD (Meets API Requirement)
  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const addNewProject = (newProject) => {
    fetch("http://localhost:3001/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject)
    })
    .then(res => res.json())
    .then(savedProject => setProjects([...projects, savedProject]));
  };

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Routes>
        {/* MAIN LANDING PAGE ROUTE */}
        <Route path="/" element={
          <>
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
          </>
        } />

        {/* DETAILED PROJECT ROUTE (Meets Routing Requirement) */}
        <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>
    </div>
  );
}

export default App;