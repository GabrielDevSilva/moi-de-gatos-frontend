import { memo } from "react";
import { Pagination } from "react-bootstrap/";
import { IPagination } from "@Types";

const PaginationTable: React.FC<IPagination> = ({
  total,
  current,
  onChangePage,
}) => {
  return (
    <Pagination>
      {current > 1 && (
        <Pagination.Prev key="prev" onClick={() => onChangePage(current - 1)} />
      )}
      {[...Array(total)].map((_, index) => (
        <Pagination.Item
          key={index + 1}
          data-page={index + 1}
          active={index + 1 === current}
          onClick={() => onChangePage(index + 1)}
          //   style={{ color: "red" }}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      {current < total && (
        <Pagination.Next key="next" onClick={() => onChangePage(current + 1)} />
      )}
    </Pagination>
  );
};

export default memo(PaginationTable);
