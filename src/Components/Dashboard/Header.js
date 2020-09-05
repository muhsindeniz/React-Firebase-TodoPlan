import React from 'react'
import '../../assets/style/style.css';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

let Header = (props) => {

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="#">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="#">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );

    return (
        <div className="header__conn">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-6"><span className="header__logo">SeaPlan</span></div>
                            <div className="col-sm-2"><Link to='/'><span className="header__plan float-right">Home</span></Link></div>
                            <div className="col-sm-2"><Link to='/add-work'><span className="header__plan">New Plan</span></Link></div>
                            <div className="col-sm-2">
                                <div className="header__profile">
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <a className="ant-dropdown-link text-white" onClick={e => e.preventDefault()}>{props.name}</a>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;