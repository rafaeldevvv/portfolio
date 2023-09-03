import React from "react";

export default function PercentageList({ items }) {
  return (
    <ul className="percentage-list">
      {items.map((i) => {
        return (
          <li key={i.name}>
            <p className={`item-name`}>{i.name}</p>
            <div className={`percentage-and-button`}>
              <PercentageBar percentage={i.percentage} />
            </div>
            {i.level && (
              <p className="level">
                <span className="sr-only">Level: </span>
                {i.level}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function PercentageBar({ percentage }) {
  return (
    <div className="percentage-container">
      <div
        className="percentage"
        style={{ width: `${percentage}%` }}
        aria-hidden="true"
      />
      <span className="sr-only">Percentage: {percentage}%</span>
    </div>
  );
}