import React = require("react");

export function ReactPageTastic({ onPageChange, totalCount, siblingCount, currentPage, pageSize, classNamePrefix, leftArrow, rightArrow, }: {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount: number;
    currentPage: number;
    pageSize: number;
    classNamePrefix: string;
    leftArrow: React.JSX.Element;
    rightArrow: React.JSX.Element;
}): import("react").JSX.Element;
