import { Asset, Entry } from 'contentful';

import {
  TypeAwardSkeleton,
  TypeBreakpointImageSkeleton,
  TypeCaseStudySkeleton,
  TypeClientSkeleton,
  TypeImageSkeleton,
  TypeTeamMemberSkeleton,
  TypeVideoSkeleton,
} from '@/models/contentful.model';
import {
  BreakpointImage,
  ResponsiveImageWithAltText,
} from '@/models/image.model';
import { CaseStudy } from '@/models/caseStudy.model';
import { WorkCard } from '@/components/WorkSection/WorkSection';

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

export const mapTeamMember = (
  member: Entry<TypeTeamMemberSkeleton, undefined, string>,
) => ({
  name: member.fields.name,
  role: member.fields.role,
});

export const mapClient = (
  client: Entry<TypeClientSkeleton, undefined, string>,
) => ({
  name: client.fields.name,
  logoDarkUrl: (client.fields.logoDark as Asset<undefined, string>).fields.file
    ?.url as string,
  logoLightUrl: (client.fields.logoLight as Asset<undefined, string>).fields
    .file?.url as string,
  order: client.fields.order,
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
  websiteUrl: item.fields.websiteUrl,
  role: item.fields.role,
  year: new Date(item.fields.year).getFullYear().toString(),
  client: mapClient(
    item.fields.client as Entry<TypeClientSkeleton, undefined, string>,
  ),
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
  imagesMobile: item.fields.imagesMobile?.length
    ? (
        item.fields.imagesMobile as Entry<
          TypeImageSkeleton,
          undefined,
          string
        >[]
      ).map(mapResponsiveImageWithAltText)
    : [],
  imagesDesktop: item.fields.imagesDesktop?.length
    ? (
        item.fields.imagesDesktop as Entry<
          TypeImageSkeleton,
          undefined,
          string
        >[]
      ).map(mapResponsiveImageWithAltText)
    : [],
  video: item.fields.video
    ? {
        url: (item.fields.video as Entry<TypeVideoSkeleton, undefined, string>)
          .fields.url,
        poster: mapResponsiveImageWithAltText(
          (item.fields.video as Entry<TypeVideoSkeleton, undefined, string>)
            .fields.poster as Entry<TypeImageSkeleton, undefined, string>,
        ),
      }
    : undefined,
  tags: item.fields.tags,
  team: item.fields.team
    ? (
        item.fields.team as Entry<TypeTeamMemberSkeleton, undefined, string>[]
      ).map(mapTeamMember)
    : [],
  awards: item.fields.awards
    ? (item.fields.awards as Entry<TypeAwardSkeleton, undefined, string>[]).map(
        mapAwards,
      )
    : [],
  platform: item.fields.platform,
  order: item.fields.order,
});

export const mapCaseStudyToCard = (item: CaseStudy): WorkCard => ({
  slug: item.slug,
  image: item.hero,
  title: item.title,
  logoUrl: item.client.logoLightUrl,
});
