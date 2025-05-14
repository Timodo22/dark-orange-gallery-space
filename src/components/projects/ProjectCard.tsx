
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg hover-scale"
    >
      <Link to={`/projecten/${project.category}/${project.slug}`} className="block">
        <div className="aspect-square md:aspect-[4/3] overflow-hidden bg-gray-800">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="flex items-center mb-2">
            <span className="text-xs text-orange uppercase tracking-wide">{project.category}</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-xs text-gray-300">{project.year}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-medium text-white mb-1">{project.title}</h3>
          <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
