import React from 'react';
import {
  DrawerCloseButton,
  DrawerOverlay,
  Divider,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  DrawerFooter,
  HStack,
  Button,
  Stack,
  Wrap,
} from '@chakra-ui/react';
import {
  IoLogoInstagram,
  IoLogoSoundcloud,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io5';
import { MobileSubNav } from './MobileSubNav';
import { NAV_ITEMS } from './NAV_ITEMS';
import Logo from '../logos/TextLogo';
import { useAddToHomescreenPrompt } from '../../hooks/useAddToHomescreenPrompt';
import { SocialButtons } from '../SocialButtons';
import CircleLogo from '../logos/CircleLogo';

export const MobileNav = ({
  onClose,
  isOpen,
}: {
  onClose: any;
  isOpen: any;
}) => {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <CircleLogo height={12} width={12} />
            <Divider pt={3} />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={5} align="flex-start">
              {NAV_ITEMS.map((navItem) => (
                <MobileSubNav key={navItem.label} {...navItem} />
              ))}
            </VStack>
          </DrawerBody>
          <Divider />
          <Button
            rounded="none"
            colorScheme="primary"
            size="sm"
            onClick={promptToInstall}
          >
            نصب نسخه PWA
          </Button>
          <DrawerFooter textColor="primary" justifyContent="center">
            <Stack>
              <SocialButtons />
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
