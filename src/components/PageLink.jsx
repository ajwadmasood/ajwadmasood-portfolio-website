import React from 'react'

const PageLink = ({link}) => {
    return (
      <li>
        <a href={link}>{link}</a>
      </li>
    );
}

export default PageLink
