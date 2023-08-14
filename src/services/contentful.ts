import * as Contentful from 'contentful';

import { CaseStudy } from '@/models/case-study.model';
import { TypeCaseStudySkeleton } from '@/models/contentful.model';
import { mapCaseStudy } from '@/utils/mapCaseStudy';

export const getCaseStudies = async (limit = 12, skip = 0) => {
  const client = Contentful.createClient({
    space: process.env.CONTENTFUL_SPACE || '',
    environment: process.env.CONTENTFUL_ENV || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  });

  const contentType = 'caseStudy';

  const entries = await client.getEntries<TypeCaseStudySkeleton>({
    content_type: contentType,
    limit,
    skip,
    include: 3,
  });

  const items = entries.items.map<CaseStudy>(mapCaseStudy);

  return {
    items,
    total: entries.total,
    skip: entries.skip,
    limit: entries.limit,
  };
};
