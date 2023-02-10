import { Spinner } from '@chakra-ui/react';

type Props = {};

const LoadingWord = (props: Props) => {
  return (
    <>
      {/* <Lottie
        options={{
          animationData: animationData,
          autoplay: true,
          loop: true,
        }}
        height={200}
        width={200}
      /> */}
      <Spinner color="pink" />
    </>
  );
};

export default LoadingWord;
