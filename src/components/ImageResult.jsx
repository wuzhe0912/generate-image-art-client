import ImageCard from './ImageCard';
import Skeleton from './Skeleton';

const ImageResult = ({ listImages, isLoading }) => {
  return (
    <section className='container max-w-5xl mx-auto px-2 py-6'>
      <div className='grid md:grid-cols-2 gap-4'>
        {isLoading ? (
          <Skeleton item={2} />
        ) : (
          listImages.map((image, index) => (
            <ImageCard key={index} image={image.url} />
          ))
        )}
      </div>
    </section>
  );
};

export default ImageResult;
