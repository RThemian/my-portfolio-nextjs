import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Resume(props) {
    return (
        <>
            <Head>
                <title>Resume | Daniel Scott's Portfolio Page</title>
                <meta name="description" content="Check out my resume to learn more about my professional experience" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={inter.className}>
                <section>
                    <h5>Download a copy of this resume <a target="_blank" href="https://docs.google.com/document/d/1bFNvvdmS-85SCRmQzq2xoVmdPxKiWqXSBuDY292wrAs/edit?usp=sharing">here</a></h5>
                </section>
                <h2>Summary</h2>
                <p>
                    I am a self-motivated, hard-working, full-stack software developer 
                    and educator passionate about innovation and technology. 
                    I have excellent communication skills and a proven track record of
                     quickly learning new technologies and adapting to a fast-paced environment. 
                     I seek to thrive with a positive and energetic team to deliver 
                     the highest quality solutions and experiences to my stakeholders and clients.
                </p>
                <hr />
                <h2>Technical Skills</h2>
                <ul>
                    <li><strong>Languages:</strong> JavaScript, Python, HTML5, CSS3</li>
                    <li><strong>Frameworks Libraries:</strong> Gatsby, NextJS, React, jQuery, Bootstrap</li>
                    <li><strong>Databases/Backends:</strong> PostgreSQL, MongoDB, Google Firebase</li>
                    <li><strong>Methodologies:</strong> MVC, RESTful Architecture</li>
                    <li><strong>Tools:</strong> Git, VS Code, Postman</li>
                </ul>
                <hr />
                <h2>Tech-Related Experience</h2>
                <h3>General Assembly Enterprise - Senior Lead Software Engineering Instructor -  Nov 2017 - Present</h3>
                <ul>
                    <li>Successfully mentored and instructed nearly 1000 students to become junior software engineers using a fully immersive program with more than 400 hours of content. Awarded “Distinguished Faculty Member” for exemplary performance and mentorship of junior developers and instructors and inducted as a General Assembly's Product Advisory Board member.</li>
                    <li>Served as a Software Engineering Immersive Product Advisory board member and participated in and managed several campaigns to update the baseline curriculum to its current state; also produced several pre-recorded lectures for General Assembly's blended learning model. </li>
                </ul>
                <hr />
                <h2>Other Experience</h2>
                {/* TODO: add other experience here */}
                <hr />
                <h2>Education</h2>
                <ul>
                    <li><strong>The University of Phoenix</strong>: 04/2011 - 12/2015 - Bachelor of Business Science</li>
                </ul>
            </main>
        </>
    );
}