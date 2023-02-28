import { useQueryClient } from 'react-query';

const CategoresPage = () => {
  const queryClient = useQueryClient();
  console.log(queryClient.getQueryData('categories'));

  return <div></div>;
};

export default CategoresPage;
