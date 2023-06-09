import React from 'react'

const Skill = ({language, percentage}) => {
    return (
      <div class="skill">
        <p>{language}</p>
        <div class="skill-container">
          <div class="skill-value"></div>
          <p class="skill-text">{percentage}</p>
        </div>
      </div>
    );
}

export default Skill
