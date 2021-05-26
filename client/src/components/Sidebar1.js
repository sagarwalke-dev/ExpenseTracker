import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './css/sidebar.css';
import { FcHome} from 'react-icons/fc';
import {FcDebt} from 'react-icons/fc';
import { FcMoneyTransfer} from 'react-icons/fc';
import { FcBarChart} from 'react-icons/fc';
const Sidebar1=()=>{
    return(
        <>
                <SideNav
    onSelect={(selected) => {
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
            <FcHome style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="Expenses">
            <NavIcon>
            <FcDebt style={{ fontSize: '1.75em'}}/>
            </NavIcon>
            <NavText>
                Expenses
            </NavText>
        </NavItem>
        <NavItem eventKey="Income">
            <NavIcon>
            <FcMoneyTransfer style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Income
            </NavText>
        </NavItem>
        <NavItem eventKey="Report">
            <NavIcon>
                <FcBarChart style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Report
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>

        
        
        </>
    );
}

export default Sidebar1;