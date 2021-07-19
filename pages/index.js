import Head from "next/head";
import Layout from "../layout";
import { Provider } from "../context";
import Navigation from "../navigation";
import Preview from "../components/Preview";
import styles from "../styles/Main.module.css";

export default function Main() {
  return (
    <Layout>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Provider>
        <Navigation />
        <main className={styles.main}>
          <Preview />
        </main>
      </Provider>
    </Layout>
  );
}
