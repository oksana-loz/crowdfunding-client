import { useEffect, useState } from 'react';

import { Donat } from 'entities/Donat';

import { projectService } from '@/api/services/project.service';
import { Header } from '@/components/Header/Header';

export const MyDontats = () => {
  const [donats, setDonats] = useState<Donat[]>([]);

  useEffect(() => {
    const func = async () => {
      const res = await projectService.getDonations();
      setDonats(res.data);
    };

    func();
  }, []);

  return (
    <div>
      <Header />
      <div className='px-2 py-4 flex flex-col justify-center items-center'>
        <h1 className='text-[2em] font-bold text-center'>Історія донатів</h1>
        {donats.map((donat) => {
          return (
            <div className='w-[700px] flex p-4 border-b-2 border-solid border-[#79797c] rounded-sm gap-5 mt-3 justify-center'>
              <div>
                <span className='font-bold'>Сума:</span> {donat.amount}
              </div>
              <div>
                <span className='font-bold'>Назва проекту:</span> {donat.project.name}
              </div>
              <div>
                <span className='font-bold'>Дата:</span>{' '}
                {new Date(donat.createdAt).toLocaleDateString()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
