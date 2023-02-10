import {
  Box,
  Button,
  CloseButton,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import * as React from 'react';
import { useAddToHomescreenPrompt } from '../hooks/useAddToHomescreenPrompt';

export function PWAInstallPrompt() {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });
  const hide = () => setVisibleState(false);
  const { isOpen, onToggle } = useDisclosure();

  const cancle = () => {
    localStorage.setItem('pwa-prompt-showed', '1');
    setVisibleState(false);
  };

  React.useEffect(() => {
    const isCancled = localStorage.getItem('pwa-prompt-showed');
    if (prompt) {
      if (isCancled != '1') {
        setVisibleState(true);
      }
    }
  }, [prompt]);

  if (!isVisible) {
    return <div />;
  }
  if (isMobile) {
    return (
      <>
        {/* <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}> */}
        <Box
          roundedTop="md"
          bgColor="primary.600"
          boxShadow="inner"
          bottom="0"
          zIndex="overlay"
          position="fixed"
          //   h="26vh"
          w="full"
          p="3"
        >
          <Stack justifyContent="center" textAlign="center" textColor="white">
            <CloseButton mb="-40px" onClick={cancle} />
            <Image src="/CircleLogo.svg" h="5rem" alt="Logo" onClick={cancle} />
            <Heading fontWeight="bold" fontSize="lg">
              تجربه سریع‌تر و امکان مرور آفلاین
            </Heading>
            <Text fontWeight="light" fontSize="lg">
              با نصب نسخه وب پرس و جو
            </Text>
            <Button
              onClick={promptToInstall}
              variant="outline"
              fontWeight="light"
              rounded="full"
            >
              نصب سریع
            </Button>
          </Stack>
        </Box>
        {/* </Slide> */}
      </>
    );
  } else {
    return null;
  }
}
