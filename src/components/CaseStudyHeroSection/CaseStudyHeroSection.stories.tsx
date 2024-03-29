import type { Meta, StoryObj } from '@storybook/react';

import CaseStudyHeroSection, {
  CaseStudyHeroSectionProps,
} from './CaseStudyHeroSection';
import { aboutMeCarouselImagesDesktop } from '../AboutMeSection/carouselImages';

const meta: Meta<typeof CaseStudyHeroSection> = {
  title: 'Sections/CaseStudyHero',
  component: CaseStudyHeroSection,
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CaseStudyHeroSection>;

const defaultArgs: CaseStudyHeroSectionProps = {
  caseStudy: {
    client: {
      name: 'Client name',
      logoDarkUrl: '',
      logoLightUrl: '',
      order: 1,
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
      alt: 'Google Black Owned Friday Website Hero Poster',
      image: [
        {
          breakpoint: 1024,
          '1x': 'https://res.cloudinary.com/edoparearyee/image/upload/c_fill,h_640,q_auto:best,w_1024/v1691166454/edoparearyee.com/Google%20Black%20Owned%20Friday/gbof-hero.webp',
          '2x': 'https://res.cloudinary.com/edoparearyee/image/upload/c_fill,h_1280,q_auto:best,w_2048/v1691166454/edoparearyee.com/Google%20Black%20Owned%20Friday/gbof-hero.webp',
        },
        {
          breakpoint: 768,
          '1x': 'https://res.cloudinary.com/edoparearyee/image/upload/c_fill,h_480,q_auto:best,w_768/v1691166454/edoparearyee.com/Google%20Black%20Owned%20Friday/gbof-hero.webp',
          '2x': 'https://res.cloudinary.com/edoparearyee/image/upload/c_fill,h_960,q_auto:best,w_1536/v1691166454/edoparearyee.com/Google%20Black%20Owned%20Friday/gbof-hero.webp',
        },
        {
          breakpoint: 375,
          '1x': 'https://res.cloudinary.com/edoparearyee/image/upload/c_fill,h_211,q_auto:best,w_375/v1691166454/edoparearyee.com/Google%20Black%20Owned%20Friday/gbof-hero.webp',
          '2x': 'https://res.cloudinary.com/edoparearyee/image/upload/c_fill,h_422,q_auto:best,w_750/v1691166454/edoparearyee.com/Google%20Black%20Owned%20Friday/gbof-hero.webp',
        },
      ],
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
