import { notifications } from '@mantine/notifications';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postPlaybackQueue } from 'api/me';

export const usePostPlaybackQueue = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postPlaybackQueue, {
    onSuccess: () => {
      queryClient.invalidateQueries(['queue']);
      notifications.show({
        message: '재생목록에 추가되었습니다.',
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { mutate };
};
