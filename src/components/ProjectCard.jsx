import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="block">
      <div className="group bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-sm hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-500 cursor-pointer">
        
        {/* Project Image Container */}
        <div className="h-64 rounded-[2rem] overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-black text-blue-700 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
              {project.tech}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6 px-2">
          <h4 className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
            {project.name}
          </h4>
          <p className="text-slate-500 mt-2 text-sm font-medium leading-relaxed">
            {project.desc}
          </p>
        </div>

      </div>
    </Link>
  );
}

export default ProjectCard; // This MUST be here!