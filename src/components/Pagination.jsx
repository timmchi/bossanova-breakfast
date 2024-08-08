import Pagination from "@mui/material/Pagination";

const PaginationElement = ({ page, handlePageChange }) => {
  return (
    <Pagination
      count={4}
      shape="rounded"
      variant="outlined"
      page={page}
      onChange={handlePageChange}
      sx={{
        paddingTop: "2em",
        paddingLeft: "1.5em",
        button: { color: "white" },
      }}
    />
  );
};

export default PaginationElement;
