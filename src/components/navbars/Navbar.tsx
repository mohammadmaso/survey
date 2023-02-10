import React, { ReactElement, useState } from 'react';

import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useEventListener,
  Wrap,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../logos/TextLogo';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
// import useIsSignedIn from '../../hooks/useIsSignedIn';

import { HiOutlineLightBulb } from 'react-icons/hi';

import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import NavProfile from './NavProfile';
import NavButtons from './NavButtons';
import CircleLogo from '../logos/CircleLogo';
import { Link } from 'react-router-dom';

const NavBar = (props: any) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [stickyNav, setStickyNav] = useState(false);
  // const { isSignedIn } = useIsSignedIn();

  const handleScroll = () => {
    if (window.pageYOffset > 40) {
      if (!stickyNav) {
        setStickyNav(true);
      }
    } else {
      if (stickyNav) {
        setStickyNav(false);
      }
    }
  };
  useEventListener('scroll', handleScroll);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('rgba(255, 255, 255, 1)', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        // style={{
        //   backdropFilter: 'saturate(180%) blur(5px)',
        // }}
        // h={stickyNav ? '1rem' : '3rem'}
        py={stickyNav ? '1' : '4'}
        px={{ base: 4, sm: 4, md: 120, lg: 120 }}
        borderBottom={stickyNav ? 1 : 0}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        justifyContent="space-around"
        position="fixed"
        w="100%"
        shadow={stickyNav ? 'lg' : 'none'}
        zIndex={100}
      >
        <Flex
          flex={{ base: 'flex', md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          w="8rem"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            size="sm"
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justifyContent={{ base: 'center', md: 'start' }}
        >
          <Link to="/">
            <Box
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
            >
              {stickyNav ? (
                <CircleLogo
                  height={stickyNav ? 30 : 30}
                  width={stickyNav ? 100 : 100}
                />
              ) : (
                <Logo
                  height={stickyNav ? 30 : 30}
                  width={stickyNav ? 100 : 100}
                />
              )}
            </Box>
          </Link>

          <Flex
            align="center"
            justifyContent="space-between"
            wrap="wrap"
            display={{ base: 'none', md: 'flex' }}
            mr={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex justifyContent="flex-end" w="8rem">
          {props.children}
        </Flex>
      </Flex>

      <MobileNav isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default NavBar;
