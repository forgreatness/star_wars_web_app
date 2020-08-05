import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  useParams,
  useRouteMatch
} from 'react-router-dom';

import './App.css';
import PeopleData from './data/people.json';
import PlanetsData from './data/planets.json';
import FilmsData from './data/films.json';


function Home() {
  return (
    <h2>Welcome to my React Router App</h2>
  );
}

function People() {
  const { url, path } = useRouteMatch();
  const peopleLinks = [];
  const peopleRoutesMatcher = [];

  for (var person of Object.keys(PeopleData)) {
    peopleLinks.push(
      <li key={person}>
        <NavLink to={PeopleData[person].url}>{PeopleData[person].name}</NavLink>
      </li>
    );

    peopleRoutesMatcher.push(
      <Route path={PeopleData[person].url}>
        <Person info={PeopleData[person]}/>
      </Route>
    )
  }

  return (
    <React.Fragment>
      <div class="sidenav">
        <ul>
          {peopleLinks}
        </ul>
      </div>
      <div class="main">
        <Switch>
          {peopleRoutesMatcher}
        </Switch>
      </div>
    </React.Fragment>
  );
}

function Person(props) {
  const person = props.info;
  const filmsPresent = [];

  return (
    <React.Fragment>
      <h2>{person.name}</h2>
      <span><b>Height: </b>{person.height}</span> <br />
      <span><b>Mass: </b>{person.mass}</span> <br />
      <span><b>Hair Color: </b>{person.hair_color}</span> <br />
      <span><b>Skin Color: </b>{person.skin_color}</span> <br />
      <span><b>Eye Color:  </b>{person.eye_color}</span> <br />
      <span><b>Birth Year: </b>{person.birth_year}</span> <br />
      <span><b>Gender: </b>{person.gender}</span> <br />
      <span><b>Home World: </b>{person.homeworld}</span> <br />
      <b>Films:</b>
      <ul>

      </ul>
    </React.Fragment>
  );
}


function Planets() {
  const { url, path } = useRouteMatch();
  const planetLinks = [];

  for (var planet of Object.keys(PlanetsData)) {
    planetLinks.push(
      <li key={planet}>
        <NavLink to={PlanetsData[planet].url}>{PlanetsData[planet].name}</NavLink>
      </li>
    )
  }

  return (
    <React.Fragment>
      <div class="sidenav">
        <ul>
          {planetLinks}
        </ul>
      </div>
      <div class="main">

      </div>
    </React.Fragment>
  );
}

function Films() {
  const { url, path } = useRouteMatch();
  const filmLinks = [];

  for (var film of Object.keys(FilmsData)) {
    filmLinks.push(
      <li key={film}>
        <NavLink to={FilmsData[film].url}>{FilmsData[film].title}</NavLink>
      </li>
    )
  }

  return (
    <React.Fragment>
      <div class="sidenav">
        <ul>
          {filmLinks}
        </ul>
      </div>
      <div class="main">

      </div>
    </React.Fragment>
  );
}

function App() {
  return (
    [
      <header>
        <h1><Link exact to="/">Star Wars</Link></h1>
        <nav id="main-nav">
          <ul>
            <li>
              <NavLink to="/people">People</NavLink>
            </li>
            <li>
              <NavLink to="/planets">Planets</NavLink>
            </li>
            <li>
              <NavLink to="/films">Films</NavLink>
            </li>
          </ul>
        </nav>
      </header>,
      <Switch>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/planets">
          <Planets />
        </Route>
        <Route path="/films">
          <Films />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    ]
  );
}

export default App;
