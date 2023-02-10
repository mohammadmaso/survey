import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react';
import { SocialButtons } from '../SocialButtons';

export default function MinimalFooter() {
  return (
    <Box color={useColorModeValue('gray.700', 'gray.200')}>
      {/* <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justifyContent={'center'}
        align={'center'}
      >
        <CircleLogo />
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>خانه</Link>
          <Link href={'#'}>سفرها</Link>

          <Link href={'#'}>پشتیبانی</Link>
        </Stack>
      </Container> */}

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justifyContent={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Wrap>
            <Text fontSize="sm">© تمامی حقوق برای توریار محفوظ است</Text>
          </Wrap>
          <SocialButtons />
        </Container>
      </Box>
    </Box>
  );
}
