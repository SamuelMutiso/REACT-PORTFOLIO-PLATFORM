import { useState } from 'react';

function ProjectForm({ onAdd }) {
  const [item, setItem] = useState({ name: '', tech: '', image: '', desc: '' });

  const handleCreate = (e) => {
    e.preventDefault();
    onAdd(item);
    setItem({ name: '', tech: '', image: '', desc: '' });
  };

  return (
    <form onSubmit={handleCreate} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
      <h3 className="font-bold text-lg border-b pb-2">New Project</h3>
      <input className="w-full p-2 bg-slate-50 border rounded-lg" placeholder="Project Name" value={item.name} onChange={(e) => setItem({...item, name: e.target.value})} required />
      <input className="w-full p-2 bg-slate-50 border rounded-lg" placeholder="Technology (e.g. React)" value={item.tech} onChange={(e) => setItem({...item, tech: e.target.value})} required />
      <input className="w-full p-2 bg-slate-50 border rounded-lg" placeholder="Image URL" value={item.image} onChange={(e) => setItem({...item, image: e.target.value})} required />
      <textarea className="w-full p-2 bg-slate-50 border rounded-lg" placeholder="Short description..." value={item.desc} onChange={(e) => setItem({...item, desc: e.target.value})} required />
      <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700">Publish Project</button>
    </form>
  );
}
export default ProjectForm;