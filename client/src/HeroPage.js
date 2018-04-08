import React, { Component } from 'react';
import zaryaImg from './img/zarya-square.png';
import dvaImg from './img/dva.png';
import reinhardtImg from './img/reinhardt.png';
import orisaImg from './img/orisa.png';
import roadhogImg from './img/roadhog.png';
import winstonImg from './img/winston.png';
import anaImg from './img/ana.png';
import mercyImg from './img/mercy.png';
import lucioImg from './img/lucio.png';
import zenyattaImg from './img/zenyatta.png';
import symmetraImg from './img/symmetra.png';
import genjiImg from './img/genji.png';
import tracerImg from './img/tracer.png';
import pharahImg from './img/pharah.png';
import mccreeImg from './img/mccree.png';
import soldier76Img from './img/soldier76.png';
import reaperImg from './img/reaper.png';
import doomfistImg from './img/doomfist.png';
import sombraImg from './img/sombra.png';
import meiImg from './img/mei.png';
import junkratImg from './img/junkrat.png';
import torbjornImg from './img/torbjorn.png';
import hanzoImg from './img/hanzo.png';
import widowmakerImg from './img/widowmaker.png';
import bastionImg from './img/bastion.png';
import './App.css';
import Hero from './Hero.js'
import { ZaryaSources } from "./contents/ZaryaContent.js";
import { DvaSources } from "./contents/DvaContent.js";
import { ReinhardtSources } from "./contents/ReinhardtContent.js";
import { OrisaSources } from "./contents/OrisaContent.js";
import { RoadhogSources } from "./contents/RoadhogContent.js";
import { WinstonSources } from "./contents/WinstonContent.js";
import { AnaSources } from "./contents/AnaContent.js";
import { MercySources } from "./contents/MercyContent.js";
import { LucioSources } from "./contents/LucioContent.js";
import { ZenyattaSources } from "./contents/ZenyattaContent.js";
import { SymmetraSources } from "./contents/SymmetraContent.js";
import { GenjiSources } from "./contents/GenjiContent.js";
import { TracerSources } from "./contents/TracerContent.js";
import { PharahSources } from "./contents/PharahContent.js";
import { MccreeSources } from "./contents/MccreeContent.js";
import { Soldier76Sources } from "./contents/Soldier76Content.js";
import { ReaperSources } from "./contents/ReaperContent.js";
import { DoomfistSources } from "./contents/DoomfistContent.js";
import { SombraSources } from "./contents/SombraContent.js";
import { MeiSources } from "./contents/MeiContent.js";
import { JunkratSources } from "./contents/JunkratContent.js";
import { TorbjornSources } from "./contents/TorbjornContent.js";
import { HanzoSources } from "./contents/HanzoContent.js";
import { WidowmakerSources } from "./contents/WidowmakerContent.js";
import { BastionSources } from "./contents/BastionContent.js";


