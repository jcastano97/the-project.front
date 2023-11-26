import React from "react"
import { Link } from "react-router-dom"
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses, menuClasses } from "react-pro-sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faBurger, faHouse, faBlog, faNewspaper, faEraser, faLinesLeaning, faStore, faUser } from "@fortawesome/free-solid-svg-icons"
import { CSSTransition } from "react-transition-group"
import "./DashboardSidebar.css"
import { useSelector } from "react-redux"

export default function DashboardSidebar() {
    const selectedTheme = useSelector((state) => state.theme.selectedTheme)
    const [isExpanded, setIsExpanded] = React.useState(false)
    const nodeRef = React.useRef(null)
    const bgRef = React.useRef(null)

    return (<div className={`flex absolute h-full ${isExpanded ? "w-full" : ""}`}>
        <Sidebar rootStyles={{
            [`.${sidebarClasses.container}`]: {
                backgroundColor: `var(--color-${selectedTheme}-bg)`,
            },
            [`.${menuClasses.button}`]: {
                backgroundColor: `var(--color-${selectedTheme}-bg)`,
            },
        }} collapsed={!isExpanded}>
            <Menu>
                <CSSTransition in={isExpanded}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames="fade">
                    <MenuItem ref={nodeRef} icon={<FontAwesomeIcon icon={!isExpanded ? faBurger: faClose} />} onClick={() => setIsExpanded(!isExpanded)}></MenuItem>
                </CSSTransition>
                <MenuItem icon={<FontAwesomeIcon icon={faHouse} />} component={<Link to="/" onClick={() => setIsExpanded(false)} />}> Home</MenuItem>
                <SubMenu icon={<FontAwesomeIcon icon={faBlog} />} label="Blog">
                    <MenuItem icon={<FontAwesomeIcon icon={faNewspaper} />} component={<Link to="/blogs" onClick={() => setIsExpanded(false)} />}>Nuevos posts</MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faLinesLeaning} />} component={<Link to="/blogs/me" onClick={() => setIsExpanded(false)} />}>Mis posts</MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faEraser} />} component={<Link to="/blogs/new" onClick={() => setIsExpanded(false)} />}>Crear nuevo post</MenuItem>
                </SubMenu>
                <MenuItem icon={<FontAwesomeIcon icon={faStore} />} component={<Link to="/e-commerce" onClick={() => setIsExpanded(false)} />}> E-commerce</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faUser} />} component={<Link to="/account" onClick={() => setIsExpanded(false)} />}> Account</MenuItem>
            </Menu>
        </Sidebar>
        <CSSTransition in={isExpanded}
            nodeRef={bgRef}
            timeout={300}
            classNames="hide"
            unmountOnExit>
            <div ref={bgRef} className="w-full bg-white/50" onClick={() => setIsExpanded(!isExpanded)}></div>
        </CSSTransition>
    </div>)
}
