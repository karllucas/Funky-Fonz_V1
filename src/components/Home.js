// import React, { Component } from 'react';
// import { ProductConsumer } from '../context';
// import {
//     picture1,
//     picture2,
//     picture3,
//     picture4,

// } from './homePageImages';

// export default class Home extends Component {
//     render() {
//         return (
//                 <ProductConsumer>
//                     {value => {
//                         console.log(value);
//                         return (
//                             <React.Fragment>
//                                 {/* Banner Start*/}
//                                     <section id="banner">
//                                         <div className="content">
//                                             <header>
//                                                 <div className="container">
//                                                 <h2 className="text-title text-darkGreen">The future has landed</h2>
//                                                 <p className="text-white text-left">And there are no hoverboards or flying cars.<br />
//                                                 Just apps. Lots of mother flipping apps.</p>
//                                                 </div>
//                                             </header>
//                                             <span className="image">
//                                                 <img src={picture1} alt="One" />
//                                             </span>
//                                         </div>
//                                         <a href="#one" className="goto-next scrolly">Next</a>
//                                     </section>
//                                 {/* Banner End*/}

//                                 {/* Section One Start */}
//                                     <section id="one" className="spotlight style1 bottom">
//                                         <span className="image fit main"><img src={picture2} alt="Two" /></span>
//                                         <div className="content">
//                                             <div className="container">
//                                                 <div className="row">
//                                                     <div className="col-4 col-12-medium">
//                                                         <header>
//                                                             <h2>Odio faucibus ipsum integer consequat</h2>
//                                                             <p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p>
//                                                         </header>
//                                                     </div>
//                                                     <div className="col-4 col-12-medium">
//                                                         <p>Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
//                                                         Blandit orci porttitor semper. Arcu phasellus tortor enim mi
//                                                         nisi praesent dolor adipiscing. Integer mi sed nascetur cep aliquet
//                                                         augue varius tempus lobortis porttitor accumsan consequat
//                                                         adipiscing lorem dolor.</p>
//                                                     </div>
//                                                     <div className="col-4 col-12-medium">
//                                                         <p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
//                                                         adipiscing adipiscing metus massa. Blandit orci porttitor semper.
//                                                         Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
//                                                         mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
//                                                         ipsum dolor nullam.</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <a href="#two" className="goto-next scrolly">Next</a>
//                                     </section>
//                                 {/* Section One End */}

//                                 {/* Section Two Start */}
//                                     <section id="two" className="spotlight style2 right" style={{"background-position": "center 4.2px", "background-image": "url(`./homeImages/new-image.jpg`)"}}>
//                                         <span className="image fit main"><img src={picture3} alt="Three" /></span>
//                                         <div className="content">
//                                             <header>
//                                                 <h2>Interdum amet non magna accumsan</h2>
//                                                 <p>Nunc commodo accumsan eget id nisi eu col volutpat magna</p>
//                                             </header>
//                                             <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
//                                             <ul className="actions">
//                                                 <li><a href="#" className="button">Learn More</a></li>
//                                             </ul>
//                                         </div>
//                                         <a href="#three" className="goto-next scrolly">Next</a>
//                                     </section>
//                                 {/* Section Two End */}

//                                 {/* Section Three Start */}
//                                     <section id="three" className="spotlight style3 left">
//                                         <span className="image fit main bottom"><img src={picture4} alt="Four" /></span>
//                                         <div className="content">
//                                             <header>
//                                                 <h2>Interdum felis blandit praesent sed augue</h2>
//                                                 <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
//                                             </header>
//                                             <p>Feugiat accumsan lorem eu ac lorem amet ac arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer mi sed nascetur cep aliquet augue varius tempus lobortis porttitor lorem et accumsan consequat adipiscing lorem.</p>
//                                             <ul className="actions">
//                                                 <li><a href="#" className="button">Learn More</a></li>
//                                             </ul>
//                                         </div>
//                                         <a href="#four" className="goto-next scrolly">Next</a>
//                                     </section>
//                                 {/* Section Three End */}

//                                 {/* Section Four Start */}
//                                     <section id="four" className="wrapper style1 special fade-up">
//                                         <div className="container">
//                                             <div className="major text-blue">
//                                                 <h2>Accumsan sed tempus adipiscing blandit</h2>
//                                                 <span className="text-green">
//                                                 <p>Iaculis ac volutpat vis non enim gravida nisi faucibus posuere arcu consequat</p>
//                                                 </span>
//                                             </div>
//                                             <div className="box alt">
//                                                 <div className="row gtr-uniform">
//                                                     <section className="col-4 col-6-medium col-12-xsmall">
//                                                         <span className="icon solid alt major fa-chart-area"></span>
//                                                         <h3>Ipsum sed commodo</h3>
//                                                         <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
//                                                     </section>
//                                                     <section className="col-4 col-6-medium col-12-xsmall">
//                                                         <span className="icon solid alt major fa-comment"></span>
//                                                         <h3>Eleifend lorem ornare</h3>
//                                                         <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
//                                                     </section>
//                                                     <section className="col-4 col-6-medium col-12-xsmall">
//                                                         <span className="icon solid alt major fa-flask"></span>
//                                                         <h3>Cubilia cep lobortis</h3>
//                                                         <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
//                                                     </section>
//                                                     <section className="col-4 col-6-medium col-12-xsmall">
//                                                         <span className="icon solid alt major fa-paper-plane"></span>
//                                                         <h3>Non semper interdum</h3>
//                                                         <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
//                                                     </section>
//                                                     <section className="col-4 col-6-medium col-12-xsmall">
//                                                         <span className="icon solid alt major fa-file"></span>
//                                                         <h3>Odio laoreet accumsan</h3>
//                                                         <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
//                                                     </section>
//                                                     <section className="col-4 col-6-medium col-12-xsmall">
//                                                         <span className="icon solid alt major fa-lock"></span>
//                                                         <h3>Massa arcu accumsan</h3>
//                                                         <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
//                                                     </section>
//                                                 </div>
//                                             </div>
//                                             <footer className="major">
//                                                 <ul className="actions special">
//                                                     <li><a href="#" className="button">Magna sed feugiat</a></li>
//                                                 </ul>
//                                             </footer>
//                                         </div>
//                                     </section>
//                                 {/* Section Four End */}

//                                 {/* Footer Start */}
//                                     <footer id="footer">
//                                         {/* <ul className="icons">
//                                             <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
//                                             <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
//                                             <li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
//                                             <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
//                                             <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
//                                             <li><a href="#" className="icon solid alt fa-envelope"><span className="label">Email</span></a></li>
//                                         </ul> */}
//                                         <ul className="copyright">
//                                             <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
//                                         </ul>
//                                     </footer>
//                                 {/* Footer End */}
//                             </React.Fragment>
//                         );
//                     }}
//                 </ProductConsumer>
//         );
//     }
// }
