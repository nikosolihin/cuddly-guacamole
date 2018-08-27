import React from 'react';
import { getAccessToken } from '../utils/auth';

// export const getDiscountCode = async ({ username, email, first_name, subscribe }) => {
//   const api = process.env.GATSBY_API;
//   await axios.post(`${api}/store/discount-code`, { username, email, first_name, subscribe });
// };

export const defaultUserContext = {
  isLoading: true,
  profile: {},
  handleLogout: () => {},
  toggleProfile: () => {},
  hideProfile: () => {},
};

export default React.createContext(defaultUserContext);
