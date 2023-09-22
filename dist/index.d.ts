// Type for ReactPageTastic 1.0.0

import React = require("react");

export function ReactPageTastic({ onPageChange, totalCount, siblingCount, currentPage, pageSize, classNamePrefix, leftArrow, rightArrow, }: {
    /**
     * Function that receives the page number when clicked.
     */
    onPageChange: (page: number) => void;

    /**
     * The total number of pages.
     */
    totalCount: number;

    /**
     * The number of pages to display for sibling pages (previous and next to the current page).
     */
    siblingCount: number;

    /**
     * The current page number.
     */
    currentPage: number;

    /**
     * The number of items per page.
     */
    pageSize: number;

    /**
     * The prefix for the class name.
     */
    classNamePrefix: string;

    /**
     * The left arrow element.
     */
    leftArrow: React.JSX.Element;

    /**
     * The right arrow element.
     */
    rightArrow: React.JSX.Element;

}): import("react").JSX.Element;