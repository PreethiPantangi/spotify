import React, { useEffect } from 'react';
import './profile.css'
import { connect, useDispatch } from 'react-redux';
import { fetchUserDetails } from '../../reducer/index'

const ProfileComponent = ({ profile }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserDetails())
    }, [dispatch])


    const showProfileMenu = () => {
        document.getElementById("profileMenu").classList.toggle("show");
    }

    window.onclick = function (event) {
        if (!event.target.matches('.pc')) {
            var dropdowns = document.getElementsByClassName("profile-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    const logoutUser = () => {
        sessionStorage.clear();
        window.location.reload()
    }

    return (
        <div className='profileComponent' >
            {profile ?
                <div onClick={showProfileMenu} className='pc' >
                    {profile.images && profile.images.map(image =>
                        <img key={image['url']} className="profile-image" src={image['url']} alt={profile.display_name} />
                    )}{profile.display_name}
                </div>
                : null}
            <div id="profileMenu" className="profile-content">
                <p onClick={logoutUser}>Logout</p>
            </div>
        </div>);
}

const mapStateToProps = state => {
    console.log(state.profile.user)
    return {
        profile: state.profile.user
    }
}

export default connect(mapStateToProps)(ProfileComponent);