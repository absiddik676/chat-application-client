import React from 'react';
import SideContent from '../pages/SideContante/SideContent';

const MainLayout = () => {
    return (
        <div className='grid grid-cols-10'>
            <div><SideContent/></div>
            <div className='col-span-9'>
                main contented
                <div className='grid grid-cols-4'>
                    <div >all friend</div>
                    <div className='col-span-2'>chat box </div>
                    <div>friend about </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;