
import { Link, useLocation } from 'react-router-dom';

const categories = [
  { id: 'woningen', name: 'Woningen' },
  { id: 'kantoren', name: 'Kantoren' },
  { id: 'horeca', name: 'Horeca' },
  { id: 'retail', name: 'Retail' },
  { id: 'openbare-ruimtes', name: 'Openbare Ruimtes' },
];

const CategoryTabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
      <div className="flex space-x-1 min-w-max">
        <Link
          to="/projecten"
          className={`px-4 py-2 text-sm font-medium rounded-md transition
            ${currentPath === '/projecten' ? 
              'bg-orange text-white' : 
              'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
        >
          Alle Projecten
        </Link>
        
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/projecten/${category.id}`}
            className={`px-4 py-2 text-sm font-medium rounded-md transition
              ${currentPath.includes(`/projecten/${category.id}`) ? 
                'bg-orange text-white' : 
                'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
