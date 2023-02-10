import {
  Box,
  Container,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react';
import CircleLogo from '../logos/CircleLogo';
import { SocialButtons } from '../SocialButtons';

let year = new Date().toLocaleDateString('fa-IR', { year: 'numeric' });

const PayIRTrustLogo = () => {
  const inputs = {
    id: 'payir-trust-script',
    src: 'https://cdn.pay.ir/js/trust-logo.js',
    dataId: '208011',
    dataLogo: '1',
  };
  function PayirTrust() {
    window.open(
      'https://pay.ir/trust/' + inputs.dataId,
      '',
      'scrollbars=yes, width=500, height=650, top=150, left=300'
    );
    return;
  }

  return (
    <Icon
      width="47.3"
      height="30"
      viewBox="0 0 47.3 22.005"
      onClick={() => PayirTrust()}
      // alt="پرداخت امن pay.ir"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47.3"
        height="22.005"
        viewBox="0 0 47.3 22.005"
      >
        <g id="Group_3" data-name="Group 3" transform="translate(-7.3 -42.6)">
          <path
            id="Path_2"
            data-name="Path 2"
            d="M30.3,47.7c.9,4.8,1.5,7.2,1.5,7.2L35,48.5l.4-.8h3.7c-2.5,4.8-4.3,8.7-6.1,12.2-1.1,2.2-1.7,3.4-2,4.1-.4.7-.1.6-.9.6H27c.2-.5.8-1.7,1.3-2.7l1.3-2.6s-1-3.8-3-11.7l3.7.1"
            fill="#aaa"
          />
          <path
            id="Path_3"
            data-name="Path 3"
            d="M51.1,48.2h3a.536.536,0,0,1,.5.5v.1a8.785,8.785,0,0,0-.2,1.7c0,.2-.2.5-.7.4-2.6-.1-2.8.5-2.8,1.6l-.6,8.4H47c.1-1.5.4-7.5.6-9.5a3.139,3.139,0,0,1,3.5-3.2"
            fill="#aaa"
          />
          <path
            id="Path_4"
            data-name="Path 4"
            d="M42.1,60.9h3.3c0-.5.1-1.4.2-2.4.2-3.6.6-9.2.7-10.3-2.5,0-3.4-.2-3.4,1.6v.1c-.3,1.3-.7,9.6-.8,11"
            fill="#aaa"
          />
          <path
            id="Path_5"
            data-name="Path 5"
            d="M44.7,42.6a2,2,0,1,1-2,2,2.006,2.006,0,0,1,2-2"
            fill="#aaa"
          />
          <path
            id="Path_6"
            data-name="Path 6"
            d="M38,57.4a1.8,1.8,0,1,1-1.8,1.8A1.933,1.933,0,0,1,38,57.4"
            fill="#aaa"
          />
          <path
            id="Path_7"
            data-name="Path 7"
            d="M11.7,51.7c2.9.3,4.2-.5,4.7-1.8.6-1.5.1-3.3-1.7-3.2-2.5.2-2.7,3.2-3,5m-1.1,9.2H7.3C8.1,54.5,8.5,51,8.5,51c.7-8,7.4-8.8,10.2-5.7,2.1,2.4,1.3,6.8-1.3,8.6a9.421,9.421,0,0,1-6,1.2Z"
            fill="#aaa"
          />
          <path
            id="Path_16"
            data-name="Path 16"
            d="M21.6,58.1A4.99,4.99,0,0,0,23,55.6c-.3,0-.7.1-1,.1-2.2.4-3.4,1.1-3.3,2,.2,1.4,2.1,1.2,2.9.4m1.7-4.8c-.7.1-1.1.2-1.1.2Zm-1.1.1c-1.9.3-6.4.8-6.8,3.9-.6,6.1,11.5,6,11.5-4.1,0-3.4-2.5-6.1-6.3-5.4v2.1c2,.4,2.6,1.5,2.6,3.4"
            fill="#aaa"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </Icon>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      boxShadow="inner"
      bgColor={useColorModeValue('#f2f2f2', 'gray.900')}
      fontWeight="light"
    >
      <Container
        maxW={'full'}
        py="10"
        px={{ base: 4, sm: 4, md: 120, lg: 120 }}
      >
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 3 }}
          spacing={8}
          alignItems="end"
        >
          <Box>
            <Stack
              spacing="2"
              alignItems={{
                base: 'center',
                sm: 'center',
                md: 'flex-start',
                lg: 'flex-start',
              }}
            >
              <CircleLogo />
              <Heading fontSize="md" fontWeight="bold" textColor="gray.500">
                فقط کوله‌ات رو ببند!
              </Heading>
              {/* <TextLogo width="140" height="50" /> */}
              {/* <Text fontSize="sm" textColor="primary">
                توریار راهکار جامع گردشگری‌ است، در شبکه‌اجتماعی توریار می‌توانید
                سفرنامه‌های خود را منتشر کنید، سفرنامه دیگران را بخوانید، آنها
                را دنبال کنید و از آخرین سفرها مطلع شوید. همچنین می‌توانید
                سفرهای گروهی که قصد انجام آن را دارید بصورت رایگان بسازید تا
                همسفر‌های سفر بعدی خود را پیدا کنید. همچنین می‌توانید از جزییات
                جدیدترین تور‌های باکیفیت از تورلیدر‌های احراز هویت‌شده مطلع شوید
                و در آنها ثبت‌نام کنید.
              </Text> */}
            </Stack>
          </Box>
          <Wrap
            fontWeight="medium"
            fontSize="xs"
            // columns={{ base: 1, sm: 1, md: 2 }}
            justifyContent="space-around"
            textColor="gray.600"
          >
            <Stack spacing="1" textColor="primary">
              <Link href="#">سفرنامه‌ها</Link>
              <Link href="#">همسفر</Link>
              <Link href="#">سفرساز</Link>
              <Link href="#">جاذبه‌ها</Link>
              <Link href="#">مقالات</Link>
            </Stack>
            <Stack textColor="primary">
              <Link href="#">درباره توریار</Link>
              <Link href="#">قوانین و مقررات</Link>
              <Link href="#">فرصت شغلی</Link>
              <Link href="#">پشتیبانی</Link>
            </Stack>
          </Wrap>
          <Stack
            justifyContent={{
              base: 'center',
              sm: 'center',
              md: 'flex-end',
              lg: 'flex-end',
            }}
            alignItems={{
              base: 'center',
              sm: 'center',
              md: 'flex-end',
              lg: 'flex-end',
            }}
          >
            <Wrap cursor="pointer" align="center">
              <PayIRTrustLogo />
              <Icon h="37" w="37" viewBox="0 0 21.65 21.44">
                <path
                  d="M21.65,10.66a7.66,7.66,0,0,1-.43.86,5,5,0,0,0-.92,3.62,1.37,1.37,0,0,1-.94,1.57,4.82,4.82,0,0,0-2.55,2.59,1.41,1.41,0,0,1-1.6.93,6.14,6.14,0,0,0-3.81,1.05,1.38,1.38,0,0,1-1.32,0,5.76,5.76,0,0,0-3.93-1,1.19,1.19,0,0,1-1.34-.8A6.06,6.06,0,0,0,2,16.58a1.48,1.48,0,0,1-.72-1.22,6.71,6.71,0,0,0-1.08-4,1.35,1.35,0,0,1,0-1.22,6.09,6.09,0,0,0,1.06-4A1.2,1.2,0,0,1,2,4.77,5.25,5.25,0,0,0,4.77,2a1.22,1.22,0,0,1,1.42-.82A5.78,5.78,0,0,0,10,.17a1.6,1.6,0,0,1,1.4,0,6.59,6.59,0,0,0,3.94,1,1.44,1.44,0,0,1,1.22.72,6.8,6.8,0,0,0,3,2.93,1.45,1.45,0,0,1,.68,1,6.18,6.18,0,0,0,1.16,4.31A3.2,3.2,0,0,1,21.65,10.66ZM16.4,12.45a6.49,6.49,0,0,0-1.54.19,11.72,11.72,0,0,0-1.75.92A38.65,38.65,0,0,1,9,15.9a2,2,0,0,1-3-2.05,25.58,25.58,0,0,1,.38-2.71c.09-.74.58-.75,1.08-.6.71.2,1.38.52,2.09.74a2.53,2.53,0,0,0,3.27-1.07l-5-1.4.32-1L4.73,10.91,6,10.63a44.51,44.51,0,0,0-.58,4.62c-.06,2.16,1.08,3,3.14,2.32a17.57,17.57,0,0,0,3.65-2.11C13.56,14.55,14.87,13.54,16.4,12.45ZM8.12,18.54c1.38.93,2.47,1,3.49.28.77-.55,1.48-1.19,2.22-1.78,1.25-1,2.17-2.46,3.91-2.78A1.13,1.13,0,0,0,16,13.89c-.83.54-1.64,1.1-2.42,1.71C11.93,16.87,10.45,18.38,8.12,18.54Zm2.06-17c-1.52,2-1.52,2.07-.1,3.58C11.67,3.38,11.45,2.91,10.18,1.57ZM9.86,6.28c.77.07,1.93-.14,2.67.32s.94,1.57,1.32,2.28a2.71,2.71,0,0,0-.31-3.09C12.78,5.2,10.72,5.57,9.86,6.28Z"
                  style={{ fill: '#aaa' }}
                ></path>
              </Icon>
              <Icon h="37" w="37" viewBox="0 0 29.3 23.38">
                <path
                  d="M0,22.39a52,52,0,0,1,9.54-5.67c5.21-2.31,10.17-6.09,10.17-11.09S17.65,0,16.43,0C14.75,0,9.87,2,8.32,10.46s1.89,12.72,4.79,12.89,4.07-.49,5.88-4.27c1.71-1.28,3.16-1.64,3.55-3.48a.85.85,0,0,0-.76-1L21,14.5a2.46,2.46,0,0,1,1.68-1.18c1.13-.17,1.89-2.14,1.89-2.14s-4,.79-6.39,6.51-7,2.94-7.39.63A19.88,19.88,0,0,1,12.69,4.58c2.63-4.58,8.07-1,2.63,5.46C10,15.34.46,17.31,0,22.39Z"
                  style={{ fill: '#aaa' }}
                ></path>
                <path
                  d="M25.58,11.78l1,1.67a.65.65,0,0,0,1,.15l1.51-1.33a.67.67,0,0,0,.12-.83l-1-1.64a.65.65,0,0,0-1-.15L25.7,11A.66.66,0,0,0,25.58,11.78Z"
                  style={{ fill: '#aaa' }}
                ></path>
              </Icon>
            </Wrap>
            <SocialButtons />
            <Text fontSize="xs" textColor="primary">
              تمامی حقوق برای پرس و جو محفوظ است. | © {year}
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
