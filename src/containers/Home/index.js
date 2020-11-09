// import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
import './style.css';
import users from "./user-data"



function Home() {
    const mystyle = {
        color: "red",
        fontSize: "9px"
    };
    // const mystyle1 = {
    //     width: "9rem"
    // };
    return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="users" className="col-6" className="contain">
                        {users.map((user, index) => (
                            <div key={index}>
                                <div class="card" id="card">
                                    <img src={user.img}></img>
                                        <div class="card-body">
                                            <p class="card-text" id="text" style={mystyle}>{user.shopname}
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                                        viewBox="0 0 12.79 12.79">
                                                        <g transform="translate(0 0)">
                                                            <g transform="translate(0 0)">
                                                                <path d="M12.79-11.21H0V-24H12.79Z" transform="translate(0 24)"
                                                                    fill="none" fill-rule="evenodd" />
                                                                <path
                                                                    d="M12.362,7.311a1.048,1.048,
                                                                    0,0,1-.174-1.221,1.049,1.049,0,0,0,.029-.923,1.034,1.034,0,0,0-.711-.583,1.038,1.038,0,0,1-.8-.932,
                                                                    1.042,1.042,0,0,0-.471-.792,1.025,1.025,0,0,0-.91-.1A1.027,1.027,0,0,1,8.15,2.41a1.027,1.027,0,0
                                                                    ,0-1.642,0,1.027,1.027,0,0,1-1.173.347,1.025,1.025,0,0,0-.91.1,1.042,1.042,0,0,0-.471.792,1.038,
                                                                    1.038,0,0,1-.8.932,1.034,1.034,0,0,0-.711.583,1.048,1.048,0,0,0,.029.923A1.048,1.048,0,0,1,2.3,
                                                                    7.311,1.046,1.046,0,0,0,2.53,8.95a1.044,1.044,0,0,1,.508,1.122,1.048,1.048,0,0,0,.231.894,1.028,
                                                                    1.028,0,0,0,.845.357,1.032,1.032,0,0,1,1.029.667,1.036,1.036,0,0,0,.673.626,1.025,1.025,0,0,0,
                                                                    .9-.16,1.026,1.026,0,0,1,1.223,0,1.029,1.029,0,0,0,1.576-.466,1.032,1.032,0,0,1,1.029-.667,1.028,
                                                                    1.028,0,0,0,.845-.357,1.048,1.048,0,0,0,.231-.894,1.044,1.044,0,0,1,.508-1.122,1.046,1.046,0,0,0,
                                                                    .233-1.639ZM6.518,8.937l.274.257.269-.263L9.994,6.058l-.55-.594-2.651,2.6L5.2,6.6,4.665,7.2Z"
                                                                                                transform="translate(-0.934 -0.934)" fill="#4772eb"
                                                                                                fill-rule="evenodd" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span></p>
                                            <p class="card-title" >{user.itemname}</p>
                                            <p class="card-text" >{user.mainprice} </p>
                                        </div>
                                    </div>
                        </div>
                        ))}
                    </div>
                    <div className="users" className="col-6" >
                        {users.map((user, index) => (
                            <div key={index}>
                                <div class="card" id="card" style={{width: "9rem"}}>
                                    <img src={user.img}></img>
                                        <div class="card-body">
                                            <p class="card-text" id="text" style={mystyle}>{user.shopname}
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                                        viewBox="0 0 12.79 12.79">
                                                        <g transform="translate(0 0)">
                                                            <g transform="translate(0 0)">
                                                                <path d="M12.79-11.21H0V-24H12.79Z" transform="translate(0 24)"
                                                                    fill="none" fill-rule="evenodd" />
                                                                <path
                                                                    d="M12.362,7.311a1.048,1.048,
                                                                    0,0,1-.174-1.221,1.049,1.049,0,0,0,.029-.923,1.034,1.034,0,0,0-.711-.583,1.038,1.038,0,0,1-.8-.932,
                                                                    1.042,1.042,0,0,0-.471-.792,1.025,1.025,0,0,0-.91-.1A1.027,1.027,0,0,1,8.15,2.41a1.027,1.027,0,0
                                                                    ,0-1.642,0,1.027,1.027,0,0,1-1.173.347,1.025,1.025,0,0,0-.91.1,1.042,1.042,0,0,0-.471.792,1.038,
                                                                    1.038,0,0,1-.8.932,1.034,1.034,0,0,0-.711.583,1.048,1.048,0,0,0,.029.923A1.048,1.048,0,0,1,2.3,
                                                                    7.311,1.046,1.046,0,0,0,2.53,8.95a1.044,1.044,0,0,1,.508,1.122,1.048,1.048,0,0,0,.231.894,1.028,
                                                                    1.028,0,0,0,.845.357,1.032,1.032,0,0,1,1.029.667,1.036,1.036,0,0,0,.673.626,1.025,1.025,0,0,0,
                                                                    .9-.16,1.026,1.026,0,0,1,1.223,0,1.029,1.029,0,0,0,1.576-.466,1.032,1.032,0,0,1,1.029-.667,1.028,
                                                                    1.028,0,0,0,.845-.357,1.048,1.048,0,0,0,.231-.894,1.044,1.044,0,0,1,.508-1.122,1.046,1.046,0,0,0,
                                                                    .233-1.639ZM6.518,8.937l.274.257.269-.263L9.994,6.058l-.55-.594-2.651,2.6L5.2,6.6,4.665,7.2Z"
                                                                                                transform="translate(-0.934 -0.934)" fill="#4772eb"
                                                                                                fill-rule="evenodd" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span></p>
                                            <p class="card-title" >{user.itemname}</p>
                                            <p class="card-text" >{user.mainprice} </p>
                                    </div>
                                </div>
                            </div>
                            ))}
                    </div>
                </div>
            </div>
            
    );
}

export default Home;
