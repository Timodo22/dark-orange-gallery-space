
import { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

interface Photo {
  id: string;
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  projectTitle: string;
}

const PhotoGallery = ({ photos, projectTitle }: PhotoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (photo: Photo) => {
    setSelectedImage(photo);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  // Create different layouts for photos for visual interest
  const mainImage = photos[0];
  const gridPhotos = photos.slice(1);

  return (
    <div className="space-y-6">
      {/* Main/hero image */}
      {mainImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full aspect-[21/9] relative rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openLightbox(mainImage)}
        >
          <img 
            src={mainImage.src} 
            alt={mainImage.alt || projectTitle} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all" />
        </motion.div>
      )}

      {/* Grid layout for remaining images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gridPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-lg overflow-hidden cursor-pointer
              ${index % 5 === 0 ? 'md:col-span-2' : ''}
              ${index % 7 === 3 ? 'lg:row-span-2' : ''}`}
            onClick={() => openLightbox(photo)}
          >
            <div className="aspect-square">
              <img 
                src={photo.src} 
                alt={photo.alt || `${projectTitle} - Foto ${index + 2}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-20 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image lightbox dialog */}
      <Dialog open={isOpen} onOpenChange={closeLightbox}>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <button 
            className="absolute top-4 right-4 text-white text-2xl z-10"
            onClick={closeLightbox}
          >
            ×
          </button>
          
          {selectedImage && (
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt || projectTitle}
              className="max-w-full max-h-[90vh] object-contain"
            />
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default PhotoGallery;
