import React from 'react';
import './home.css'

function Home () {
    return (
        <div>
            <div class="container">
                <header>
                    <div class="logo">
                        <img src="green-africa-logo.png" alt="Green Africa Logo"/>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sustainable Living</a></li>
                            <li><a href="#">Environmental Conservation</a></li>
                            <li><a href="#">Green Energy</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <section class="hero">
                    <div class="hero-content">
                        <h1>Green Africa</h1>
                        <h2>Promoting Sustainable Living, Environmental Conservation, and Green Energy</h2>
                        <a href="#" class="cta-button">Learn More</a>
                    </div>
                </section>
                <section class="categories">
                    <div class="category">
                        <img src="sustainable-living-icon.png" alt="Sustainable Living Icon"/>
                            <h3>Sustainable Living</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus venenatis ipsum, sed bibendum velit mollis ac. Nullam eleifend dolor sed suscipit bibendum.</p>
                    </div>
                    <div class="category">
                        <img src="environmental-conservation-icon.png" alt="Environmental Conservation Icon"/>
                            <h3>Environmental Conservation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus venenatis ipsum, sed bibendum velit mollis ac. Nullam eleifend dolor sed suscipit bibendum.</p>
                    </div>
                    <div class="category">
                        <img src="green-energy-icon.png" alt="Green Energy Icon"/>
                            <h3>Green Energy</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus venenatis ipsum, sed bibendum velit mollis ac. Nullam eleifend dolor sed suscipit bibendum.</p>
                    </div>
                </section>
                <section class="blog">
                    <h2>Latest Blog Posts</h2>
                    <div class="post">
                        <img src="blog-post-image.jpg" alt="Blog Post Image"/>
                            <h3>Blog Post Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus venenatis ipsum, sed bibendum velit mollis ac.</p>
                    </div>
                    <div class="post">
                        <img src="blog-post-image.jpg" alt="Blog Post Image"/>
                            <h3>Blog Post Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus venenatis ipsum, sed bibendum velit mollis ac.</p>
                    </div>
                    <div class="post">
                        <img src="blog-post-image.jpg" alt="Blog Post Image"/>
                            <h3>Blog Post Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus venenatis ipsum, sed bibendum velit mollis ac.</p>
                    </div>
                </section>
                <footer>
                    <div class="footer-content">
                        <div class="logo">
                            <img src="green-africa-logo.png" alt="Green Africa Logo"/>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Sustainable Living</a></li>
                                <li><a href="#">Environmental Conservation</a></li>
                                <li><a href="#">Green Energy</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="copy">
                        <p>© 2023 Green Africa. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;