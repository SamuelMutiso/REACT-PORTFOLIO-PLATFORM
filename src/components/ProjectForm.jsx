import { useState } from 'react';

function ProjectForm({ onAdd }) {
  const [item, setItem] = useState({ name: '', tech: '', image: '', desc: '' });

  const handleCreate = (e) => {
    e.preventDefault();
    onAdd(item);
    setItem({ name: '', tech: '', image: '', desc: '' });
  };

  return (
    <form onSubmit={handleCreate} 
      className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-white sticky top-24 space-y-4">
      <h3 className="font-extrabold text-xl text-slate-800 tracking-tight">Add New Work</h3>
      
      <input 
        className="w-full p-3 bg-slate-100/50 border-none rounded-xl focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" 
        placeholder="Project Name" 
        value={item.name} 
        onChange={(e) => setItem({...item, name: e.target.value})} 
        required 
      />
      <input 
        className="w-full p-3 bg-slate-100/50 border-none rounded-xl focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" 
        placeholder="Technology (e.g. React)" 
        value={item.tech} 
        onChange={(e) => setItem({...item, tech: e.target.value})} 
        required 
      />
      <input 
        className="w-full p-3 bg-slate-100/50 border-none rounded-xl focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" 
        placeholder="Image URL" 
        value={item.image} 
        onChange={(e) => setItem({...item, image: e.target.value})} 
        required 
      />
      <textarea 
        className="w-full p-3 bg-slate-100/50 border-none rounded-xl focus:ring-2 focus:ring-blue-500/20 transition-all outline-none min-h-[100px]" 
        placeholder="Short description..." 
        value={item.desc} 
        onChange={(e) => setItem({...item, desc: e.target.value})} 
        required 
      />
      
      <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all active:scale-95">
        Publish Project
      </button>
    </form>
  );
}
export default ProjectForm;