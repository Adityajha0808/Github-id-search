import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.avatar_url} alt="Avatar" />

      <div className="grid-container">
        <div className="grid-item">
          <div>Repositories</div>
          <div className="grid-value">{props.public_repos}</div>
        </div>
        <div className="grid-item">
          <div>Followers</div>
          <div className="grid-value">{props.followers}</div>
        </div>
        <div className="grid-item">
          <div>Following</div>
          <div className="grid-value">{props.following}</div>
        </div>
      </div>

      <div className="card-text">
        <div className="card-name">{props.name}</div>
        {props.blog === "" ? (
          <div className="card-details">Website:- N/A</div>
        ) : (
          <div className="card-details">
            Website:- <a href={props.blog}>{props.blog}</a>
          </div>
        )}

        <div className="card-details">
          GitHub Id:- <a href={props.html_url}>{props.html_url}</a>
        </div>
        <div className="card-location">{props.location}</div>
      </div>
    </div>
  );
}

export default Card;
