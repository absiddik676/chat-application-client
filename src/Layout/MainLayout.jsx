import React from 'react';

const MainLayout = () => {
    return (
        <div className='grid grid-cols-10'>
            <div>side contented</div>
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