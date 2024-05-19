import { $baseAPI } from '@/api/axios';

class ProjectService {
  createProject(formData: any) {
    return $baseAPI.post<any>('/project', formData);
  }

  getProjects() {
    return $baseAPI.get<any>('/project');
  }

  getProjectById(id: string) {
    return $baseAPI.get<any>('/project/' + id);
  }

  getMyProjects() {
    return $baseAPI.get<any>('/project/my');
  }

  donateToProject(projectId: number, amount: string) {
    return $baseAPI.post<any>('/project/donations', { projectId, amount });
  }

  getDonations() {
    return $baseAPI.get<any>('/project/donations/my');
  }
}

export const projectService = new ProjectService();
