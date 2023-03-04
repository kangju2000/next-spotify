import { css } from '@emotion/react';
import { RotatingLines } from 'react-loader-spinner';
import useIntersect from 'hooks/useIntersect';

interface TargetDivProps {
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined; // undefined가 나오는 이유를 찾지 못함
}

const TargetDiv = ({ fetchNextPage, isFetchingNextPage, hasNextPage }: TargetDivProps) => {
  const targetRef = useIntersect<HTMLDivElement>((entry, observer) => {
    if (!hasNextPage) return;

    fetchNextPage();

    observer.unobserve(entry.target);
  }, 0.7);

  return (
    <>
      <div
        ref={targetRef}
        css={css`
          height: 200px;
        `}
      />

      {isFetchingNextPage && (
        <div
          css={css`
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 999;
          `}
        >
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="48"
            visible={true}
          />
        </div>
      )}
    </>
  );
};

export default TargetDiv;
