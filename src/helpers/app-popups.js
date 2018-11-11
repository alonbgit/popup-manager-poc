import { showPopup } from './popup-utils';
import LoginPopup from '../components/app-popups/login';
import UserDetailsPopup from '../components/app-popups/user-details/user-details.component';
import RegisterPopup from '../components/app-popups/register/register.component';

export const showLoginPopup = () => {
    showPopup({
        component: LoginPopup,
        config: {
            header: 'Login',
            width: 500,
            height: 700
        },
        props: {
            firstName: 'bla',
            lastName: 'momo',
        }
    });
};

export const showUserDetailsPopup = () => {
    showPopup({
        component: UserDetailsPopup,
        config: {
            header: 'User Details',
            width: 300,
            height: 200,
            closeOnBlur: true,
        },
        props: {
            username: 'gdfgfds',
            password: '4324324312',
        }
    });
}

export const showRegisterPopup = () => {
    showPopup({
        component: RegisterPopup,
        config: {
            header: 'Register',
            width: 500,
            height: 600
        },
        props: {
            username: 'gdfgfds',
            password: '4324324312',
        }
    });
}