import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import UserSettings from './components/UserSettings';
import Timer from './components/Timer';
import TodoList from './components/TodoList';
import Calendar from './components/Calendar';
import Workspace from './components/Workspace';
import Notes from './components/Notes';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'calendar', 'notes', etc.

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };

  const renderMainContent = () => {
    switch (currentView) {
      case 'calendar':
        return <Calendar />;
      case 'notes':
        return <Notes />;
      case 'todo':
        return <TodoList />;
      case 'workspace':
        return <Workspace />;
      default:
        return <ContentArea />;
    }
  };

  if (showSettings) {
    return <UserSettings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="flex h-screen bg-[#fbfbfa]">
      <Sidebar 
        onUserClick={toggleSettings} 
        onViewChange={setCurrentView}
        currentView={currentView}
      />
      <main className="flex-1 ml-60 overflow-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {renderMainContent()}
        </div>
        {showTimer && (
          <div className="fixed bottom-4 right-4 w-80">
            <Timer type="focus" initialMinutes={25} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;