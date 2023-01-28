import { PhotoIcon } from '@heroicons/react/24/outline';

const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map((index) => (
    <div key={index} className='animate-pulse w-full shadow-xl'>
      <div className='flex items-center justify-center w-full h-80 bg-gray-300 rounded'>
        <PhotoIcon className='w-12' />
      </div>
    </div>
  ));
};

export default Skeleton;
