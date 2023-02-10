import React from 'react';

import { Button, Stack } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const NavButtons = () => {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justifyContent={'flex-end'}
      direction={'row'}
      spacing={3}
    >
      <Button as={'a'} fontSize={'sm'} fontWeight={500} variant={'link'}>
        <Link to="/auth/login">ورود</Link>
      </Button>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        colorScheme="primary"
        rounded="3xl"
        size="sm"
      >
        <Link to="/auth/register">ثبت‌‌نام</Link>
      </Button>
    </Stack>
  );
};

export default NavButtons;
