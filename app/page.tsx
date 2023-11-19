'use client';
import WordSlider from '@/component/WordSlider';

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex text-5xl overflow-hidden">
        <p className="mr-2">Simplified</p>
        <div className="w-60 text-center text-5xl text-blue-500">
          <WordSlider />
        </div>
        <p className="mr-2">for your business</p>
      </div>
    </div>
  );
};

export default Home;

