import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import data from './components/series-data';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <div className="main-container">
            <header className="main-container-header">
                <h1>List of Movies Top 5 Movies in Netflix </h1>
            </header>
            <section className="main-section">
                <div className="card-body">
                {data.map(each=>(
                    <Home imgscr={each.ImgSrc} details={each.Details} name={each.Name} link={each.Link}/>
                ))}
                </div>
            </section>
        </div>
        
    
    </>
);