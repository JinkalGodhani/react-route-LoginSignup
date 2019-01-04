import React from 'react';

export class Login extends React.Component {
    render() {
        return(
            <div>
                <h2>Login</h2>
                <hr />
                <form>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
                        <div id="validate_name"></div>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" required/>
                    </div>
                    <button type="submit" className="btn" >Login</button>
                </form>
            </div>
        );
    }
}