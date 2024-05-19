import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Project } from 'entities/Project';

import { projectService } from '@/api/services/project.service';
import DonateModal from '@/components/DonateModal/DonateModal';
import { Header } from '@/components/Header/Header';
import { RoutesName } from '@/components/Routes/libs/constants/Routes.enum';

export const getDonationAmount = (project: Project) => {
  return project.donations.reduce((acc, donation) => acc + +donation.amount, 0);
};

export const ListProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState<number | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await projectService.getProjects();
      setProjects(response.data);
      setFilteredProjects(response.data);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const filterProjects = () => {
      const filtered = projects.filter((project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProjects(filtered);
    };

    filterProjects();
  }, [searchQuery, projects]);

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className='flex justify-center mt-7'>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Пошук проектів'
          className='mb-8 px-8 w-[70%] py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
        />
      </div>
      <div className='px-8'>
        <div className='flex gap-5 flex-wrap'>
          {[...filteredProjects].map((project) => {
            return (
              <div
                key={project.id}
                className='min-w-[300px] min-h-[300px] flex flex-col items-center border-2 border-solid border-[blue] rounded-sm p-4 justify-between'
              >
                <div
                  onClick={() => navigate(RoutesName.PROJECT_DETAILS + `?projectId=${project.id}`)}
                  className='font-bold'
                >
                  {project.name}
                </div>
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
