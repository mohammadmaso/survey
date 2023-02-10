import React from 'react';
import {
  Box,
  Text,
  useColorMode,
  useColorModeValue,
  Image,
  Img,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import Image from 'next/image';

export default function TextLogo(props: any) {
  return (
    <Box {...props} cursor="pointer">
      <Link to="/">
        <Img
          src={useColorModeValue('/HeaderLogo.svg', '/HeaderLogo-light.svg')}
          height={props.height ?? 30}
          width={props.width ?? 100}
          // layout="intrinsic"
          alt="tripper-logo"
        />
      </Link>
    </Box>
  );
}
