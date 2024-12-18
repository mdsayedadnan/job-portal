import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';

const Google = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>
          <div className=''>
          <div className='divider'></div>
          </div>
            <button onClick={handleGoogleSignIn} className='btn m-4'>Google</button>
        </div>
    );
};

export default Google;