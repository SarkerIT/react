import { PropTypes } from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-full mb-2">
      <div className="">
        <h3 className="text-3xl font-bold text-violet-600 mb-16 w-full bg-gray-100 rounded-xl p-4">
          Total Time Read: {readingTime}
        </h3>
      </div>
      <div>
        <h2 className="text-2xl font-bold">
          Bookmarked Chapters: {bookmarks.length}
        </h2>
      </div>
      <hr className="border border-blue-200 my-4" />
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
