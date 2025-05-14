
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProjectGrid from '@/components/projects/ProjectGrid';
import CategoryTabs from '@/components/projects/CategoryTabs';
import { projects, getProjectsByCategory } from '@/data/projects';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const { category } = useParams<{ category?: string }>();
  
  const categoryProjects = category 
    ? getProjectsByCategory(category)
    : projects;
  
  const pageTitle = category 
    ? `${category.charAt(0).toUpperCase() + category.slice(1)} Projecten` 
    : 'Alle Projecten';
  
  const pageDescription = category 
    ? `Ontdek onze portfolio van ${category} interieurprojecten`
    : 'Bekijk ons complete portfolio van interieurprojecten';

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{pageTitle}</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">{pageDescription}</p>
          </motion.div>

          <div className="mb-8">
            <CategoryTabs />
          </div>

          {categoryProjects.length > 0 ? (
            <ProjectGrid projects={categoryProjects} />
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">Geen projecten gevonden in deze categorie.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
