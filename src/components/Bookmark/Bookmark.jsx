import { PropTypes } from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { name } = bookmark;
  return (
    <div>
      <li className="text-xl text-green-500">{name}</li>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
