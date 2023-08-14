import { Entry } from 'contentful';

import {
  TypeAwardSkeleton,
  TypeBreakpointImageSkeleton,
  TypeCaseStudySkeleton,
  TypeClientSkeleton,
  TypeImageSkeleton,
  TypeVideoSkeleton,
} from '@/models/contentful.model';
import {
  BreakpointImage,
  ResponsiveImageWithAltText,
} from '@/models/image.model';
import { CaseStudy } from '@/models/case-study.model';

export const mapResponsiveImage = (
  breakpointImage: Entry<TypeBreakpointImageSkeleton, undefined, string>,
): BreakpointImage => ({
  breakpoint: breakpointImage.fields.breakpoint,
  '1x': breakpointImage.fields.x1,
  '2x': breakpointImage.fields.x2,
});

export const mapAwards = (
  award: Entry<TypeAwardSkeleton, undefined, string>,
) => ({
  title: award.fields.title,
  year: new Date(award.fields.year).getFullYear().toString(),
  url: award.fields.url,
});

export const mapResponsiveImageWithAltText = (
  image: Entry<TypeImageSkeleton, undefined, string>,
): ResponsiveImageWithAltText => ({
  alt: image.fields.altText,
  image: (
    image.fields.responsiveImage as Entry<
      TypeBreakpointImageSkeleton,
      undefined,
      string
    >[]
  ).map(mapResponsiveImage),
});

export const mapCaseStudy = (
  item: Entry<TypeCaseStudySkeleton, undefined, string>,
): CaseStudy => ({
  slug: item.fields.slug,
  title: item.fields.title,
  description: item.fields.description || '',
  role: item.fields.role,
  year: new Date(item.fields.year).getFullYear().toString(),
  clientName: (
    item.fields.client as Entry<TypeClientSkeleton, undefined, string>
  ).fields.name,
  hero: {
    alt: (item.fields.hero as Entry<TypeImageSkeleton, undefined, string>)
      .fields.altText,
    image: (
      (item.fields.hero as Entry<TypeImageSkeleton, undefined, string>).fields
        .responsiveImage as Entry<
        TypeBreakpointImageSkeleton,
        undefined,
        string
      >[]
    ).map(mapResponsiveImage),
  },
  imagesMobile: (
    item.fields.imagesMobile as Entry<TypeImageSkeleton, undefined, string>[]
  ).map(mapResponsiveImageWithAltText),
  imagesDesktop: (
    item.fields.imagesDesktop as Entry<TypeImageSkeleton, undefined, string>[]
  ).map(mapResponsiveImageWithAltText),
  videoUrl: (item.fields.video as Entry<TypeVideoSkeleton, undefined, string>)
    .fields.url,
  tags: item.fields.tags,
  contributors: item.fields.contributors,
  awards: (
    item.fields.awards as Entry<TypeAwardSkeleton, undefined, string>[]
  ).map(mapAwards),
});
