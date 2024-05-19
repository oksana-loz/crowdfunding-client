import { Project } from 'entities/Project';

export type Donat = {
  id: number;
  amount: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  projectId: number;
  project: Project;
};
