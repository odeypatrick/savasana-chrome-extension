import React from "react";
import "./popup.css"; // Assuming you are using a CSS file for styling

const Popup = () => {
  return (
    <div className="popup-container inria-sans-bold-regular">
      {/* Profile and Logo Section */}
      <header className="header">
        <div className="logo">
          <h1>Savasana AI</h1>
        </div>
        <div className="profile-section">
          <img className="notification-icon" src="https://static.vecteezy.com/system/resources/previews/010/366/215/non_2x/bell-icon-transparent-notification-free-png.png" alt="Notification" />
          <img className="profile-picture" src="https://static.vecteezy.com/system/resources/thumbnails/041/642/170/small/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png" alt="User Profile" />
        </div>
      </header>

      {/* Engagement Rate */}
      <div className="engagement-section">
        <h2>Engagement Rate</h2>
        <div className="donut-chart">
          <img
            src="https://cdn1.iconfinder.com/data/icons/charts-and-diagrams-1-1/512/donutchart-512.png"
            alt="Engagement Donut Chart"
            width={250}
          />
        </div>
        <div className="engagement-legend">
          <span className="legend-item twitter">Twitter</span>
          <span className="legend-item instagram">Instagram</span>
          <span className="legend-item others">Others</span>
        </div>
      </div>

      {/* Followers Section */}
      <div className="followers-section">
        <h2>Followers</h2>
        <div className="followers-grid">
          <div className="follower-card">
            <div className="social-block">
            <img
              src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
              alt="Twitter"
              className="social-icon"
            />
            </div>
            <p>Twitter</p>
            <span>768K</span>
          </div>
          <div className="follower-card">
            <div className="social-block">
            <img
              src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-512.png"
              alt="Instagram"
              className="social-icon"
            />
            </div>
            <p>Instagram</p>
            <span>500K</span>
          </div>
          <div className="follower-card">
            <div className="social-block">
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/TikTok-logo-PNG-medium-size.png"
              alt="Tiktok"
              className="social-icon"
            />
            </div>
            <p>Tiktok</p>
            <span>1M</span>
          </div>
          <div className="follower-card">
            <div className="social-block">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
              alt="Youtube"
              className="social-icon"
            />
            </div>
            <p>Youtube</p>
            <span>1.5M</span>
          </div>
        </div>
      </div>

      {/* Schedule and New Post Buttons */}
      <div className="post-buttons">
        <button className="schedule-button">Schedule Post</button>
        <button className="new-post-button">New Post</button>
      </div>
    </div>
  );
};

export default Popup;
