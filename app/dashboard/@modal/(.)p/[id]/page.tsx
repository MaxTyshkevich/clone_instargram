import { PostView } from '@/components/post/PostView';
import { getPostById } from '@/lib/fetch-database';
import { revalidatePath } from 'next/cache';
import { notFound } from 'next/navigation';

type ModalPageProps = {
  params: {
    id: string;
  };
};

const ModalPage = async ({ params: { id } }: ModalPageProps) => {
  const post = await getPostById(id);

  if (!post) notFound();
  return <PostView post={post} />;
};

export default ModalPage;
