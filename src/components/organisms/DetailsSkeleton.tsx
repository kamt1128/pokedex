import { SkeletonBlock } from "../atoms/SkeletonBlock";
import "../../styles/details.css";

export const DetailsSkeleton = () => {

  const lightenBackground = "color-mix(in srgb, #999999 70%, transparent)";

  return (
    <div className="container">
      <div className="details-page" style={{ backgroundColor: lightenBackground }}>
        <img className="background-image" src="/src/assets/background-pokeball.svg" alt="Background Pokeball" />
        <div className="header-page">
          <SkeletonBlock width="24px" height="24px" />
          <SkeletonBlock width="225px" height="32px" />
          <SkeletonBlock width="32px" height="16px" />
        </div>
        <div className="image-container">
          <div className="picture">
            <SkeletonBlock width="175px" height="175px" />
          </div>
        </div>
        <br />
        <div className="details-card">
            <div className="chips-abilities">
              <SkeletonBlock width="50px" height="20px" radius="10px" />
              <SkeletonBlock width="50px" height="20px" radius="10px" />
            </div>
            <div className="about-info">
              <SkeletonBlock width="100px" height="16px" />
              <div className="about-info-grid">
                <SkeletonBlock width="100px" height="66px" />
                <SkeletonBlock width="100px" height="66px" />
                <SkeletonBlock width="100px" height="66px" />
              </div>
              <p className="about-info__description">
                <SkeletonBlock width="312px" height="40px" />
              </p>
              <div className="base-stats">
                <SkeletonBlock width="100px" height="16px" />
                <div className="base-stats-list">
                  <SkeletonBlock width="312px" height="96px" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
