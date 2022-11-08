import React from "react";
import "./homeLayout.scss";
import { Outlet, NavLink } from "react-router-dom";

import Header from "../../components/Header/Header";

function HomeLayout() {
  return (
    <div className="homeLayout">
      <Header />
      <section className="homeLayout__warper md:container md:mx-auto">
        <div className="flex flex-row space-x-0 md:space-x-8">
          <nav className="homeLayout__sideNav basis-0  md:basis-2/12">
            <ul>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              {/* <li>
                <NavLink to="/about">about</NavLink>
              </li> */}
              <li>
                <NavLink to="/resume">resume</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/blog">blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">contact</NavLink>
              </li>
            </ul>
          </nav>
          <main className="homeLayout__main basis-full mx-4 md:mx-0 md:basis-10/12">
            <Outlet />
          </main>
        </div>
      </section>
    </div>
  );
}

export default HomeLayout;
