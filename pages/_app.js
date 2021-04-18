import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import { ThemeProvider } from "next-themes";

function ProjectY({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default ProjectY
