import { Flex, Icon, Text } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';

type Props = {};

const StickyBanner = (props: Props) => {
  const [closed, setClosed] = useState(false);
  return (
    <>
      {!closed && (
        <Flex
          // as={Link}
          // href={siteConfig.url.youtube}
          bg={'primary.200'}
          color="gray.900"
          alignItems="center"
          position="sticky"
          top={0}
          zIndex={999}
          justifyContent="center"
          py="8px"
          _hover={{ textDecoration: 'none', bg: 'primary' }}
          // target="_blank"
          //   onClick={() =>
          //     event({
          //       category: 'Subscription',
          //       action: 'Clicked the YouTube banner',
          //       label: 'Sticky YouTube banner on Top',
          //     })
          //   }
        >
          <Text as="span" fontWeight={'light'} fontSize="xs">
            <Text as="span">
              شما در حال استفاده از نسخه‌ی آزمایشی توریار هستید.{' '}
              <Text as="span" display={['none', 'inline']}>
                گزارش ایرادات را از طریق ایمیل یا شبکه‌های اجتماعی توریار با ما
                در میان بگذارید.
              </Text>
            </Text>
          </Text>
          <Icon
            position={'absolute'}
            right="10px"
            as={AiOutlineClose}
            onClick={() => setClosed(true)}
            cursor="pointer"
          />
        </Flex>
      )}
    </>
  );
};

export default StickyBanner;
