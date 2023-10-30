import React from "react";
import { PageButton } from "../Buttons";
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

export const Pagination = ({ currentPage, setPage, totalPages }) => {

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className="flex items-center justify-center gap-4 my-4">
      <PageButton
        buttonClick={handlePrev}
        icon={<NavigateBeforeRoundedIcon/>}
      />
        {currentPage} of {500 || totalPages}
      <PageButton
        buttonClick={handleNext}
        icon={<NavigateNextRoundedIcon/>}
      />
    </div>
  );
};