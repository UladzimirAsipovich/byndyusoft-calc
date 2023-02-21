import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Calculator from '@/widgets/calculator';
import InitialData from '@/widgets/calculator/model/Calculator.model';
import type { NextPage } from 'next';
import type { I_CalculatorProps } from '@/widgets/calculator/model/Calculator.types';
import { useState } from 'react';

const Home: NextPage<I_CalculatorProps> = ({ calculatorControls }) => {
  const [initialData] = useState<typeof calculatorControls>(calculatorControls);

  return (
    <>
      <Head>
        <title>Create Next Calculator</title>
        <meta name='description' content='Create Next Calculator' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Calculator calculatorControls={initialData} />
      </main>
    </>
  );
};

export default Home;

Home.getInitialProps = () => {
  return { calculatorControls: InitialData };
};
