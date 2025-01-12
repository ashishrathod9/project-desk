import { acceptInvitation } from '@/Redux/Project/Action';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const AcceptInvitation = () => {
    const location = useLocation(); // Get the current location
    const dispatch = useDispatch(); // Redux dispatch
    const navigate = useNavigate(); // Navigation hook

   

    const handleAcceptInvitation = () => {
        const urlParams = new URLSearchParams(location.search);
        const token = urlParams.get('token');

        if (token) { // Ensure the token exists
            dispatch(acceptInvitation({token, navigate}));
        } else {
            console.error('Token is missing from the URL parameters');
        }
    };

    return (
        <div className="h-[85vh] flex flex-col justify-center items-center">
            <h1 className="py-5 font-semibold text-xl">
                You are invited to join the project
            </h1>

            

             <Button onClick={handleAcceptInvitation}>
                Accept Invitation
            </Button> 
        </div>
    );
};

export default AcceptInvitation;
