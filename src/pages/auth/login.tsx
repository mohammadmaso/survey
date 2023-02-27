import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Logo } from '../../components/Logo';
// import { OAuthButtonGroup } from '../../components/OAuthButtonGroup'
import { PasswordField } from '../../components/PasswordField';

export const App = () => (
  <Container
    maxW="lg"
    py={{ base: '12', md: '24' }}
    px={{ base: '0', sm: '8' }}
  >
    <Stack spacing="8">
      <Stack spacing="6">
        <Logo />
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={{ base: 'xs', md: 'sm' }}>ور.د به حساب کاربری</Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">حساب ندارید؟</Text>
            <Button variant="link" colorScheme="blue">
              ثبت نام
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg-surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">ایمیل</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>مرا به خاطر بسپار</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              پسورد را فراموش کرده‌اید؟
            </Button>
          </HStack>
          {/* <Stack spacing="6">
            <Button variant="primary">ورود</Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup />
          </Stack> */}
        </Stack>
      </Box>
    </Stack>
  </Container>
);
