import React from 'react';
import {
  Box,
  Flex,
  Stack,
  Text,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react';
import { DesktopSubNav } from './DesktopSubNav';
import { NAV_ITEMS } from './NAV_ITEMS';
import { Link } from 'react-router-dom';

export const DesktopNav = (props: any) => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-end'}>
            <PopoverTrigger>
              <Wrap align="center">
                {navItem.icon}

                <Link to={navItem.href ?? '#'}>
                  <Text
                    cursor="pointer"
                    fontSize={'sm'}
                    fontWeight={600}
                    color="primary"
                  >
                    {navItem.label}
                  </Text>
                </Link>
                {navItem.badge}
              </Wrap>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                p={4}
                rounded={'md'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
