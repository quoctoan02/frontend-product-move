import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import './Navigator.scss';

class MenuGroup extends Component {

    render() {
        const { name, children, active, onClick, onLinkClick } = this.props;
        return (
            <li className={"menu-group" + (active ? " active" : "")}>
                <div className="menu-group-name"
                    onClick={onClick}
                >
                    <FormattedMessage id={name} />
                </div>
                <ul className="menu-list list-unstyled">
                    {children}
                </ul>


            </li>
        );
    }
}

class Menu extends Component {

    render() {
        const { name, active, link, children, onClick } = this.props;
        return (
            <li className={"menu" + (children ? " has-sub-menu" : "") + ("") + (active ? " active" : "")}>
                {children ? (
                    <div>
                        <div className="menu-link"
                            onClick={link ? onClick : ''}
                        >
                            <FormattedMessage id={name} />
                            <div className="icon-right">
                                <i className="fas fa-angle-right"></i>
                            </div>
                        </div>
                        <div>
                            <ul className="sub-menu-list list-unstyled">
                                {children}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div
                        onClick={onClick}
                        className='menu-link'
                    >
                        <FormattedMessage id={name} />
                    </div>
                )
                }
            </li>
        );
    }
}

class SubMenu extends Component {

    getItemClass = path => {
        return this.props.location.pathname === path ? "active" : "";
    };

    render() {
        const { name, link, onClick } = this.props;
        return (
            <li className={"sub-menu" + this.getItemClass(link)}>
                <div
                    onClick={onClick}
                    className='sub-menu-link'
                >
                    <FormattedMessage id={name} />
                </div>
            </li>
        );
    }
}

const MenuGroupWithRouter = withRouter(MenuGroup);
const MenuWithRouter = withRouter(Menu);
const SubMenuWithRouter = withRouter(SubMenu);

const withRouterInnerRef = (WrappedComponent) => {

    class InnerComponentWithRef extends React.Component {
        render() {
            const { forwardRef, ...rest } = this.props;
            return <WrappedComponent {...rest} ref={forwardRef} />;
        }
    }

    const ComponentWithRef = withRouter(InnerComponentWithRef, { withRef: true });

    return React.forwardRef((props, ref) => {
        return <ComponentWithRef {...props} forwardRef={ref} />;
    });
};

class Navigator extends Component {
    state = {
        expandedMenu: {}
    };

    toggle = (groupIndex, menuIndex) => {
        const expandedMenu = {};
        const needExpand = !(this.state.expandedMenu[groupIndex + '_' + menuIndex] === true);
        if (needExpand) {
            expandedMenu[groupIndex + '_' + menuIndex] = true;
        }

        this.setState({
            expandedMenu: expandedMenu
        });
    };

    isMenuHasSubMenuActive = (location, subMenus, link) => {
        if (subMenus) {
            if (subMenus.length === 0) {
                return false;
            }

            const currentPath = location.pathname;
            for (let i = 0; i < subMenus.length; i++) {
                const subMenu = subMenus[i];
                if (subMenu.link === currentPath) {
                    return true;
                }
            }
        }

        if (link) {
            return this.props.location.pathname === link;
        }

        return false;
    };


    checkActiveMenuGroup = () => {
        const { menus, location } = this.props;
        outerLoop:
        for (let i = 0; i < menus.length; i++) {
            const group = menus[i];
            if (group.menus && group.menus.length > 0) {
                for (let j = 0; j < group.menus.length; j++) {
                    const menu = group.menus[j];
                    if (menu.subMenus && menu.subMenus.length > 0) {
                        if (this.isMenuHasSubMenuActive(location, menu.subMenus, null)) {
                            const key = i + '_' + j;
                            this.setState({
                                expandedMenu: {
                                    [key]: true
                                }
                            });
                            break outerLoop;
                        }
                    }
                }
            }
        }
    }


    checkActiveMenu = () => {
        const { menus, location } = this.props;
        outerLoop:
        for (let i = 0; i < menus.length; i++) {
            const group = menus[i];
            if (group.menus && group.menus.length > 0) {
                for (let j = 0; j < group.menus.length; j++) {
                    const menu = group.menus[j];
                    if (menu.subMenus && menu.subMenus.length > 0) {
                        if (this.isMenuHasSubMenuActive(location, menu.subMenus, null)) {
                            const key = i + '_' + j;
                            this.setState({
                                expandedMenu: {
                                    [key]: true
                                }
                            });
                            break outerLoop;
                        }
                    }
                }
            }
        }
    };

    redirectToLink = (link) => {
        if (this.props.history) {
            this.props.history.push(link)
        }
    }

    componentDidMount() {
        this.checkActiveMenu();
        this.checkActiveMenuGroup();
    };

    // componentWillReceiveProps(nextProps, prevState) {
    //     const { location, setAccountMenuPath, setSettingMenuPath } = this.props;
    //     const { location: nextLocation } = nextProps;
    //     if (location !== nextLocation) {
    //         let pathname = nextLocation && nextLocation.pathname;
    //         if ((pathname.startsWith('/account/') || pathname.startsWith('/fds/account/'))) {
    //             setAccountMenuPath(pathname);
    //         }
    //         if (pathname.startsWith('/settings/')) {
    //             setSettingMenuPath(pathname);
    //         };
    //     };
    // };

    componentDidUpdate(prevProps, prevState) {
        const { location } = this.props;
        const { location: prevLocation } = prevProps;
        if (location !== prevLocation) {
            this.checkActiveMenu();
            this.checkActiveMenuGroup();
        };
    };

    render() {
        const { menus, location } = this.props;
        return (
            <Fragment>
                <ul className="navigator-menu list-unstyled">
                    {
                        menus.map((group, groupIndex) => {
                            const isMenuHasSubMenuActive = this.isMenuHasSubMenuActive(location, group.menus, group.link);
                            return (
                                <Fragment key={groupIndex}>
                                    <MenuGroupWithRouter
                                        onClick={() => this.redirectToLink(group.link)}
                                        key={groupIndex}
                                        link={group.link}
                                        name={group.name}
                                        active={isMenuHasSubMenuActive}
                                    >
                                        {group.menus ? (
                                            group.menus.map((menu, menuIndex) => {
                                                const isMenuHasSubMenuActive = this.isMenuHasSubMenuActive(location, menu.subMenus, menu.link);
                                                const isSubMenuOpen = this.state.expandedMenu[groupIndex + '_' + menuIndex] === true;
                                                return (
                                                    <MenuWithRouter
                                                        key={menuIndex}
                                                        active={isMenuHasSubMenuActive}
                                                        name={menu.name}
                                                        link={menu.link}
                                                        hasSubMenu={menu.subMenus}
                                                        isOpen={isSubMenuOpen}
                                                        onClick={() => this.redirectToLink(menu.link)}
                                                    >
                                                        {menu.subMenus && menu.subMenus.map((subMenu, subMenuIndex) => (
                                                            <SubMenuWithRouter
                                                                key={subMenuIndex}
                                                                name={subMenu.name}
                                                                link={subMenu.link}
                                                                onClick={() => this.redirectToLink(subMenu.link)}
                                                            />
                                                        ))}
                                                    </MenuWithRouter>
                                                );
                                            })
                                        ) : null}
                                    </MenuGroupWithRouter>
                                </Fragment>
                            );
                        })
                    }
                </ul>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(withRouterInnerRef(connect(mapStateToProps, mapDispatchToProps)(Navigator)));
