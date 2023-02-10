import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Stack,
  Center,
  Wrap,
  useClipboard,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  FacebookMessengerShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  WeiboIcon,
  HatenaIcon,
  FacebookMessengerIcon,
} from 'react-share';
import { CopyIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  onClose: any;
  url?: string | null;
  media?: any;
  description?: string;
  title?: string;
}

const ShareModal = ({
  isOpen,
  description,
  url,
  title,
  media,
  onClose,
}: Props) => {
  let location = useLocation();

  const [shareUrl, setShareUrl] = useState(
    `https://mytripper.ir${url || location}`
  );

  const { hasCopied, onCopy } = useClipboard(shareUrl);

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent rounded="none">
          <ModalHeader>اشتراک گذاری</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Center>
                <Wrap>
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <FacebookMessengerShareButton
                    url={shareUrl}
                    appId="521270401588372"
                    className="Demo__some-network__share-button"
                  >
                    <FacebookMessengerIcon size={32} round />
                  </FacebookMessengerShareButton>
                  <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <TelegramShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                  >
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>
                  <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="Demo__some-network__share-button"
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  {/* <PinterestShareButton
                    url={String(window.location)}
                    media={`${String(window.location)}/${media}`}
                    className="Demo__some-network__share-button"
                  >
                    <PinterestIcon size={32} round />
                  </PinterestShareButton> */}
                </Wrap>
              </Center>
              <Button size="sm" leftIcon={<CopyIcon />} onClick={onCopy} ml={2}>
                {hasCopied ? 'کپی شد.' : 'کپی لینک اشتراک'}
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ShareModal;
