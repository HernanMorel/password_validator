'use client';
import Head from 'next/head';
import { Typography, Row, Col, Skeleton } from 'antd';

import { useHomeLogic } from '@/hooks/useHomeLogic';
import DynamicCarouselCard from '@/components/molecules/DynamicCarouselCard';

import classes from '@/styles/Home.module.css';
import { data } from '../utils/appData';

const { Title } = Typography;

export default function Home() {
  const { loading } = useHomeLogic();
  return (
    <>
      <Head>
        <title>Super Awesome Password Validator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <Row>
          <Col>
            <Title level={1} className={classes.title}>
              Super Awesome Password Validator
            </Title>
            <Skeleton.Node active={loading} className={classes.preloadSkeleton}>
              <DynamicCarouselCard data={data} loading={loading} />
            </Skeleton.Node>
          </Col>
        </Row>
      </main>
    </>
  );
}
