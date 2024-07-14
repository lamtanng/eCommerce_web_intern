import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Badge, Button, Stack, Tooltip, Typography } from '@mui/material';
import { productFeature } from '../../../constants/features/publicFeatures';
import { useAppSelector } from '../../../redux/hooks';
import { wishlistSelector } from '../../../redux/slices/wishlist.slice';
import { Drawer } from '../Drawer';
import WishListCard from './WishlistCard';

export default function Wishlist() {
  const { count, wishlist } = useAppSelector(wishlistSelector);
  return (
    <Drawer
      drawerButton={
        <Tooltip title="Wishlist" enterDelay={300} leaveDelay={200}>
          <Badge color="primary" badgeContent={count} max={99} className="cursor-pointer">
            <FavoriteRoundedIcon className="scale-150 rounded-full p-1 text-black transition-all duration-150 ease-in-out hover:border-4 hover:bg-blue-50" />
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
        {count ? (
          <>
            <Stack direction="column" spacing={3} alignItems="start">
              {wishlist.map((productUrl) => (
                <WishListCard key={productUrl} productUrl={productUrl} />
              ))}
            </Stack>
            <Stack direction="row" spacing={3} justifyContent="center"></Stack>
            <Button variant="outlined" color="primary" href="/wishlist" sx={{ width: '50%', marginX: 'auto' }}>
              View All
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5">You have no items in your wishlist.</Typography>
            <Button
              variant="contained"
              color="primary"
              href={productFeature.path}
              sx={{ width: '50%', marginX: 'auto' }}
            >
              Start Shopping
            </Button>
          </>
        )}
      </Stack>
    </Drawer>
  );
}
