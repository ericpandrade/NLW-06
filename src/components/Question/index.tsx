import React from "react";
import cx from "classnames";

import "./style.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: React.ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Questions({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <div
      className={cx(
        "question",
        {
          answered: isAnswered,
        },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div className="like-button">{children}</div>
      </footer>
    </div>
  );
}
