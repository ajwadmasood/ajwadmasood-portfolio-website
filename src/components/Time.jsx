import React from 'react'

const Time = ({time, text, id}) => {
    return (
      <article class="timeline-item">
        <h4>{time}</h4>
        <p>
          {text}
        </p>
        <span class="number">{id}</span>
      </article>
    );
}

export default Time
