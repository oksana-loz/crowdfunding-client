import { FC, useState } from 'react';

import { projectService } from '@/api/services/project.service';

import './index.css';

const DonateModal: FC<any> = ({ isVisible = false, onClose, projectId }) => {
  const [amount, setAmount] = useState('');

  if (!isVisible) return null;

  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  const handleDonate = async (e: any) => {
    e.preventDefault();
    try {
      await projectService.donateToProject(projectId, amount);

      onClose();
    } catch (error) {}
  };

  return (
    <div className='bg-white fixed inset-0 bg-opacity-75 flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Допомогти проекту</h2>

        <form onSubmit={handleDonate} className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Сума</label>
            <input
              type='number'
              name='amount'
              value={amount}
              onChange={handleAmountChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
          <div className='flex gap-2'>
            <div className='flex-grow'>
              <button
                type='submit'
                className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Донат
              </button>
            </div>
            <div className='flex-grow' onClick={onClose}>
              <button className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#eb5f5f]  focus:outline-none focus:ring-2 focus:ring-offset-2 '>
                Відмінити
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonateModal;
