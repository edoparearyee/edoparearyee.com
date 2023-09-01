import classNames from 'classnames';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import Container from '@/components/Grid/Container';
import Row from '@/components/Grid/Row';
import Col from '@/components/Grid/Col';
import Type from '@/components/Type/Type';
import Section from '@/components/Section/Section';
import Image from '@/components/Image/Image';
import Button from '@/components/Button/Button';
import Video from '@/components/Video/Video';
import Badge from '@/components/Badge/Badge';
import { getCaseStudy } from '@/services/contentful';

import styles from './page.module.scss';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getData = async (slug: string) => {
  return getCaseStudy(slug);
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = await getData(params.slug);

  return {
    title: `${caseStudy?.title} | Ed Opare-Aryee`,
    description: caseStudy?.description,
    twitter: {
      images: caseStudy ? [caseStudy.hero.image[0]['1x']] : [],
    },
    openGraph: {
      images: caseStudy ? [caseStudy.hero.image[0]['1x']] : [],
    },
  };
}

const WorkDetail = async ({ params }: Props) => {
  const caseStudy = await getData(params.slug);

  if (!caseStudy) {
    return notFound();
  }

  return (
    <main className={styles['work-detail']}>
      <div className={styles['work-detail__intro-section']}>
        <Image
          className={styles['work-detail__hero-image']}
          imgClassName={styles['work-detail__hero-image-img']}
          sources={caseStudy.hero.image}
          alt={caseStudy.hero.alt}
        />
        <div className={styles['work-detail__hero-content']}>
          <Container>
            <Row>
              <Col sm={12} md={9} lg={8}>
                <Type appearance="h1" renderAs="h1">
                  {caseStudy.title}
                </Type>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Section className={styles['work-detail__information']}>
        <div className={styles['work-detail__details']}>
          <Container>
            <Row>
              <Col sm={12}>
                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Brief
                </Type>
              </Col>
              <Col sm={12} md={10} lg={8}>
                <div className={styles['work-detail__description']}>
                  {caseStudy.description.split('\n\n').map((p, i) => (
                    <Type key={i} appearance="body">
                      {p}
                    </Type>
                  ))}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={5} xxl={5}>
                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Client
                </Type>
                <Type
                  className={styles['work-detail__detail']}
                  appearance="body"
                >
                  {caseStudy.client.name}
                </Type>
              </Col>

              <Col md={6} lg={5} xxl={5}>
                {caseStudy.websiteUrl ? (
                  <Button
                    className={styles['work-detail__view-website-button']}
                    appearance="solid"
                    external
                    color="primary"
                    renderAs="a"
                    size="small"
                    href={caseStudy.websiteUrl}
                  >
                    View Website
                  </Button>
                ) : null}
              </Col>
              <Col md={6} lg={5} xxl={5}>
                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Role
                </Type>
                <Type
                  className={styles['work-detail__detail']}
                  appearance="body"
                >
                  {caseStudy.role}
                </Type>
              </Col>
              <Col md={6} lg={5} xxl={5}>
                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Year
                </Type>
                <Type
                  className={styles['work-detail__detail']}
                  appearance="body"
                >
                  {caseStudy.year}
                </Type>
              </Col>
              <Col md={6} lg={5} xxl={5}>
                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Team
                </Type>
                <ul className={styles['work-detail__team-list']}>
                  {caseStudy.team.map((member) => (
                    <li key={member.name}>
                      <Type
                        className={classNames(
                          styles['work-detail__detail'],
                          styles['work-detail__team-member'],
                        )}
                        appearance="body"
                      >
                        <strong>{member.name}</strong> - {member.role}
                      </Type>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col md={6} lg={5} xxl={5}>
                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Technology used
                </Type>
                <ul
                  className={classNames(
                    styles['work-detail__tag-list'],
                    styles['work-detail__detail'],
                  )}
                >
                  {caseStudy.tags?.map((tag: string) => (
                    <li
                      key={tag}
                      className={styles['work-detail__tag-list-item']}
                    >
                      <Badge shape="square" color="primary" size="x-small">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col md={6} lg={5} xxl={5}>
                {caseStudy.awards?.length ? (
                  <>
                    <Type
                      renderAs="h2"
                      appearance="h4"
                      className={styles['work-detail__information-title']}
                    >
                      Awards
                    </Type>
                    <ul
                      className={classNames(
                        styles['work-detail__awards-list'],
                        styles['work-detail__detail'],
                      )}
                    >
                      {caseStudy.awards?.map(
                        (award: { title: string; url: string }) => (
                          <li
                            key={award.title}
                            className={styles['work-detail__awards-list-item']}
                          >
                            <Button
                              className={styles['work-detail__awards-button']}
                              appearance="link"
                              color="light"
                              renderAs="a"
                              external
                              size="large"
                              href={award.url}
                            >
                              {award.title}
                            </Button>
                          </li>
                        ),
                      )}
                    </ul>
                  </>
                ) : null}
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container>
            <Row>
              <Col>
                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Screens
                </Type>
              </Col>
            </Row>
            <Row>
              {caseStudy[
                caseStudy.platform === 'Mobile App'
                  ? 'imagesMobile'
                  : 'imagesDesktop'
              ].map((image, i) => (
                <Col sm={12} key={`image-${i}`}>
                  <Image
                    className={classNames(styles['work-detail__screenshot'], {
                      [styles['work-detail__screenshot-mobile']]:
                        caseStudy.platform === 'Mobile App',
                    })}
                    sources={image.image}
                    alt={image.alt}
                  />
                </Col>
              ))}
            </Row>
            {caseStudy.video ? (
              <>
                <Row>
                  <Col>
                    <Type
                      renderAs="h2"
                      appearance="h4"
                      className={styles['work-detail__information-title']}
                    >
                      Demo
                    </Type>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Video
                      className={styles['work-detail__video']}
                      src={caseStudy.video?.url}
                      poster={caseStudy.video?.poster.image[0]['2x']}
                      controls
                      playsInline
                    />
                  </Col>
                </Row>
              </>
            ) : null}
          </Container>
        </div>
      </Section>
    </main>
  );
};

export default WorkDetail;
