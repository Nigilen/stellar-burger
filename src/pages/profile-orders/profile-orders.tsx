import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from '@store';
import {
  getOrdersAll,
  getUserState
} from '../../services/slices/userSlice/userSlice';
import { getFeeds } from '../../services/slices/feedSlice/feedSlice';

export const ProfileOrders: FC = () => {
  const userOrders = useSelector(getUserState).userOrders;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersAll());
    dispatch(getFeeds());
  }, []);

  const orders: TOrder[] = userOrders;

  return <ProfileOrdersUI orders={orders} />;
};
