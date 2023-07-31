import React, { useState } from 'react';
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BiUser } from "react-icons/bi";
import { FiUsers, FiSettings } from "react-icons/fi";
const AllFriend = () => {
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex);
    const tabStyle = {
        backgroundImage:'linear-gradient(to top right, #f43f5e, #f56565)',
        color: 'white',
    };
    return (
        <div>
            <div className="flex items-center space-x-2">
                <div className="relative">
                    <input
                        type="text"
                        className="w-64 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-300 focus:outline-none"
                        placeholder="Search people or message"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <PiMagnifyingGlassBold className="w-5 h-5 text-gray-400" />
                    </div>
                </div>
                {/* Add more components or logic here if needed */}
            </div>
            <Tabs className='mt-4' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='grid grid-cols-3'>
                    <Tab className='w-12 flex justify-center items-center h-10 rounded-lg' style={tabIndex === 0 ? tabStyle : null} ><BiUser size={24} /></Tab>
                    <Tab className='w-12 flex justify-center items-center h-10 rounded-lg' style={tabIndex === 1 ? tabStyle : null}><FiUsers size={24} /></Tab>
                    <Tab className='w-12 flex justify-center items-center h-10 rounded-lg' style={tabIndex === 2 ? tabStyle : null}><FiSettings size={24} /></Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AllFriend;