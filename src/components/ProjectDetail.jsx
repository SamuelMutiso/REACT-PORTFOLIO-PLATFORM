import { useParams, Link } from 'react-router-dom';

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div className="p-20 text-center">Project not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <Link to="/" className="text-blue-600 font-bold mb-8 inline-block">← Back to Portfolio</Link>
      <img src={project.image} className="w-full h-96 object-cover rounded-[3rem] shadow-2xl mb-10" />
      <h1 className="text-5xl font-black mb-4">{project.name}</h1>
      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold uppercase tracking-widest text-sm">
        Built with {project.tech}
      </span>
      <p className="mt-8 text-xl text-slate-600 leading-relaxed">{project.desc}</p>
    </div>
  );
}

export default ProjectDetail;