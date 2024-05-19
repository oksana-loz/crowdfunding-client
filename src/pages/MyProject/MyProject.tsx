import { useEffect, useState } from 'react';

import { Project } from 'entities/Project';

import { projectService } from '@/api/services/project.service';
import DonateModal from '@/components/DonateModal/DonateModal';
import { Header } from '@/components/Header/Header';

const getDonationAmount = (project: Project) => {
  return project.donations.reduce((acc, donation) => acc + +donation.amount, 0);
};

export const MyProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState<number | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await projectService.getMyProjects();
      console.log('🚀 ~ fetchProjects ~ response:', response);
      setProjects(response.data);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Header />

      <div className='px-8 mt-4'>
        <div className='flex gap-5'>
          {projects?.map((project) => {
            return (
              <div
                key={project.id}
                className='w-[300px] flex flex-col items-center border-2 border-solid border-[blue] rounded-sm p-4'
              >
                <div className='font-bold'>{project.name}</div>
                <div>Категорія: {project.name}</div>
                <div className='mt-5'>
                  Створено користувачем: {project.user.firstName + ' ' + project.user.lastName}
                </div>
                <div className='bg-[gray] rounded-md w-[80%] text-center mt-4'>
                  {getDonationAmount(project)} з {project.price}
                </div>
                <div
                  className='bg-[green] mt-4 py-2 px-4 rounded-lg text-white cursor-pointer'
                  onClick={() => {
                    setCurrentProjectId(project.id);
                    setIsModalVisible(true);
                  }}
                >
                  Підтримати
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <DonateModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        projectId={currentProjectId}
      />
    </div>
  );
};
