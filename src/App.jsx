import { useState } from "react";
import "./App.css";
// import PropTypes from "prop-types";

//

import Chapters from "./components/Chapters/Chapters";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  // handle bookmark
  const [bookmarks, setBookmarks] = useState([]);

  // event-handler for bookmarks
  const handleAddToBookmark = (chapter) => {
    const newBookmarks = [...bookmarks, chapter];
    setBookmarks(newBookmarks);
  };

  // handle time
  const [readingTime, setReadingTime] = useState(0);

  // event handler for time
  const handleMarkAsReadTime = (time) => {
    console.log("marking as read", time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    console.log("marking as read", newReadingTime);
  };

  // return
  return (
    <>
      <div className="mx-auto p-16 items-center justify-center">
        <div className="p-10 ">
          <h1 className="text-4xl font-bold text-red-40">A&P Chapters</h1>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <Chapters
              handleAddToBookmark={handleAddToBookmark}
              handleMarkAsReadTime={handleMarkAsReadTime}
            ></Chapters>
          </div>

          <div className="grid grid-cols-1 pt-10  bg-gray-200 rounded-xl p-4">
            <div className="">
              <h3 className="w-full bg-gray-100 rounded-xl p-4">
                <Bookmarks
                  bookmarks={bookmarks}
                  readingTime={readingTime}
                ></Bookmarks>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// App.propTypes = {
//   boormarks: PropTypes.array,
//   setBookmarks: PropTypes.func,
//   handleAddToBookmark: PropTypes.func,
// };

export default App;
