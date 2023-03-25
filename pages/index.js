import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Padmini</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Mitakshi Deployment</h2>
        <h3>API_URL: {process.env.NEXT_PUBLIC_API_URL}</h3>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Operators &rarr;</h3>
            <p>Find in-depth information about Padmini Operators.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your apps to Padmini Systems k8s platform</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <h2>Padmini Systems</h2>
      </footer>
    </div>
  );
}
