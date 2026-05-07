function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300">
      <div className="h-56 overflow-hidden">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase tracking-tighter">
          {project.tech}
        </span>
        <h4 className="text-xl font-bold mt-2 text-slate-800">{project.name}</h4>
        <p className="text-slate-500 mt-2 text-sm leading-relaxed">{project.desc}</p>
      </div>
    </div>
  );
}
export default ProjectCard;