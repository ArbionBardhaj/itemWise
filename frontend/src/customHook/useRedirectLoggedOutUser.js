import { SET_LOGIN } from '../redux/features/auth/authSlice';
import { getLoginStatus } from '../services/authService';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


import { useNavigate, useLocation, useParams } from 'react-router-dom';

const useRedirectLoggedOutUser = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    const redirectLoggedOutUser = async () => {
      try {
        const isLoggedIn = await getLoginStatus();
        console.log('Received value:', isLoggedIn, typeof isLoggedIn);

        dispatch(SET_LOGIN(isLoggedIn));

        if (isLoggedIn) {
          console.log('Session has expired, navigating to login page');
          console.log('Current location:', location);
          console.log('Current params:', params);

          toast.info('Session has expired, please login to continue');
          navigate(path);
          console.log('Navigation completed');
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        toast.error('An error occurred while checking login status');
      }
    };

    console.log('Calling redirectLoggedOutUser');
    redirectLoggedOutUser();
  }, [navigate, path, dispatch, location, params]);
};



export default useRedirectLoggedOutUser;
