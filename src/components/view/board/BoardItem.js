import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './../../../styles/layouts/view/board/board-item.css';

import ArticleInfo from './ArticleInfo';

/*
export default function BoardItem(props) {
  return (
    <li className="notice-list-item">
      <a href="/">
        <p>
          <span class="menu-color">{props.menu}</span>
          {props.title}
          <span className="new-icon"></span>
        </p>
        <div className="thumb">
          <img className="thumb-img" src={props.thumb} alt="주요소식 안내드립니다" />
        </div>
        <div className="comment">
          <i class="far fa-comment-dots comment-icon"></i>
          <p class="comment-number">{props.cm}</p>
        </div>
      </a>
      <ArticleInfo eye={props.eye} like={props.like} date={props.date}></ArticleInfo>
    </li>
  );
}*/

function BoardItem({ uploadId, index, category, title, comment, views, heart, date, username }) {
  return (
    <li key={index} className="notice-list-item">
      <Link to={`/board_view/${uploadId}`}>
        <p>
          <span class="menu-color">[{category}]</span>
          {title}
          <span className="new-icon"></span>
        </p>
        <div className="thumb">
          <img className="thumb-img" alt="주요소식 안내드립니다" />
        </div>
        <div className="comment">
          <i class="far fa-comment-dots comment-icon"></i>
          <p class="comment-number">{comment}</p>
        </div>
      </Link>
      <ArticleInfo views={views} heart={heart} date={date} username={username}></ArticleInfo>
    </li>
  );
}

export default withRouter(BoardItem);
