import { useState } from 'react';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Wrap,
} from '@chakra-ui/react';
// import useIsSignedIn from '../../hooks/useIsSignedIn';
import Logo from '../logos/TextLogo';

import { FiBookmark } from 'react-icons/fi';
import { MobileNav } from './MobileNav';
import WizardNavIcons from './WizardNavIcons';
import { Link } from 'react-router-dom';

const MinimalNavBar = (props: any) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [stickyNav, setStickyNav] = useState(false);
  // const { isSignedIn } = useIsSignedIn();

  // const handleScroll = () => {
  //   if (window.pageYOffset > 200) {
  //     if (!stickyNav) {
  //       setStickyNav(true);
  //     }
  //   } else {
  //     if (stickyNav) {
  //       setStickyNav(false);
  //     }
  //   }
  // };
  // useEventListener('scroll', handleScroll);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'90px'}
        py={{ base: 2 }}
        px={[5, 124, 124]}
        borderBottom={1}
        align={'center'}
        position="fixed"
        justifyContent="space-between"
        w="100%"
      >
        <Wrap>
          <Flex ml={{ base: -2 }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          {props.children}
        </Wrap>

        <Box
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontFamily={'heading'}
          color={useColorModeValue('gray.800', 'white')}
        >
          <Stack justifyContent="center">
            <Link to="/">
              <Logo height={100} width={180} />
            </Link>
            <WizardNavIcons selected={props.selected} />
          </Stack>
        </Box>

        <Button
          colorScheme="primary"
          size="sm"
          fontWeight="md"
          rounded="full"
          leftIcon={<FiBookmark />}
        >
          ذخیره تور
        </Button>
      </Flex>
      <MobileNav isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default MinimalNavBar;
