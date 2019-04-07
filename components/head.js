import React from 'react';
import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>test-next</title>
    <meta name="description" content="simple test-next app" />
    <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet"/>
    {/* <link rel="stylesheet" href="/static/App.css" />
    <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="static/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="static/favicon_32.png" sizes="32x32" />
    <link rel="icon" href="static/favicon_48.png" sizes="48x48" />
    <link rel="icon" href="static/favicon_96.png" sizes="96x96" />
    <link rel="icon" href="static/favicon_144.png" sizes="144x144" /> */}
  </NextHead>
);

export default Head;
