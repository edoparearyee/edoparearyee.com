import classNames from 'classnames';
import { notFound } from 'next/navigation';

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

const getData = async (slug: string) => {
  return getCaseStudy(slug);
};

const WorkDetail = async ({ params }: { params: { slug: string } }) => {
  const caseStudy = await getData(params.slug);

  if (!caseStudy) {
    return notFound();
  }

  return (
    <main className={styles['work-detail']}>
      <Section className={styles['work-detail__intro-section']}>
        <Image
          className={styles['work-detail__hero-image']}
          imgClassName={styles['work-detail__hero-image-img']}
          sources={caseStudy.hero.image}
          alt={caseStudy.hero.alt}
        />
        <div className={styles['work-detail__hero-content']}>
          <Container>
            <Row>
              <Col sm={12} md={9} lg={6}>
                <Type appearance="h1" renderAs="h1">
                  {caseStudy.title}
                </Type>
              </Col>
              <Col sm={12} md={10} lg={8}>
                <Type>{caseStudy.description}</Type>
              </Col>
            </Row>
          </Container>
        </div>
      </Section>
      <Section className={styles['work-detail__information']}>
        <div className={styles['work-detail__details']}>
          <Container>
            <Row>
              <Col md={5} xxl={4}>
                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Client
                </Type>
                <Type className={styles['work-detail__detail']}>
                  {caseStudy.client.name}
                </Type>

                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Role
                </Type>
                <Type className={styles['work-detail__detail']}>
                  {caseStudy.role}
                </Type>

                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Tech used
                </Type>
                <ul
                  className={classNames(
                    styles['work-detail__tag-list'],
                    styles['work-detail__detail'],
                  )}
                >
                  {caseStudy.tags?.map((tag) => (
                    <li
                      key={tag}
                      className={styles['work-detail__tag-list-item']}
                    >
                      <Badge shape="pill" size="small" color="secondary">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={5} xxl={4}>
                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Other contributors
                </Type>
                <Type className={styles['work-detail__detail']}>
                  {caseStudy.contributors?.join(', ')}
                </Type>

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
                  {caseStudy.awards?.map((award) => (
                    <li
                      key={award.title}
                      className={styles['work-detail__awards-list-item']}
                    >
                      <Button appearance="link" renderAs="a" href={award.url}>
                        {award.title}
                      </Button>
                    </li>
                  ))}
                </ul>

                <Type
                  renderAs="h2"
                  appearance="h4"
                  className={styles['work-detail__information-title']}
                >
                  Year
                </Type>
                <Type className={styles['work-detail__detail']}>
                  {caseStudy.year}
                </Type>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <Container>
            <Row>
              {caseStudy.imagesDesktop.map((image, i) => (
                <Col sm={12} key={`image-${i}`}>
                  <Image
                    className={styles['work-detail__screenshot']}
                    sources={image.image}
                    alt={image.alt}
                  />
                </Col>
              ))}
            </Row>
            <Row>
              <Video
                className={styles['work-detail__video']}
                src={caseStudy.video?.url}
                poster={caseStudy.video?.poster.image[0]['2x']}
                controls
                playsInline
              />
            </Row>
          </Container>
        </div>
      </Section>
    </main>
  );
};

export default WorkDetail;
