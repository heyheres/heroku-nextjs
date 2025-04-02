import React from 'react';
import Head from 'next/head';
import Logo from '../components/logo';

export default () => (
  <div className="container">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Next.js on Heroku</title>
    </Head>

    <style jsx>{`
      .container {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 2rem;
        text-align: center;
        background-color: #f4f7fa;
      }

      h1 {
        color: #333;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }

      h1 svg {
        height: 2rem;
        width: auto;
      }

      p {
        font-size: 1.125rem;
        color: #555;
        max-width: 800px;
        margin: 1rem auto;
        line-height: 1.6;
      }

      a {
        color: #0070f3;
        text-decoration: none;
        font-weight: 600;
      }

      a:hover {
        text-decoration: underline;
      }

      .highlight {
        font-weight: bold;
        color: #0070f3;
      }

      @media (min-width: 600px) {
        .container {
          margin: 0 10vw;
        }
      }

      .footer {
        margin-top: 2rem;
        font-size: 0.875rem;
        color: #aaa;
      }
    `}</style>

    <h1>
      <Logo style={{ height: '2rem' }} />
      Next.js on Heroku
    </h1>

    <p>
      Deploy <a href="https://nextjs.org/">Next.js</a> universal web apps on{' '}
      <a href="https://www.heroku.com/home">Heroku</a>.
    </p>

    <p>
      This <span className="highlight">demo deployment on Heroku</span> is from the repo{' '}
      <a href="https://github.com/mars/heroku-nextjs">mars/heroku-nextjs</a>.
    </p>

    <p>
      <a href="https://github.com/mars/heroku-nextjs/archive/master.zip">Download this Next.js app</a> as a Heroku-ready template, or follow{' '}
      <a href="https://github.com/mars/heroku-nextjs#production-deployment">Production Deployment</a> to push an existing app to Heroku.
    </p>

    <div className="footer">
      <p>Built with ❤️ using Next.js and Heroku</p>
    </div>
  </div>
);
