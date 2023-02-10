import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type Props = {
  height?: number;
  width?: number;
};
export default function CircleLogo(props: Props) {
  return (
    <Link to={'/'}>
      <Box {...props} cursor="pointer">
        <Image
          src={'/CircleLogo.svg'}
          height={props.height ?? 20}
          width={props.width ?? 20}
          alt="Logo"
        />
      </Box>
    </Link>
  );
}
