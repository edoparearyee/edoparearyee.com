import * as Contentful from 'contentful';

import { CaseStudy, Client } from '@/models/caseStudy.model';
import {
  TypeCaseStudySkeleton,
  TypeClientSkeleton,
} from '@/models/contentful.model';
import { mapCaseStudy, mapClient } from '@/utils/mapCaseStudy';

export interface GetCaseStudyOptions {
  limit?: number;
  skip?: number;
}

export const getCaseStudies = async ({
  limit = 6,
  skip = 0,
}: GetCaseStudyOptions = {}) => {
  try {
    const client = Contentful.createClient({
      space: process.env.CONTENTFUL_SPACE || '',
      environment: process.env.CONTENTFUL_ENV || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    });

    const contentType = 'caseStudy';

    const entries = await client.getEntries<TypeCaseStudySkeleton>({
      content_type: contentType,
      limit: Math.min(limit, 12),
      skip,
      include: 3,
      order: ['-fields.year'],
    });

    const items = entries.items.map<CaseStudy>(mapCaseStudy);

    return {
      items,
      total: entries.total,
      skip: entries.skip,
      limit: entries.limit,
    };
  } catch (e) {
    return {
      items: [],
      total: 0,
      skip: 0,
      limit: 0,
    };
  }
};

export const getCaseStudy = async (slug: string): Promise<CaseStudy | null> => {
  try {
    const client = Contentful.createClient({
      space: process.env.CONTENTFUL_SPACE || '',
      environment: process.env.CONTENTFUL_ENV || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    });

    const contentType = 'caseStudy';

    const entries = await client.getEntries<TypeCaseStudySkeleton>({
      content_type: contentType,
      limit: 1,
      include: 3,
      'fields.slug': slug,
    });

    if (!entries.items.length) return null;

    const [item] = entries.items.map<CaseStudy>(mapCaseStudy);

    return item;
  } catch (e) {
    return null;
  }
};

export const getClients = async () => {
  try {
    const client = Contentful.createClient({
      space: process.env.CONTENTFUL_SPACE || '',
      environment: process.env.CONTENTFUL_ENV || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    });

    const contentType = 'client';

    const entries = await client.getEntries<TypeClientSkeleton>({
      content_type: contentType,
      limit: 8,
    });

    const items = entries.items.map<Client>(mapClient);

    return {
      items,
      total: entries.total,
      skip: entries.skip,
      limit: entries.limit,
    };
  } catch (e) {
    return {
      items: [],
      total: 0,
      skip: 0,
      limit: 0,
    };
  }
};
