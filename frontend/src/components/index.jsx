import React from 'react';
import NavBar from '../components/reusable/NavBar';
import MainSidebar from '../components/reusable/Sidebar/MainSidebar';
import Footer from '../components/reusable/Footer';
import MainContent from './reusable/content/MainContent';



export default function main() {
  return (
    <div>
      <NavBar />
      <MainContent />
      <MainSidebar />
     
      <Footer />
    </div>
  )
}


