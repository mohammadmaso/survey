import {
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Wrap,
  Box,
  Link as ChakraLink,
  useColorModeValue,
  useDisclosure,
  HStack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { NavItem } from './NavItem';

export const MobileSubNav = ({
  label,
  children,
  href,
  icon,
  badge,
}: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle} width="full">
      <Flex
        py={2}
        as={ChakraLink}
        justifyContent={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Link to={href ?? '#'}>
          <Wrap align="center">
            {icon}

            <Text
              pr={3}
              fontWeight={600}
              color={useColorModeValue('gray.600', 'gray.200')}
            >
              {label}
            </Text>
            {badge}
          </Wrap>
        </Link>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <ChakraLink width={'full'} key={child.label} href={child.href}>
                <Wrap align="center" py={2} spacing="4" width={'full'}>
                  {child.icon}
                  {child.label}
                  {child.badge}
                </Wrap>
              </ChakraLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
