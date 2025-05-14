
import { Project } from "@/types/project";

// Generate project photos for each project
const generatePhotos = (id: string, count = 10) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `photo-${id}-${i + 1}`,
    src: `https://images.unsplash.com/photo-${Math.floor(1500000000 + Math.random() * 300000000)}?auto=format&fit=crop&w=1200&q=80`,
    alt: `Project ${id} - Photo ${i + 1}`,
  }));
};

// Categories
const categories = ["woningen", "kantoren", "horeca", "retail", "openbare-ruimtes"];

// Generate projects for each category
export const projects: Project[] = categories.flatMap((category) => {
  return Array.from({ length: 10 }, (_, i) => {
    const id = `${category}-${i + 1}`;
    const title = `${category.charAt(0).toUpperCase() + category.slice(1)} Project ${i + 1}`;
    const slug = `${category}-project-${i + 1}`;
    
    return {
      id,
      title,
      slug,
      description: `Een prachtig ${category} interieur project met moderne elementen en stijlvolle designaccenten.`,
      category,
      year: `202${Math.floor(Math.random() * 4)}`,
      coverImage: `https://images.unsplash.com/photo-${Math.floor(1500000000 + Math.random() * 300000000)}?auto=format&fit=crop&w=800&q=80`,
      photos: generatePhotos(id),
      client: `${category.charAt(0).toUpperCase() + category.slice(1)} Client ${i + 1}`,
      location: ["Amsterdam", "Rotterdam", "Utrecht", "Den Haag", "Groningen"][Math.floor(Math.random() * 5)],
      summary: `Dit ${category} project combineert functionaliteit en esthetiek op een unieke manier. Met zorgvuldig gekozen materialen en een doordacht ontwerp hebben we een ruimte gecreëerd die perfect aansluit bij de wensen en behoeften van de klant.`,
      details: `
        Ons team heeft samengewerkt met de klant om een interieur te creëren dat zowel praktisch als visueel aantrekkelijk is. Door het gebruik van hoogwaardige materialen, slimme ruimtelijke indeling en unieke designelementen hebben we een ruimte gerealiseerd die perfect past bij de functie en stijl van dit ${category} project.
        
        Bijzondere aandacht is besteed aan de verlichting, die zowel functioneel als sfeerbepalend is. De kleurencombinaties en texturen zijn zorgvuldig geselecteerd om een harmonieus geheel te vormen. Duurzaamheid speelde ook een belangrijke rol in het ontwerp, met energiezuinige oplossingen en milieuvriendelijke materialen waar mogelijk.
      `
    };
  });
});

// Function to get projects by category
export const getProjectsByCategory = (category: string) => {
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
};

// Function to get a project by slug
export const getProjectBySlug = (category: string, slug: string) => {
  return projects.find(project => project.category === category && project.slug === slug);
};

// Function to get a project by ID
export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};

// Function to get random featured projects
export const getFeaturedProjects = (count = 6) => {
  const shuffled = [...projects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Function to get latest projects
export const getLatestProjects = (count = 6) => {
  return [...projects]
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, count);
};
