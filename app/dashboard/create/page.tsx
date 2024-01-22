import { createPostAction } from '@/lib/actions';
import { FormPost } from './components/form';

const CreatePage = () => {
  return (
    <div>
      <FormPost createPostAction={createPostAction} />
    </div>
  );
};

export default CreatePage;
