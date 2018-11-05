import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ProductEntry extends React.Component {
    render() {
        return (
            <section>
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">User Name:</label>
                        <input type="text" id="username" className="form-control" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="text" id="password" className="form-control" />
                    </div>

                    <button className="btn btn-success">Submit</button>


                </form>
            </section>
        )
    }
}