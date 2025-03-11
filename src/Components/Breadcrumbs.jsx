import { useNavigate } from "react-router-dom";

const Breadcrumbs = ({ name, category, collection }) => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center mt-6 text-black gap-x-2 tracking-wide">
        <div className="cursor-pointer hover:text-zinc-600" onClick={() => navigate("/")}>Ana Sayfa</div>
        <div>/</div>
        <div className="cursor-pointer hover:text-zinc-600" onClick={() => navigate(`/${collection}`)}>{collection}</div>
        <div>/</div>
        {category === "Topuklu Ayakkabı" ? <><div className="cursor-pointer hover:text-zinc-600" onClick={() => navigate("/topuklu-ayakkabı")}>{category}</div>
        <div>/</div></> : <><div className="cursor-pointer hover:text-zinc-600" onClick={() => navigate(`/${category}`)}>{category}</div>
        <div>/</div></> }
        <div className="text-zinc-600">{name}</div>
    </div>
  )
}

export default Breadcrumbs;
