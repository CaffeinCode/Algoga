import * as React from 'react';
import { Link } from 'react-router-dom';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';

export class NavBar extends React.Component<any, any> {
    render(): JSX.Element {
        return (
            <div>
                <ul>
                    <Link to ='/findAlgo'><li><a>알고리즘</a></li></Link>
                    <Link to ='/board'><li><a>개시판</a></li></Link>
                </ul>
                <Link to ='/login'><a>로그인</a></Link>
            </div>
        );
    }
}

export default NavBar;