import React from 'react';
import ProfileManager from './components/ProfileManager';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Prototype Pattern Profile Manager</h1>
                <p>Create and Clone Profiles using Prototype Pattern.</p>
            </header>
            <main>
                <ProfileManager />
            </main>
        </div>
    );
}

export default App;
