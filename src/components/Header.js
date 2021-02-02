import React from "react";
const HeaderLogo = () => {
  return (
    <div className="Header-logo">
      <a href="https://www.nocibe.fr">
        <img src="./assets/images/logo.png" alt="logo" />
      </a>
    </div>
  );
};
const HeaderImage = () => {
  return (
    <div className="Header-image">
      <div className="Header-image-left">
        <img src="./assets//images/header_1.png" alt="header_1" />
      </div>
      <div className="Header-image-right">
        <img src="./assets//images/header_2.png" alt="header_2" />
        <img src="./assets//images/header_3.png" alt="header_3" />
      </div>
    </div>
  );
};
const HeaderBelle = () => {
  return (
    <div className="Header-belle">
      <div className="Etape-row">
        <div className="Header-belle-img">
          <img src="./assets/images/header_2_mobile.png" alt="header_2mobile" />
        </div>
        <div className="Header-belle-text">
          <h3 className="Header-belle-text-header">
            Belle
            <br className="break-mobile" />
            &agrave; tout &acirc;ge
          </h3>
          <p className="Header-belle-text-desc">
            Quels soins anti-&acirc;ge
            <br className="break-mobile" />
            pour votre peau&nbsp;?
          </p>
        </div>
      </div>
    </div>
  );
};
const HeaderActorList = () => {
  return (
    <div className="Header-actorList">
      <a href="https://www.nocibe.fr" className="Header-actorList-item">
        <div className="Header-actorList-item-img">
          <img src="./assets/images/belle_1.png" alt="belle_1" />
        </div>
        <h4 className="Header-actorList-item-title">Trentaine :</h4>
        <p className="Header-actorList-item-desc">
          le cap
          <br className="break-mobile" />
          des 30 ans.
        </p>
      </a>
      <a href="https://www.nocibe.fr" className="Header-actorList-item">
        <div className="Header-actorList-item-img">
          <img src="./assets/images/belle_2.png" alt="belle_2" />
        </div>
        <h4 className="Header-actorList-item-title">Quarantaine :</h4>
        <p className="Header-actorList-item-desc">
          une beaut&eacute;
          <br className="break-mobile" />
          toute en force.
        </p>
      </a>
      <a href="https://www.nocibe.fr" className="Header-actorList-item">
        <div className="Header-actorList-item-img">
          <img src="./assets/images/belle_3.png" alt="belle_3" />
        </div>
        <h4 className="Header-actorList-item-title">Cinquantaine :</h4>
        <p className="Header-actorList-item-desc">
          plus &eacute;panouie
          <br className="break-mobile" />
          que jamais.
        </p>
      </a>
      <a href="https://www.nocibe.fr" className="Header-actorList-item">
        <div className="Header-actorList-item-img">
          <img src="./assets/images/belle_4.png" alt="belle_4" />
        </div>
        <h4 className="Header-actorList-item-title">Soixantaine :</h4>
        <p className="Header-actorList-item-desc">
          plus assum&eacute;e
          <br className="break-mobile" />
          que jamais.
        </p>
      </a>
    </div>
  );
};
const Header = () => {
  return (
    <div className="Header">
      <div className="Header-container Container">
        <HeaderLogo />
        <HeaderImage />
        <HeaderBelle />
        <HeaderActorList />
      </div>
    </div>
  );
};

export { Header };
