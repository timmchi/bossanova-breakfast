import Skeleton from "@mui/joy/Skeleton";

const RadioSkeleton = () => {
  return (
    <div className="station-player">
      <Skeleton variant="rectangular" width={100} height="2em" />
      <div className="station-info">
        <Skeleton variant="circular" width={60} height={60} />
        <Skeleton
          variant="rectangular"
          width={200}
          height="1.5em"
          className="station-name"
        />
      </div>
      <Skeleton variant="rectangular" width="100%" height="3em" />
    </div>
  );
};

export default RadioSkeleton;
