import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import img from '../../images/google.png'

const SocialLogin = (props) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    let erroElement;

    if (error) {
        erroElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate('/checkout');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {erroElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '50px' }} className='img-fluid px-2' src={img} alt="" />
                    Google sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;