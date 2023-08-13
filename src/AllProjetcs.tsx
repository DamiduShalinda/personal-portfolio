import React from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import VerticalSlider from './components/vertical-slider/VerticalSlider';
import { BsArrowUpLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AllProjetcs: React.FC = () => {

  return (
    <div className='w-full text-white snap-y snap-mandatory'>
      <ScrollToTopButton/>
      <div className='grid md:grid-cols-3'>
        <div className='fixed pt-40 pl-40'>
          <div className='items-start justify-center flex flex-row'>
            <Link to='/'>
              <BsArrowUpLeft size={100} />
            </Link>
            <p className='text-5xl pl-4'>All Projects</p>
          </div>
            <div>
              <p className='text-lg text-right'>Click on the project to see more</p>
            </div>
        </div>
        <div></div>
        <div className='col-span-2'>
        <VerticalSlider/>
        </div>
      </div>
    </div>
  );
};

export default AllProjetcs;
