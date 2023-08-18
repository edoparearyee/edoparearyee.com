import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeAwardFields {
  title: EntryFieldTypes.Symbol;
  year: EntryFieldTypes.Date;
  url: EntryFieldTypes.Symbol;
}

export type TypeAwardSkeleton = EntrySkeletonType<TypeAwardFields, 'award'>;
export type TypeAward<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeAwardSkeleton, Modifiers, Locales>;

export interface TypeBreakpointImageFields {
  title: EntryFieldTypes.Symbol;
  breakpoint: EntryFieldTypes.Integer<1024 | 1200 | 375 | 768>;
  x1: EntryFieldTypes.Symbol;
  x2: EntryFieldTypes.Symbol;
}

export type TypeBreakpointImageSkeleton = EntrySkeletonType<
  TypeBreakpointImageFields,
  'breakpointImage'
>;
export type TypeBreakpointImage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBreakpointImageSkeleton, Modifiers, Locales>;

export interface TypeCaseStudyFields {
  slug: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
  websiteUrl?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  hero: EntryFieldTypes.EntryLink<TypeImageSkeleton>;
  role: EntryFieldTypes.Symbol<
    | 'Frontend Developer'
    | 'Lead Frontend Developer'
    | 'Lead Full Stack Developer'
    | 'Technical Architect'
    | 'Technical Lead'
  >;
  year: EntryFieldTypes.Date;
  client?: EntryFieldTypes.EntryLink<TypeClientSkeleton>;
  imagesMobile?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeImageSkeleton>
  >;
  imagesDesktop?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeImageSkeleton>
  >;
  video?: EntryFieldTypes.EntryLink<TypeVideoSkeleton>;
  team?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeTeamMemberSkeleton>
  >;
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  contributors?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  awards?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAwardSkeleton>>;
}

export type TypeCaseStudySkeleton = EntrySkeletonType<
  TypeCaseStudyFields,
  'caseStudy'
>;
export type TypeCaseStudy<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeCaseStudySkeleton, Modifiers, Locales>;

export interface TypeClientFields {
  name: EntryFieldTypes.Symbol;
  logoDark: EntryFieldTypes.AssetLink;
  logoLight: EntryFieldTypes.AssetLink;
}

export type TypeClientSkeleton = EntrySkeletonType<TypeClientFields, 'client'>;
export type TypeClient<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeClientSkeleton, Modifiers, Locales>;

export interface TypeImageFields {
  title: EntryFieldTypes.Symbol;
  responsiveImage: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeBreakpointImageSkeleton>
  >;
  altText: EntryFieldTypes.Symbol;
}

export type TypeImageSkeleton = EntrySkeletonType<TypeImageFields, 'image'>;
export type TypeImage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeImageSkeleton, Modifiers, Locales>;

export interface TypeTeamMemberFields {
  name: EntryFieldTypes.Symbol;
  role: EntryFieldTypes.Symbol;
}

export type TypeTeamMemberSkeleton = EntrySkeletonType<
  TypeTeamMemberFields,
  'teamMember'
>;
export type TypeTeamMember<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeTeamMemberSkeleton, Modifiers, Locales>;

export interface TypeVideoFields {
  title: EntryFieldTypes.Symbol;
  url: EntryFieldTypes.Symbol;
  poster?: EntryFieldTypes.EntryLink<TypeImageSkeleton>;
}

export type TypeVideoSkeleton = EntrySkeletonType<TypeVideoFields, 'video'>;
export type TypeVideo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeVideoSkeleton, Modifiers, Locales>;
