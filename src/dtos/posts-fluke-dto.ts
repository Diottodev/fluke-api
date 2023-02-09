class PostsFlukeDTO {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content?: string;
  published?: boolean;
  viewCount?: number;
  author?: string;
  authorId?: never;
}

export default PostsFlukeDTO;
