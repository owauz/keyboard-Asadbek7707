import search from "../../../public/assets/search.svg";

import "./Main.scss";

export default function Main(props) {
  let { value, setValue, onSubmit } = props;

  return (
    <form className="item-line" onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <img src={search} alt="no photo" />
    </form>
  );
}
