
import { useState } from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

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
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedImage(photo);
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (!photos || photos.length === 0) return;
    
    let newIndex = selectedIndex;
    
    if (direction === 'next') {
      newIndex = (selectedIndex + 1) % photos.length;
    } else {
      newIndex = selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1;
    }
    
    setSelectedIndex(newIndex);
    setSelectedImage(photos[newIndex]);
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
          onClick={() => openLightbox(mainImage, 0)}
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
            onClick={() => openLightbox(photo, index + 1)}
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

      {/* Photo lightbox with navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <Button 
            variant="ghost" 
            className="absolute top-4 right-4 text-white hover:bg-black/20 rounded-full p-2 z-50"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 rounded-full p-2 z-50"
            onClick={() => navigateImage('prev')}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/20 rounded-full p-2 z-50"
            onClick={() => navigateImage('next')}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
          
          {selectedImage && (
            <motion.div 
              key={selectedImage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full max-w-6xl flex items-center justify-center px-10"
            >
              <img 
                src={selectedImage.src}
                alt={selectedImage.alt || projectTitle}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          )}
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                className={cn(
                  "w-2 h-2 rounded-full transition-all", 
                  index === selectedIndex ? "bg-white scale-125" : "bg-gray-500 hover:bg-gray-300"
                )}
                onClick={() => {
                  setSelectedIndex(index);
                  setSelectedImage(photos[index]);
                }}
                aria-label={`Ga naar foto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
