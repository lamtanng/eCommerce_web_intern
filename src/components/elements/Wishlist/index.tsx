import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Badge, Button, Stack, Tooltip, Typography } from '@mui/material';
import { lazy, Suspense } from 'react';
import { productFeature } from '../../../constants/features/publicFeatures';
import { useAppSelector } from '../../../redux/hooks';
import { wishlistSelector } from '../../../redux/slices/wishlist.slice';
import ProductListSkeleton from '../skeletons/ProductListSkeleton';
const WishListCard = lazy(() => import('./WishlistCard'));
const Drawer = lazy(() => import('../Drawer'));

export default function Wishlist() {
  const { count, wishlist } = useAppSelector(wishlistSelector);
  return (
    <Drawer
      drawerButton={
        <Tooltip title="Wishlist" enterDelay={300} leaveDelay={200}>
          <Badge color="primary" badgeContent={count} max={99} className="cursor-pointer">
            <FavoriteBorderRoundedIcon className="scale-150 rounded-full p-1 transition-all duration-150 ease-in-out hover:border-4 hover:bg-blue-50" />
          </Badge>
        </Tooltip>
      }
    >
      <Stack
        direction="column"
        spacing={5}
        sx={{ paddingX: '10px', maxWidth: '500px', marginY: '24px', marginX: '16px' }}
      >
        <Typography variant="h5" fontWeight={600}>
          My Wishlist <br />
          <Typography variant="body1">{count ? `${count}` : 0} items </Typography>
        </Typography>

        <Stack direction="column" spacing={3} alignItems="center">
          {count ? (
            <>
              <Stack direction="column" spacing={3} alignItems="start">
                {wishlist.map((productUrl) => (
                  <Suspense fallback={<ProductListSkeleton />} key={productUrl}>
                    <WishListCard productUrl={productUrl} />
                  </Suspense>
                ))}
              </Stack>
            </>
          ) : (
            <>
              <Typography variant="h5">You have no items in your wishlist.</Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href={productFeature.path}
                sx={{ width: '50%', marginX: 'auto' }}
              >
                Start Shopping
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Drawer>
  );
}
