import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: 'joseph',
    comment: '재미있는 리액트'
  },
  {
    name: 'david',
    comment: '너무 재미나요'
  },
  {
    name: 'jacob',
    comment: '리액트 활용법'
  },
]

function CommentList(props) {
  return (
    <div>
      <Comment name="Joseph" comment="재미있어요" />
      <Comment name="David" comment="리액트 컴포넌트" />
      <div style={{width:"100vw", height: "3px", backgroundColor: "#ddd"}}></div>
      {
        comments.map((comment)=>{
          return <Comment name={comment.name} comment={comment.comment} />
        })
      }
    </div>
  );
}

export default CommentList;