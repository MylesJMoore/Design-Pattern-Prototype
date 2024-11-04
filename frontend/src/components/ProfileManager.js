import React, { useState } from 'react';
import axios from 'axios';

function ProfileManager() {
    const [profile, setProfile] = useState({ name: '', email: '', age: '' });
    const [profileId, setProfileId] = useState('');

    const createProfile = async () => {
        try {
            await axios.post('http://localhost/prototype-pattern/index.php?action=create', profile, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            alert("Profile created!");
        } catch (error) {
            console.error("Error creating profile:", error);
            alert("Failed to create profile");
        }
    };

    const cloneProfile = async () => {
        try {
            await axios.post('http://localhost/prototype-pattern/index.php?action=clone', { id: profileId }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            alert("Profile cloned!");
        } catch (error) {
            console.error("Error cloning profile:", error);
            alert("Failed to clone profile");
        }
    };

    return (
        <div>
            <h2>Create Profile</h2>
            <input placeholder="Name" onChange={(e) => setProfile({...profile, name: e.target.value})} />
            <input placeholder="Email" onChange={(e) => setProfile({...profile, email: e.target.value})} />
            <input placeholder="Age" type="number" onChange={(e) => setProfile({...profile, age: e.target.value})} />
            <button onClick={createProfile}>Create Profile</button>

            <h2>Clone Profile</h2>
            <input placeholder="Profile ID" onChange={(e) => setProfileId(e.target.value)} />
            <button onClick={cloneProfile}>Clone Profile</button>
        </div>
    );
}

export default ProfileManager;
