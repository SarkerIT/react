import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

const Chapter = ({ chapter, handleAddToBookmark, handleMarkAsReadTime }) => {
  const {
    id,
    name,
    cover_image,
    author,
    short_description,
    posted_date,
    price,
    hashtags,
    reading_time,
  } = chapter;

  return (
    <div className="card w-5/6 bg-blue-100 shadow-xl my-10 mx-auto p-8 border border-blue-400 ">
      <h2 className="text-2xl font-bold">Chapter: {id}</h2>
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="space-y-2">
        <div className="flex">
          <figure className="w-full my-4">
            <img src={cover_image} alt="chapters" />
          </figure>
          <div className="items-center justify-center m-4">
            Description: {short_description}
          </div>
        </div>
        <div>Author: {author}</div>

        <div className="flex justify-between">
          <p>Date Published: {posted_date}</p>
          <p>{reading_time} min read</p>
        </div>
        <div className="flex justify-between mt-4">
          <div>Price: ${price}</div>
          <button
            className="font-bold  text-violet-400"
            onClick={() => handleMarkAsReadTime(reading_time)}
          >
            <span className="flex items-center gap-1">
              <FaBook /> Mark as read
            </span>
          </button>
        </div>

        <div className="flex justify-between mx-auto">
          <div className="">
            <button className="btn btn-primary">Buy Now</button>
          </div>
          <div>
            <button
              onClick={() => handleAddToBookmark(chapter)}
              className="btn btn-accent btn-outline"
            >
              <FaBookmark></FaBookmark> Bookmark
            </button>
          </div>
        </div>
        <div className="text-sm w-48 text-amber-700">
          {hashtags.map((hash, idx) => (
            <span key={idx}>
              <a href="">#{hash} </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

Chapter.propTypes = {
  chapter: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsReadTime: PropTypes.func,
};

export default Chapter;
