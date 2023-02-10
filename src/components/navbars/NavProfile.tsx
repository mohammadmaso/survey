import { AtSignIcon, ChevronDownIcon, MoonIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Wrap,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { FiFeather, FiLogOut, FiUser } from 'react-icons/fi';

import { MdCardTravel } from 'react-icons/md';

interface Props {
  signOut: () => void;
  user: any;
  minimal?: boolean;
}

const NavProfile = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Wrap>
      {/* <Menu>
        <MenuButton as={Button} bgColor="transparent" size="sm" rounded="full">
          <Wrap spacing="0.5">
            <FiBell />
          </Wrap>
        </MenuButton>
      </Menu> */}
      <Menu>
        <MenuButton
          as={Button}
          bgColor="transparent"
          leftIcon={<ChevronDownIcon />}
          size="sm"
          rounded="full"
        >
          {props.minimal ? (
            <FiUser />
          ) : (
            <Flex direction="row-reverse" alignItems="center">
              <Avatar
                shadow="lg"
                size="md"
                h="8"
                w="8"
                // name={data.me.firstName + data.me.lastName}
                src={props.user?.avatar}
              />
              {/* <Text
                display={{ base: 'none', md: 'unset' }}
                fontSize={{ base: '12px', md: '14px' }}
                pl={2}
              >
                {props.user?.username}
              </Text> */}
            </Flex>
          )}
        </MenuButton>
        <MenuList>
          <Link to="/me">
            <MenuItem fontSize="sm" icon={<AtSignIcon />} fontWeight="light">
              {props.user?.username}
            </MenuItem>
          </Link>
          <Divider />
          <Link to="/travelogues/new/init">
            <MenuItem fontSize="sm" fontWeight="semibold" icon={<FiFeather />}>
              سفرنامه جدید
            </MenuItem>
          </Link>
          {/* <Link href="/wizard/" passHref>
            <MenuItem icon={<BiListPlus />}>برنامه‌ریزی سفر</MenuItem>
          </Link> */}

          {/* <MenuItem icon={<FiUser />}>پروفایل من</MenuItem> */}

          <Link to="/me">
            <MenuItem
              fontSize="sm"
              fontWeight="semibold"
              icon={<MdCardTravel />}
            >
              تورهای من
            </MenuItem>
          </Link>
          <MenuItem
            fontSize="sm"
            fontWeight="semibold"
            onClick={toggleColorMode}
            icon={<MoonIcon />}
          >
            حالت شب
          </MenuItem>
          <MenuItem
            fontSize="sm"
            fontWeight="semibold"
            onClick={props.signOut}
            icon={<FiLogOut />}
          >
            خروج
          </MenuItem>
        </MenuList>
      </Menu>
    </Wrap>
  );
};

export default NavProfile;
