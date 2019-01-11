import React from 'react';
import './SecondMenu.css';

const SecondMenu = ({ hidden, onMenuItemClick }) => (
  <React.Fragment>
    <div className={hidden ? "menu_box" : "visible menu_box"}>
      <div className="triangle-with-shadow"></div>
      <div className="menu-container">
        <ul className="left-list list">
          <li onClick={onMenuItemClick}>目标进度</li>
          <li onClick={onMenuItemClick}>联络簿</li>
          <li onClick={onMenuItemClick}>注意事项</li>
        </ul>
        <ul className="right-list list">
          <li onClick={onMenuItemClick}>目标进度</li>
          <li onClick={onMenuItemClick}>任务清单</li>
        </ul>
      </div>
    </div>
  </React.Fragment>
);

export default SecondMenu;
