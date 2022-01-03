import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import cost from "./modules/cost";
import tabs from "./modules/tabs";
import slider from "./modules/slider";


timer('25 december 2021');
menu();
modal();
cost();
tabs();
const portfolioContent = '.portfolio-content';
const portfolioItem = '.portfolio-item';
const portfolioDots = '.portfolio-dots';
slider(portfolioContent, portfolioItem, portfolioDots);