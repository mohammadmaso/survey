import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Icon,
  Link as ChakraLink,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react';
import { NavItem } from './NavItem';
import { Link } from 'react-router-dom';

export const DesktopSubNav = ({
  label,
  href,
  subLabel,
  icon,
  badge,
}: NavItem) => {
  return (
    <ChakraLink
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('primary.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        {icon}
        <Box>
          <Wrap align="center">
            <Link to={href ?? '#'}>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: 'primary.400' }}
                fontWeight={500}
              >
                {label}
              </Text>
            </Link>{' '}
            {badge}
          </Wrap>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justifyContent={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'primary.400'} w={5} h={5} as={ChevronLeftIcon} />
        </Flex>
      </Stack>
    </ChakraLink>
  );
};
