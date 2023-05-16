import "./content.scss";

// components
import ContentHeader from "./ContentHeader";
import ContentMenu from "./ContentMenu";
import Listings from "./Listings/Listings";

type Props = {};
function Content({}: Props) {
  return (
    <section className="content">
      <ContentHeader />
      <ContentMenu />
      <Listings />
    </section>
  );
}

export default Content;
