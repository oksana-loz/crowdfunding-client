import { useEffect, useState } from 'react';

import { Project } from 'entities/Project';

import { commentService } from '@/api/services/comment.service';
import { projectService } from '@/api/services/project.service';
import { Header } from '@/components/Header/Header';
import { getDonationAmount } from '@/pages/ListProjects/ListProjects';

interface Comment {
  id: number;
  text: string;
  createdAt: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export const ProjectDetails = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [project, setProject] = useState<Project | null>(null);

  const projectId = new URLSearchParams(window.location.search).get('projectId');

  useEffect(() => {
    const func = async () => {
      const res = await projectService.getProjectById(projectId as string);

      setProject(res.data);
    };

    func();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await commentService.getAllProjectComments(Number(projectId));
        setComments(response.data);
      } catch (error) {}
    };

    fetchComments();
  }, []);

  const handleCommentSubmit = async () => {
    setLoading(true);

    try {
      await commentService.createComment(Number(projectId), newComment);
      const response = await commentService.getAllProjectComments(Number(projectId));
      setComments(response.data);
      setNewComment('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className='py-4 px-10'>
        <div>
          <h1 className='text-2xl font-semibold'>Деталі проекту</h1>
          <p className='text-gray-500'>Назва проекту: {project?.name}</p>
          <p className='text-gray-500'>Опис проекту: {project?.description}</p>
          <p className='text-gray-500'>Категорія: {project?.category}</p>
          {project && (
            <p className='text-gray-500'>
              Зібрано: {getDonationAmount(project as Project)} з {project?.price}
            </p>
          )}
        </div>

        <div className='mt-4'>
          <h2 className='text-lg font-semibold'>Коментарі</h2>

          <div className='mt-2 max-w-[500px]'>
            {comments.map((comment) => (
              <div key={comment.id} className='mb-4 border-[#7a716c] border-b-[3px] pb-2'>
                <p className='font-semibold'>
                  {comment.user.firstName} {comment.user.lastName}
                </p>
                <p>{comment.text}</p>
                <p className='text-sm text-gray-500'>
                  {new Date(comment.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-4'>
          <h2 className='text-lg font-semibold'>Залишити коментар</h2>
          <textarea
            className='w-[50%] border rounded p-2 mt-2'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <br />
          <button
            className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'
            onClick={handleCommentSubmit}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Надіслати'}
          </button>
        </div>
      </div>
    </>
  );
};
