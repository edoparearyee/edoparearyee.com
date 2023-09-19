import type { Meta, StoryObj } from '@storybook/react';

import CaseStudyGallerySection, {
  CaseStudyGallerySectionProps,
} from './CaseStudyGallerySection';
import { aboutMeCarouselImagesDesktop } from '../AboutMeSection/carouselImages';
import { ModalProvider } from '../ModalProvider/ModalProvider';

const meta: Meta<typeof CaseStudyGallerySection> = {
  title: 'Sections/CaseStudyGallery',
  component: CaseStudyGallerySection,
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CaseStudyGallerySection>;

const defaultArgs: CaseStudyGallerySectionProps = {
  caseStudy: {
    client: {
      name: 'Client name',
      logoDarkUrl: '',
      logoLightUrl: '',
    },
    order: 1,
    description:
      'Ullamco deserunt occaecat reprehenderit eiusmod reprehenderit et occaecat ex nulla. Veniam mollit aliqua proident veniam labore sit. Aute ad incididunt aliqua non enim dolor non velit. Occaecat dolore ad labore enim ullamco quis in eu aliquip consectetur nulla aute elit. Exercitation labore sit mollit cillum nisi esse veniam. Duis commodo eiusmod exercitation nisi dolore consequat excepteur fugiat qui nisi. Fugiat occaecat voluptate et eu eiusmod ullamco ea sit occaecat quis eu proident officia.\n\nMinim elit ea minim esse duis magna minim. Commodo in consectetur tempor eiusmod in. Eu enim elit amet cillum do mollit id. Duis dolore aute eu veniam laborum.',
    imagesDesktop: aboutMeCarouselImagesDesktop,
    imagesMobile: [],
    platform: 'Web',
    role: 'Technical Lead',
    year: '2022',
    tags: ['Angular', 'TypeScript', 'SCSS'],
    team: [
      {
        name: 'John Doe',
        role: 'Senior Developer',
      },
      {
        name: 'Jane Doe',
        role: 'Senior Developer',
      },
    ],
    slug: 'project-name',
    title: 'Project Name',
    websiteUrl: 'https://www.example.com',
    hero: {
      alt: '',
      image: [],
    },
    awards: [
      {
        title: 'Webby Awards Winner',
        year: '2023',
        url: 'https://www.example.com',
      },
    ],
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
