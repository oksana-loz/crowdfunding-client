import { useNavigate } from 'react-router-dom';

import { Header } from '@/components/Header/Header';
import { RoutesName } from '@/components/Routes/libs/constants/Routes.enum';

import './index.css';

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className='main px-7 h-[calc(100vh-100px)]'>
        <div className='pt-[150px]'>
          <div className='max-w-[620px] text-[2em] bg-white p-[20px]'>
            CityDonut - це краудфандингова платформа для міських ініціатив. Кожен може допомогти
            своєму місту.
          </div>

          <div className='mt-[100px] flex justify-end'>
            <div className='flex gap-6'>
              <div
                onClick={() => navigate(RoutesName.CREATE_PROJECT)}
                className='w-[190px] h-[55px] bg-[#c81386] text-white flex justify-center items-center text-[1.1em]'
              >
                Подати проект
              </div>
              <div
                onClick={() => navigate(RoutesName.LIST_PROJECTS)}
                className='w-[190px] h-[55px] bg-[#c81386] text-white justify-center items-center flex text-[1.1em]'
              >
                Допомогти
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
