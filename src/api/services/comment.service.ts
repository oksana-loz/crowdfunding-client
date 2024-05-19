import { $baseAPI } from '@/api/axios';

class CommentService {
  createComment(projectId: number, text: string) {
    return $baseAPI.post<any>('/comment', { projectId, text });
  }

  getAllProjectComments(projectId: number) {
    return $baseAPI.get<any>('/comment', { params: { projectId } });
  }
}

export const commentService = new CommentService();
