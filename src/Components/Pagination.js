import { ReactComponent as NextIcon } from "./Stylesheets/arrow-right.svg";
import "./Stylesheets/Pagination.css";

const Pagination = ({ setPage, page }) => {
  return (
    <div className="pagination">
      <div className="flex-center flex-align-center">
        <img
          src="./pagination.png"
          alt="GOOGLE Pagination Logo"
          height="50px"
        />
        <NextIcon />
      </div>
      <div className="pagination-pages">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <span
            key={item}
            className={
              page === item
                ? ""
                : "cursor-pointer hover-underline pagination-page"
            }
            style={{ marginRight: "12px" }}
            onClick={(e) => setPage(e.target.innerText)}
          >
            {item}
          </span>
        ))}
        <span
          style={{ marginLeft: "45px" }}
          className="cursor-pointer hover-underline pagination-page"
          onClick={() => setPage((page) => page + 1)}
        >
          Next
        </span>
      </div>
    </div>
  );
};

export default Pagination;
