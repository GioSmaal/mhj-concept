import Head from 'next/head'
import { Fragment } from 'react';
import React from 'react';
import NavBar from '../components/navbar';

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <h1>hi</h1>
    </Fragment>
  )
}
