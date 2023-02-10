import { Badge } from '@chakra-ui/react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiFeather, FiMap, FiPhone } from 'react-icons/fi';
import { RiArticleLine, RiMapPinUserLine } from 'react-icons/ri';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { NavItem } from './NavItem';

function ComingSoonBadge() {
  return <Badge colorScheme="green">به‌ زودی</Badge>;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'تورها',
    icon: <FiFeather />,
    children: [
      {
        label: 'تورها',
        icon: <FiFeather />,
        subLabel: 'از میان تور‌ها انتخاب کنید',
        href: '/travelogues',
      },
      {
        label: 'تورلیدر‌ها',
        icon: <RiMapPinUserLine />,
        subLabel: 'گشت و گذار میان تورلیدرهای تریپر',
        href: '/travelers',
      },
      {
        label: 'نقشه تور‌ها',
        icon: <FiMap />,
        subLabel: 'روی نقشه تور خود را پیدا کنید',
        href: '/tourmap',
      },
      {
        label: 'جاذبه‌ها',
        icon: <HiOutlineLocationMarker />,
        subLabel: 'از میان جاذبه‌ها و فعالیت‌ها کشف کنید',
        // href: '/places',
        badge: <ComingSoonBadge />,
      },
    ],
  },
  // {
  //   label: 'همسفر',
  //   icon: <AiOutlineUsergroupAdd />,
  //   // href: '/fellow-traveler',
  //   badge: <ComingSoonBadge />,
  // },
  // {
  //   label: 'تور',
  //   icon: <MdCardTravel />,
  //   href: '/tours',
  //   children: [
  //     {
  //       label: 'نقشه تور‌ها',
  //       icon: <FiMap />,
  //       subLabel: 'روی نقشه تور خود را پیدا کنید',
  //       href: '/tourmap',
  //     },
  //     {
  //       label: 'تمام تورها',
  //       icon: <FiFeather />,
  //       subLabel: 'تمامی تورها با دقیق‌ترین جزییات',
  //       href: '/tours',
  //     },
  //     {
  //       label: 'تور لیدرها',
  //       icon: <RiMapPinUserLine />,
  //       subLabel: 'تورلیدرهای  احراز هویت شده توریار',
  //       href: '/tourguids',
  //     },
  //   ],
  // },
  {
    label: 'دانشنامه‌ی سفر',
    icon: <RiArticleLine />,
    href: '/articles',
  },
  // {
  //   label: 'سفرساز',
  //   icon: <ImMagicWand />,
  //   // href: '/wizard',
  //   badge: <ComingSoonBadge />,
  // },
  {
    label: 'درباره توریار',
    icon: <AiOutlineInfoCircle />,
    href: '/about',
  },
  {
    label: 'تماس‌ با ‌ما',
    icon: <FiPhone />,
    href: '/contact',
  },
];
