import ContentLoader from 'react-content-loader';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function CardsSkeleton() {
  return (
    <Grid2
      container
      lg={12}
      rowSpacing={{ lg: 5, md: 2 }}
      columnSpacing={{ lg: 3, md: 2 }}
      columns={{ lg: 12, md: 12 }}
      sx={{ marginX: 0 }}
      maxWidth="xl"
      className="w-full overflow-hidden px-0"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <Grid2 xs={4} display="flex" justifyContent="center" alignItems="center" key={index}>
          <ContentLoader height={350} width="100%">
            <rect x="0" y={50} rx="0" ry="0" width="450" height="220" />
            <rect x="0" y={289} rx="0" ry="0" width="450" height="25" />
            <rect x="0" y={331} rx="0" ry="0" width="140" height="15" />
          </ContentLoader>
        </Grid2>
      ))}
    </Grid2>
  );
}
