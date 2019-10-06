import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';

export class NavBar extends React.Component<any, any> {
    render(): JSX.Element {
        return (
            <div>
                <Pivot linkSize={PivotLinkSize.large}>
                    <PivotItem headerText="My Files">
                        <Link to="/images">
                            <Label>Pivot #1</Label>
                        </Link>
                    </PivotItem>
                    <PivotItem headerText="Recent">
                        <Label>Pivot #2</Label>
                    </PivotItem>
                    <PivotItem headerText="Shared with me">
                        <Label>Pivot #3</Label>
                    </PivotItem>
                </Pivot>
            </div>
        );
    }
}

export default NavBar;