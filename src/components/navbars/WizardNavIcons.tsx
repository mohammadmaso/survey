import { Icon as ChakraIcon, Tooltip, Wrap, WrapItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import {
  FiActivity,
  FiClipboard,
  FiGrid,
  FiMapPin,
  FiSearch,
} from 'react-icons/fi';

interface Props {
  selected: string;
}

const WizardNavIcons = (props: Props) => {
  return (
    <div>
      <Wrap justifyContent="center" spacing="2">
        <WrapItem>
          <Icon
            value="selectCategory"
            selected={props.selected}
            as={FiGrid}
            name="موضوع تور"
          />
        </WrapItem>
        <WrapItem>
          <Icon
            value="selectActivity"
            selected={props.selected}
            as={FiActivity}
            name="فعالیت‌ها"
          />
        </WrapItem>
        <WrapItem>
          <Icon
            selected={props.selected}
            value="selectOrigin"
            as={FiMapPin}
            name="مبدا"
          />
        </WrapItem>
        <WrapItem>
          <Icon
            selected={props.selected}
            value="selectPlaces"
            as={FiSearch}
            name="گشت و گذار"
          />
        </WrapItem>
        <WrapItem>
          <Icon
            selected={props.selected}
            value="results"
            as={FiClipboard}
            name="تایید و ذخیره"
          />
        </WrapItem>
      </Wrap>
    </div>
  );
};

const Icon = (props: any) => {
  return (
    <Tooltip hasArrow label={props.name} fontSize="md" placement="bottom">
      <span>
        <Link to={`/wizard/${props.value}`}>
          <ChakraIcon
            color={props.selected == props.value ? 'primary.500' : 'gray.500'}
            height={props.selected == props.value ? 7 : 5}
            width={props.selected == props.value ? 7 : 5}
            transition={'all .5s ease'}
            _hover={{ transform: 'scale(1.5,1.5)' }}
            as={props.as}
          />
        </Link>
      </span>
    </Tooltip>
  );
};

export default WizardNavIcons;
