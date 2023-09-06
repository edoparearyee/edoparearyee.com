import type { Meta, StoryObj } from '@storybook/react';
import { useContext } from 'react';

import Modal from './Modal';
import Type from '../Type/Type';
import Button from '../Button/Button';
import { ModalContext, ModalProvider } from '../ModalProvider/ModalProvider';
import Carousel from '../Carousel/Carousel';
import { aboutMeCarouselImagesDesktop } from '../AboutMeSection/carouselImages';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

const LoremIpsum = () => (
  <>
    <Type>
      Velit ut cupidatat id do occaecat. Minim tempor eiusmod ad deserunt fugiat
      anim exercitation velit labore officia. Amet officia mollit sunt
      reprehenderit culpa do esse fugiat culpa sint quis mollit non veniam.
      Officia sint voluptate eiusmod fugiat id voluptate irure tempor aliqua.
      Aliqua magna ad Lorem aliquip reprehenderit non consectetur. Eiusmod duis
      eiusmod veniam do amet enim sunt.
    </Type>
    <Type>
      Velit ut cupidatat id do occaecat. Minim tempor eiusmod ad deserunt fugiat
      anim exercitation velit labore officia. Amet officia mollit sunt
      reprehenderit culpa do esse fugiat culpa sint quis mollit non veniam.
      Officia sint voluptate eiusmod fugiat id voluptate irure tempor aliqua.
      Aliqua magna ad Lorem aliquip reprehenderit non consectetur. Eiusmod duis
      eiusmod veniam do amet enim sunt.
    </Type>
  </>
);

const defaultArgs = {
  hasCloseBtn: true,
  title: 'Enim magna culpa mollit aliqua.',
  children: <LoremIpsum />,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Example: Story = {
  args: {
    ...defaultArgs,
  },
  decorators: [
    () => {
      const Inner: React.FC = () => {
        const { openModal } = useContext(ModalContext);
        return (
          <>
            <Button
              renderAs="button"
              appearance="solid"
              onClick={() =>
                openModal({ content: <LoremIpsum />, title: 'Title' })
              }
            >
              Open modal
            </Button>
            <LoremIpsum />
          </>
        );
      };

      return (
        <>
          <ModalProvider>
            <Inner />
          </ModalProvider>
        </>
      );
    },
  ],
};

export const VariantImage: Story = {
  args: {
    ...defaultArgs,
    title: '',
    variant: 'image',
    children: (
      <Carousel
        images={aboutMeCarouselImagesDesktop}
        autoPlay={false}
        transition="slide"
        controls
      />
    ),
  },
};
