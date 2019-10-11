import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

export class NavBar extends React.Component<any, any> {
    render(): JSX.Element {
        return (
            <div>
                <ul>
                    <NavLink className = "link" to ='/findAlgo' activeClassName = "activeLink"><li>알고리즘</li></NavLink>
                    <NavLink className = "link" to ='/board' activeClassName = "activeLink"><li>개시판</li></NavLink>
                <NavLink className = "link" to ='/login' activeClassName = "activeLink"><li>로그인</li></NavLink>
                </ul>
            </div>
        );
    }
}

export default NavBar;