import { Grid, Wrap, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

interface Props {}

export const SocialButtons = (props: Props) => {
  return (
    <Wrap cursor="pointer">
      <Link href="http://twitter.com/mytripper_ir">
        <Icon as={AiOutlineTwitter} color="gray.500" />
      </Link>
      {/* <AiOutlineWhatsApp /> */}
      <Link href="https://t.me/mytripper">
        <Icon as={FaTelegram} color="gray.500" />
      </Link>
      <Link href="http://instagram.com/mytripper.ir">
        <Icon as={AiOutlineInstagram} color="gray.500" />
      </Link>
    </Wrap>
  );
};
