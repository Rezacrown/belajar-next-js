"use client"

import '../global.css'
import Link  from 'next/link';
import Navigation from './components/navigation';
import Main from './components/main';


export default function Home() {
  return (
    <div className="">
      <Navigation/>
      <Main/>
    </div>
  );
}