import {
  Route,
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'

const ZaryaRoute = () =>
  <Hero
    name="Zarya"
    intro=" Together we are strong. "
    sources={ZaryaSources}
  />;
const DvaRoute = () =>
  <Hero
    name="D.va"
    intro=" I play to win! "
    sources={DvaSources}
  />;
const ReinhardtRoute = () =>
  <Hero
    name="Reinhardt"
    intro=" Justice will be done. "
    sources={ReinhardtSources}
  />;
const OrisaRoute = () =>
  <Hero
    name="Orisa"
    intro=" Your safety is my primary concern. "
    sources={OrisaSources}
  />;
const RoadhogRoute = () =>
  <Hero
    name="Roadhog"
    intro=" I'm a one man apocalypse "
    sources={RoadhogSources}
  />;
const WinstonRoute = () =>
  <Hero
    name="Winston"
    intro=" Imagination is the essence of discovery. "
    sources={WinstonSources}
  />;
const AnaRoute = () =>
  <Hero
    name="Ana"
    intro=" Never stop fighting for what you believe in. "
    sources={AnaSources}
  />;
const MercyRoute = () =>
  <Hero
    name="Mercy"
    intro=" Heroes never die. "
    sources={MercySources}
  />;
const LucioRoute = () =>
  <Hero
    name="Lucio"
    intro=" Come on, let's bring it together! "
    sources={LucioSources}
  />;
const ZenyattaRoute = () =>
  <Hero
    name="Zenyatta"
    intro=" True self is without form. "
    sources={ZenyattaSources}
  />;
const SymmetraRoute = () =>
    <Hero
      name="Symmetra"
      intro=" The true enemy of humanity is disorder. "
      sources={SymmetraSources}
    />;
const GenjiRoute = () =>
  <Hero
    name="Genji"
    intro=" Even if I sacrifice my body, I will never sacrifice my honor. "
    sources={GenjiSources}
  />;
const MccreeRoute = () =>
  <Hero
    name="McCree"
    intro=" Justice ain't gonna dispense itself. "
    sources={MccreeSources}
  />;
const PharahRoute = () =>
  <Hero
    name="Pharah"
    intro=" I will protect the innocent "
    sources={PharahSources}
  />;
const ReaperRoute = () =>
  <Hero
    name="Reaper"
    intro=" Death walks among you. "
    sources={ReaperSources}
  />;
const TracerRoute = () =>
  <Hero
    name="Tracer"
    intro=" Cheers, love! The cavalry's here! "
    sources={TracerSources}
  />;
const Soldier76Route = () =>
  <Hero
    name="Soldier 76"
    intro=" We're all soldiers now. "
    sources={Soldier76Sources}
  />;
const DoomfistRoute = () =>
  <Hero
   name="Doomfist"
    intro=" Only through conflict do we evolve. "
    sources={DoomfistSources}
  />;
const SombraRoute = () =>
  <Hero
   name="Sombra"
    intro=" Everything can be hacked, and everyone. "
    sources={SombraSources}
  />;
const HanzoRoute = () =>
  <Hero
    name="Hanzo"
    intro=" With every death, comes honor. With honor, redemption. "
    sources={HanzoSources}
  />;
const MeiRoute = () =>
  <Hero
    name="Mei"
    intro=" Our world is worth fighting for. "
    sources={MeiSources}
  />;
const JunkratRoute = () =>
  <Hero
    name="Junkrat"
    intro=" It's a perfect day for some mayhem. "
    sources={JunkratSources}
  />;
const TorbjornRoute = () =>
  <Hero
    name="Torbjörn"
    intro=" Build 'em up, break 'em down. "
    sources={TorbjornSources}
  />;
const WidowmakerRoute = () =>
  <Hero
    name="Widowmaker"
    intro=" One shot, one kill. "
    sources={WidowmakerSources}
  />;
const BastionRoute = () =>
  <Hero
    name="Bastion"
    intro=" Beep? "
    sources={BastionSources}
  />;

const TanksRoute = ({match}) =>
<div className="HeroNav-header">
  <NavLink to={`${match.url}/zarya`}><img className="herologo zaryalogo" src={zaryaImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/dva`}><img className="herologo dvalogo" src={dvaImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/reinhardt`}><img className="herologo reinhardtlogo" src={reinhardtImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/orisa`}><img className="herologo orisalogo" src={orisaImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/roadhog`}><img className="herologo roadhoglogo" src={roadhogImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/winston`}><img className="herologo winstonlogo" src={winstonImg} alt="logo" /></NavLink>
</div>

const SupportsRoute = ({match}) =>
<div className="HeroNav-header">
  <NavLink to={`${match.url}/ana`}><img className="herologo analogo" src={anaImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/mercy`}><img className="herologo mercylogo" src={mercyImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/lucio`}><img className="herologo luciologo" src={lucioImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/zenyatta`}><img className="herologo zenyattalogo" src={zenyattaImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/symmetra`}><img className="herologo symmetralogo" src={symmetraImg} alt="logo" /></NavLink>
</div>

const OffensesRoute = ({match}) =>
<div className="HeroNav-header">
  <NavLink to={`${match.url}/genji`}><img className="herologo genjilogo" src={genjiImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/mccree`}><img className="herologo mccreelogo" src={mccreeImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/soldier76`}><img className="herologo soldier76logo" src={soldier76Img} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/tracer`}><img className="herologo tracerlogo" src={tracerImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/pharah`}><img className="herologo pharahlogo" src={pharahImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/reaper`}><img className="herologo reaperlogo" src={reaperImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/sombra`}><img className="herologo sombralogo" src={sombraImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/doomfist`}><img className="herologo doomfistlogo" src={doomfistImg} alt="logo" /></NavLink>
</div>

const DefensesRoute = ({match}) =>
<div className="HeroNav-header">
  <NavLink to={`${match.url}/bastion`}><img className="herologo bastionlogo" src={bastionImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/junkrat`}><img className="herologo junkratlogo" src={junkratImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/widowmaker`}><img className="herologo widowmakerlogo" src={widowmakerImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/hanzo`}><img className="herologo hanzologo" src={hanzoImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/mei`}><img className="herologo meilogo" src={meiImg} alt="logo" /></NavLink>
  <NavLink to={`${match.url}/torbjorn`}><img className="herologo torbjornlogo" src={torbjornImg} alt="logo" /></NavLink>
</div>

class HeroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  render() {
    return (
      <div>
        <Route path="/tanks" component={TanksRoute}/>
        <Route path="/supports" component={SupportsRoute}/>
        <Route path="/offenses" component={OffensesRoute}/>
        <Route path="/defenses" component={DefensesRoute}/>
      <div className="App-container">
        <Switch>
          <Route exact path="/tanks/zarya" component={ZaryaRoute} />
          <Route exact path="/tanks/dva" component={DvaRoute} />
          <Route exact path="/tanks/reinhardt" component={ReinhardtRoute} />
          <Route exact path="/tanks/orisa" component={OrisaRoute} />
          <Route exact path="/tanks/roadhog" component={RoadhogRoute} />
          <Route exact path="/tanks/winston" component={WinstonRoute} />
          <Redirect from="/tanks" to="/tanks/zarya" />
        </Switch>
        <Switch>
          <Route exact path="/supports/ana" component={AnaRoute} />
          <Route exact path="/supports/mercy" component={MercyRoute} />
          <Route exact path="/supports/lucio" component={LucioRoute} />
          <Route exact path="/supports/zenyatta" component={ZenyattaRoute} />
          <Route exact path="/supports/symmetra" component={SymmetraRoute} />
          <Redirect from="/supports" to="/supports/ana" />
        </Switch>
        <Switch>
          <Route exact path="/offenses/genji" component={GenjiRoute} />
          <Route exact path="/offenses/tracer" component={TracerRoute} />
          <Route exact path="/offenses/soldier76" component={Soldier76Route} />
          <Route exact path="/offenses/pharah" component={PharahRoute} />
          <Route exact path="/offenses/reaper" component={ReaperRoute} />
          <Route exact path="/offenses/mccree" component={MccreeRoute} />
          <Route exact path="/offenses/sombra" component={SombraRoute} />
          <Route exact path="/offenses/doomfist" component={DoomfistRoute} />
          <Redirect from="/offenses" to="/offenses/genji" />
        </Switch>
        <Switch>
          <Route exact path="/defenses/bastion" component={BastionRoute} />
          <Route exact path="/defenses/junkrat" component={JunkratRoute} />
          <Route exact path="/defenses/widowmaker" component={WidowmakerRoute} />
          <Route exact path="/defenses/hanzo" component={HanzoRoute} />
          <Route exact path="/defenses/mei" component={MeiRoute} />
          <Route exact path="/defenses/torbjorn" component={TorbjornRoute} />
          <Redirect from="/defenses" to="/defenses/bastion" />
        </Switch>
      </div>
      </div>
    );
  }
}

export default HeroPage;
