import React from "react";

function Profile({username, email}) {
    return <div>
        <h1>Hello {username}, Thank You for logging in!!!</h1>
        <p>We have your email as {email}.</p>
    </div>

}

export default Profile;