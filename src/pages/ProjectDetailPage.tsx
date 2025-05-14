
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PhotoGallery from '@/components/projects/PhotoGallery';
import { Button } from '@/components/ui/button';
import { getProjectBySlug, getProjectById } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetailPage = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const navigate = useNavigate();
  
  const project = category && slug ? getProjectBySlug(category, slug) : null;
  
  useEffect(() => {
    if (!project) {
      navigate('/projecten', { replace: true });
    }
  }, [project, navigate]);
  
  if (!project) {
    return null; // Will redirect due to useEffect
  }

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link 
              to={`/projecten/${category}`}
              className="inline-flex items-center text-orange hover:text-orange-light"
            >
              <ArrowLeft size={16} className="mr-2" />
              Terug naar {category?.charAt(0).toUpperCase() + category?.slice(1)}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="mb-2 flex items-center">
                  <span className="text-sm text-orange uppercase tracking-wide">{project.category}</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{project.title}</h1>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                  <Link to="/contact">Contact</Link>
                </Button>
              </div>
            </div>

            <div className="mb-16">
              <PhotoGallery photos={project.photos} projectTitle={project.title} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Projectbeschrijving</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-xl mb-6 text-gray-300">{project.summary}</p>
                  <div className="text-gray-400 whitespace-pre-line">{project.details}</div>
                </div>
              </div>
              
              <div>
                <div className="bg-dark-lighter p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Projectinformatie</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-gray-400">Client</h4>
                      <p className="text-white">{project.client}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm text-gray-400">Locatie</h4>
                      <p className="text-white">{project.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm text-gray-400">Jaar</h4>
                      <p className="text-white">{project.year}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm text-gray-400">Categorie</h4>
                      <p className="text-white capitalize">{project.category}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button className="w-full bg-orange hover:bg-orange-dark text-white">
                      <Link to="/contact">Vergelijkbaar Project Aanvragen</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetailPage;
