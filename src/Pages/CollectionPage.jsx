import AllProducts from "../Components/AllProducts";
import Banner from "../Components/Banner";

const CollectionPage = ({ collection }) => {
  
  return (
    <>
       <Banner concept={collection} />
       <AllProducts collection={collection} />
    </>
  )
}

export default CollectionPage;
