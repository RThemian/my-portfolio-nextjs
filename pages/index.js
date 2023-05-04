import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import ProjectCard from '@/components/ProjectCard';
import projectData from '@/public/project-data';

console.log(projectData)

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Daniel Scott's Portfolio Page</title>
        <meta name="description" content="Welcome to Daniel Scott's Portfolio Page; this is a site to showcase skills and projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} ${styles.homeMain}`}>
        <section className={styles.pageSection}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Libero, unde? Odit, maiores aliquid est, saepe fugit veniam 
            pariatur magni quasi itaque dolorum sunt repudiandae adipisci, 
            iste expedita voluptatem corporis unde.
          </p>
        </section>
        <section className={styles.pageSection}>
          <h2>Skills</h2>
        </section>
        <section className={styles.pageSection}>
          <h2>Projects</h2>
          <div className={styles.projectsWrapper}>
            {
              projectData.map((project, index) => {
                return (
                  <ProjectCard 
                    src={project.src} 
                    title={project.title} 
                    key={index} 
                  />
                )
              })
            }
          </div>
        </section>
        <section className={styles.pageSection}>
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}
