import React, { useContext } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const SocialTab = ({setError}) => {
    const { googleSingInUser } = useContext(AuthContext);

    const handelGoogle = () => {
        googleSingInUser()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return (
        <div className="">
            <p>Or Sign In with</p>
            <div className="flex justify-center my-4">
                <button className="btn btn-circle btn-outline" onClick={handelGoogle}><FaGoogle></FaGoogle></button>
                <button className="btn btn-circle btn-outline mx-4" onClick={handelGoogle}><FaFacebookF></FaFacebookF></button>
                <button className="btn btn-circle btn-outline" onClick={handelGoogle}><FaGithub></FaGithub></button>
            </div>
        </div>
    );
};

export default SocialTab;