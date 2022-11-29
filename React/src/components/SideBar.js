import React from "react";
import image from "../assets/images/logo1.png";
import ContentWrapper from "./ContentWrapper";
import BrandCard from "./BrandCard.js";
import LastProductInDb from "./LastProductInDb";
import ContentRow from "./ContentRow";
import NotFound from "./NotFound";
import Chart from "./Chart";
import { Link, Route, Switch } from "react-router-dom";

function SideBar() {
  return (
    <React.Fragment>
      {/* {/<!-- Sidebar -->/} */}
      <ul
        className="navbar-nav navbar-dark sidebar sidebar accordion"
        style={{ backgroundColor: "#ffffff", color: "red" }}
        id="accordionSidebar"
      >
        {/* {/<!-- Sidebar - Brand -->/} */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="Digital House" />
          </div>
        </a>
        {/* {/<!-- Divider -->/} */}
        <hr className="sidebar-divider my-0" />
        {/* {/<!-- Nav Item - Dashboard -->/} */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i
              style={{ color: "red" }}
              className="fas fa-fw fa-tachometer-alt"
            ></i>
            <span style={{ color: "black" }}>Dashboard - X-Supply</span>
          </Link>
        </li>
        {/* {/<!-- Divider -->/} */}
        <hr className="sidebar-divider" />
        {/* {/<!-- Heading -->/} */}
        <div className="sidebar-heading" style={{ color: "black" }}>
          Actions
        </div>
        {/*  {/<!-- Nav Item - Pages -->/} */}
        <li className="nav-item">
          <Link className="nav-link" to="/BrandCard">
            <i style={{ color: "black" }} className="fas fa-fw fa-folder"></i>
            <span style={{ color: "red" }}>Brands</span>
          </Link>
        </li>
        {/* {/<!-- Nav Item - Charts -->/} */}
        <li className="nav-item">
          <Link className="nav-link" to="/Chart">
            <i
              style={{ color: "black" }}
              className="fas fa-fw fa-chart-area"
            ></i>
            <span style={{ color: "red" }}>Charts</span>
          </Link>
        </li>
        {/* {/<!-- Nav Item - Tables -->/} */}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ContentRow">
            <i style={{ color: "black" }} className="fas fa-fw fa-table"></i>
            <span style={{ color: "red" }}>Tables</span>
          </Link>
        </li>
        {/*  {/<!-- Nav Item - Search -->/} */}
        <li className="nav-item">
          <Link className="nav-link" to="/LastProductInDb">
            <i style={{ color: "black" }} className="fas fa-fw fa-table"></i>
            <span style={{ color: "red" }}>Last Product In DB</span>
          </Link>
        </li>
        {/*  {/<!-- Divider -->/} */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* {/<!-- End of Sidebar -->/} */}
      {/*   {/<!-- Microdesafio 1 -->/} */}
      {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
      {/*    {/<!-- End Microdesafio 1 -->/} */}
      {/* {/<!-- End Microdesafio 2 -->/} */}
      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/BrandCard">
          <BrandCard />
        </Route>
        <Route path="/Chart">
          <Chart />
        </Route>
        <Route path="/ContentRow">
          <ContentRow />
        </Route>
        <Route path="/LastProductInDb">
          <LastProductInDb />
        </Route>
        <Route component={NotFound} />
      </Switch>
      {/* {/<!-- End Microdesafio 2 -->/} */}
    </React.Fragment>
  );
}
export default SideBar;
