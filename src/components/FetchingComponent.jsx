import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import RadioSkeleton from "./RadioSkeleton";

const FetchingComponent = ({ elementName, bgColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textShadow:
          bgColor === "orange"
            ? "3px 4px 2px rgba(172,215,147, 1)"
            : "3px 4px 2px rgba(255, 166, 47, 1)",
      }}
    >
      <h3 className="fetching-text">Loading {elementName}...</h3>
      <CircularProgress sx={{ color: "rgba(172,215,147)" }} />
      <div className="station-skeletons">
        <RadioSkeleton />
        <RadioSkeleton />
        <RadioSkeleton />
        <RadioSkeleton />
        <RadioSkeleton />
        <RadioSkeleton />
      </div>
    </Box>
  );
};

export default FetchingComponent;
