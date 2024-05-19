import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutesName } from '@/components/Routes/libs/constants/Routes.enum';
import { AuthContext } from '@/components/context/authContext';

import Logo from '../../assets/logo.png';

export const Header = () => {
  const naviage = useNavigate();

  const { user } = useContext(AuthContext);

  return (
    <div className='h-[100px] bg-[rgb(50,72,107)] flex px-2 justify-between items-center'>
      <div className='flex gap-4 items-center'>
        <div className='flex  items-center'>
          <img src={Logo} alt='' className='h-[90px]' />
          <div className='text-[white] text-[1.5em]'>CityDonut</div>
        </div>
        <div onClick={() => naviage(RoutesName.LIST_PROJECTS)} className='text-[#918888]'>
          Проекти
        </div>
        <div onClick={() => naviage(RoutesName.CREATE_PROJECT)} className='text-[#918888]'>
          Подати проект
        </div>
        <div onClick={() => naviage(RoutesName.MY_PROJECTS)} className='text-[#918888]'>
          Мої проекти
        </div>
        <div onClick={() => naviage(RoutesName.MY_DONTATS)} className='text-[#918888]'>
          Мої донати
        </div>
        <div className='text-[#918888]'>FAQ</div>
      </div>
      <div className='pr-5 text-[#918888]'>
        <div>
          {user?.firstName} {user?.lastName}
        </div>
      </div>
    </div>
  );
};
