import React from "react";
const Title = ({ children }) => {
  return <h3 className="Banner-text-title">{children}</h3>;
};
Title.displayName = "Title";
const Description = ({ children }) => {
  return <p className="Banner-text-desc">{children}</p>;
};
Description.displayName = "Description";
const Image = ({ srcDesk, srcMobile }) => {
  return (
    <>
      <img src={srcDesk} alt="banner" />
      <img src={srcMobile} alt="banner" />
    </>
  );
};
Image.displayName = "Image";
const Banner = ({ children }) => {
  return (
    <div className="Banner">
      <div className="Banner-container Container">
        {React.Children.map(children, (child) => {
          if (child.type.name === "Image") {
            return child;
          }
        })}

        <div className="Banner-textOverlay">
          <div className="Banner-text">
            {React.Children.map(children, (child) => {
              if (
                child.type.name === "Title" ||
                child.type.name === "Description"
              ) {
                return child;
              }
            })}
          </div>
          <div className="Banner-img"></div>
        </div>
      </div>
    </div>
  );
};
Banner.Title = Title;
Banner.Description = Description;
Banner.Image = Image;

export { Banner };
