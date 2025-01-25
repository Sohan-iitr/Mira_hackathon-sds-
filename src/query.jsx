import React, { useState } from "react";

const PROMPT = () => {
  const [duration, setDuration] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = () => {
    if (duration && genre) {
      alert(`You selected a ${genre} podcast for ${duration} minutes.`);
    } else {
      alert("Please provide both the duration and genre of the podcast.");
    }
  };

  return (
    <div id="prompt" style={{ padding: "1.5rem", backgroundColor: "#E8C076", borderRadius: "0.75rem", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", maxWidth: "400px", margin: "auto" }}>
      <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem" }}>Select Your Podcast Preferences</h1>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem" }} htmlFor="duration">
          Duration (in minutes):
        </label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter duration"
          style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #d1d5db" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem" }} htmlFor="genre">
          Genre:
        </label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #d1d5db" }}
        >
          <option value="" disabled>Select genre</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Comedy">Comedy</option>
          <option value="Music">Music</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        style={{ width: "100%", backgroundColor: "#3b82f6", color: "white", fontWeight: "bold", padding: "0.5rem", borderRadius: "0.375rem", border: "none", cursor: "pointer" }}
      >
        Submit
      </button>
    </div>
  );
};

export default PROMPT;
