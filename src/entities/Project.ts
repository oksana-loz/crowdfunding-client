import { User } from 'entities/User';

export type Project = {
  id: number;
  name: string;
  description: string;
  price: string;
  sumDonated: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  user: User;
  donations: any[];
};
