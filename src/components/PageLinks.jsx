import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = () => {
  return (
    <ul class="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} />;
      })}
      ;
    </ul>
  );    
};

export default PageLinks;
