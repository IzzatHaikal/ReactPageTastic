import { useState } from "react";
import PaginationComponent from "./Pagination";
import "./main.scss";

const ReactPageTastic = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
  classNamePrefix,
  leftArrow,
  rightArrow,
}) => {
  return (
    <PaginationComponent
      onPageChange={onPageChange}
      totalCount={totalCount}
      siblingCount={siblingCount}
      currentPage={currentPage}
      pageSize={pageSize}
      classNamePrefix={classNamePrefix}
      leftArrow={leftArrow}
      rightArrow={rightArrow}
    />
  );
};

export { ReactPageTastic };
