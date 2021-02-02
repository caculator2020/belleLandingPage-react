import React from "react";

export const EtapeWrapper = ({ children }) => {
  return (
    <div className="Etape">
      <div className="Etape-container Container">{children}</div>
    </div>
  );
};

export const EtapeRow = ({ className, children, id }) => {
  return (
    <div className={className ? "Etape-row " + className : "Etape-row"}>
      {children}
    </div>
  );
};

export const EtapeCol = ({ children }) => {
  return <div className={`Etape-col`}>{children}</div>;
};
export const EtapeImg = ({ src, alt = "etape", children }) => {
  return (
    <div className="Etape-img">
      <img src={src} alt={alt} />
      {children}
    </div>
  );
};
export const EtapeBtn = ({ children }) => {
  return <div className="Etape-btn-red">{children}</div>;
};
export const EtapeSubHeader = ({ children }) => {
  return <div className="Etape-subHeader">{children}</div>;
};
export const EtapeTitle = ({ children }) => {
  return <div className="Etape-title">{children}</div>;
};
export const EtapeDesc = ({ children }) => {
  return <p className="Etape-desc">{children}</p>;
};
export const LinkBtn = ({
  children,
  href = "https://www.google.com",
  title = "title",
}) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      title={title}
      href={href}
      className="Etape-btn-black"
    >
      {children}
    </a>
  );
};
