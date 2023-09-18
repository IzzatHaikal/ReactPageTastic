import clsx from "clsx";
import { usePagination, DOTS } from "./usePagination";

/**
 * @param {function} onPageChange - Function to call when page is changed
 * @param {number} totalCount - Total number of items
 * @param {number} [siblingCount=1] - Number of siblings to show (optional, default is 1)
 * @param {number} currentPage - Current page
 * @param {number} pageSize - Number of items per page
 * @param {string} [classNamePrefix=''] - To override all pagination styling (optional,  default is empty string)
 * @param {JSX.Element} [leftArrow] - To override left arrow (optional)
 * @param {JSX.Element} [rightArrow] - To override right arrow (optional)
 */
export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  classNamePrefix = "",
  leftArrow,
  rightArrow,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={classNamePrefix + "pagination-container"}>
      <li
        className={clsx(classNamePrefix + "pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        {leftArrow ? (
          leftArrow
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            fill="none"
            className={clsx(classNamePrefix + "arrow", {
              disabled: currentPage === 1,
            })}
            onClick={onPrevious}
            viewBox="0 0 24 24"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={index}
              className={classNamePrefix + "pagination-item dots"}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={clsx(classNamePrefix + "pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={clsx(classNamePrefix + "pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        {rightArrow ? (
          rightArrow
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            fill="none"
            className={clsx(classNamePrefix + "arrow", {
              disabled: currentPage === lastPage,
            })}
            onClick={onPrevious}
            viewBox="0 0 24 24"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </li>
    </ul>
  );
}
