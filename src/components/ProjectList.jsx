import ProjectCard from './ProjectCard';

function ProjectList({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.map((proj) => (
        <ProjectCard key={proj.id} project={proj} />
      ))}
      {data.length === 0 && (
        <div className="col-span-full py-20 text-center text-slate-400">
          No projects found. Try a different search!
        </div>
      )}
    </div>
  );
}
export default ProjectList;