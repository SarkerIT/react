import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Chapter from "../Chapter/Chapter";

const Chapters = ({ handleAddToBookmark, handleMarkAsReadTime }) => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch("./chapters.json")
      .then((res) => res.json())
      .then((data) => setChapters(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold  p-10">
        There are {chapters.length} chapters in this course.
      </h1>
      {chapters.map((chapter) => (
        <Chapter
          key={chapter.id}
          chapter={chapter}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsReadTime={handleMarkAsReadTime}
        ></Chapter>
      ))}
    </div>
  );
};

Chapters.propTypes = {
  //   chapters: PropTypes.array,
  //   setChapters: PropTypes.func,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsReadTime: PropTypes.func,
};

export default Chapters;
