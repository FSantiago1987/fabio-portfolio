import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuItems(props) {
  return (
    <div className="MenuItems">
      {props.menuItems.map((item) => {
        return (
          <div className="portfolios" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link1} target="_blank" className="item-icon">
                    <FontAwesomeIcon
                      icon={item.icon1}
                      className="item-icon gh-icon left-item"
                    />
                  </a>
                  <a href={item.link2} target="_blank" className="item-icon">
                    <FontAwesomeIcon
                      icon={item.icon2}
                      className="item-icon ie-icon right-item"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
