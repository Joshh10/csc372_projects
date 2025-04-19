import React, {useEffect, useState} from 'react';
import '../../App.css';
import {useNavigate, useLocation} from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user; 

  const [bio, setBio] = useState("");
  const [colorPreference, setColorPreference] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    fetch("https://joshualawson.rhody.dev/get_user_data.php", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ user: user })
    })
      .then(res => res.json())
      .then(data => {
        setBio(data.bio || "");
        setColorPreference(data.color_preference || "");
      })
      .catch(err => {
        console.error(err);
        setMsg("Failed to load profile.");
      });
  }, [user, navigate]);

  const handleSave = () => {
    fetch("https://joshualawson.rhody.dev/update_user_data.php", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        user: user,
        bio: bio,
        color_preference: colorPreference
      })
    })
      .then(res => res.json())
      .then(response => {
        setMsg(response.message || "Profile saved!");
      })
      .catch(err => {
        console.error(err);
        setMsg("Failed to save.");
      });
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="form">
      <h3>Dashboard</h3>

      <label>Bio</label>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        rows={3}
        placeholder="Write something about yourself..."
      />

      <label>Favorite Color</label>
      <select
        value={colorPreference}
        onChange={(e) => setColorPreference(e.target.value)}
      >
        <option value="">Select one</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </select>

      <div style={{ marginTop: '10px' }}>
        <button onClick={handleSave}>Save Profile</button>
        <button onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</button>
      </div>

      {msg && <p className="success">{msg}</p>}
    </div>
  );
}

export default Dashboard;
