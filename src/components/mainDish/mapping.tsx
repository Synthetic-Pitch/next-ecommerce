'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Structure from './structure';


const Mapping: React.FC = () => { 
  const [data, setData] = useState<{ name: string }[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api');
      setData(response.data);
    };
    fetchData();
  }, []);
  
  return (
    <div className="bg-[#a3a3a3] grid grid-cols-2 gap-2">
      {data ? (
        data.map((object, index) => (
          <Structure key={index} DataProp={object} />
        ))
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default Mapping;
