import React from "react";
import { footerData } from "../../data/data";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footerWrapper">
      {footerData.info.map((infoItem, infoIndex) => {
        return (
          <div key={`info-${infoIndex}`} className="left">
            <h3>{infoItem.touch}</h3>
            <div>
              {infoItem.socialIcons.map((iconItem, iconIndex) => {
                return (
                  <img
                    key={`icon-${infoIndex}-${iconIndex}`}
                    src={iconItem.icon}
                    alt="socialicons"
                    className="socialIcons"
                  />
                );
              })}
            </div>
            <span>{infoItem.experience}</span>
            <span>{infoItem.power}</span>
            <div>
              {infoItem.mobileIcon.map((mobileItem, mobileIndex) => {
                return (
                  <img
                    key={`mobileicon-${infoIndex}-${mobileIndex}`}
                    src={mobileItem.icon}
                    alt="mobileicons"
                    className="mobileIcons"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      {footerData.links.map((linkGroup, linkGroupIndex) => {
        return (
          <div key={`title-${linkGroupIndex}`} className="right">
            <h3 className="name">{linkGroup.name}</h3>
            {linkGroup.linkitems.map((linkItem, linkItemIndex) => {
              return (
                <React.Fragment
                  key={`links-${linkGroupIndex}-${linkItemIndex}`}
                >
                  <a className="links" href={linkItem.url}>
                    {linkItem.title}
                  </a>
                  {linkItemIndex !== linkGroup.linkitems.length - 1 && (
                    <span className="seperator">|</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
