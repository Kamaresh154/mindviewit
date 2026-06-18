import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { ServiceTabs, ParentTabId, SubTabId } from './components/ServiceTabs';

const App: React.FC = () => {
  // Navigation State
  const [activeParentTab, setActiveParentTab] = useState<ParentTabId>('ukg');
  const [activeSubTab, setActiveSubTab] = useState<SubTabId>('why-mindview');

  // Handle Navigation from Navbar or Internal Links
  const handleNavigate = (tabId: string) => {
    // Map Navbar IDs to SubTab IDs if they match, or handle specific sections
    if (tabId === 'why-mindview' || tabId === 'services' || tabId === 'insights' || tabId === 'case-studies') {
      // Ensure we are on the UKG parent tab for these main sections (for now)
      // In a full implementation, you might check which parent tab owns the sub-tab
      if (activeParentTab !== 'ukg') {
        setActiveParentTab('ukg');
      }
      setActiveSubTab(tabId as SubTabId);
      
      // Scroll to top of tabs container
      const tabsElement = document.getElementById('tabs-container');
      if (tabsElement) {
        tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (tabId === 'contact') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Fallback for home or other IDs
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <Navbar activeTab={activeSubTab} setActiveTab={handleNavigate} />
      <main className="flex-grow pt-24">
        {/* Hierarchical Tabbed Content Area - Moved to Top */}
        <ServiceTabs 
          activeParent={activeParentTab} 
          setActiveParent={setActiveParentTab}
          activeSubTab={activeSubTab} 
          setActiveSubTab={setActiveSubTab}
          onNavigate={handleNavigate}
        />
        
        {/* Contact is global, stays at bottom */}
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;