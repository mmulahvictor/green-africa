import React from 'react';
import ArticleCard from './ArticleCard';
import DIYCard from './DIYCard';
import TipsCard from './TipsCard';

const SustainableLiving = () => {
  const articles = [
    {
      title: '10 Ways to Reduce Your Carbon Footprint',
      author: 'Jane Doe',
      date: 'March 1, 2023',
      image: '/images/carbon-footprint.jpg',
      excerpt: 'Reducing your carbon footprint is one of the most important things you can do to help combat climate change. Here are 10 easy ways to get started.',
      url: '/articles/10-ways-to-reduce-your-carbon-footprint'
    }
    // additional article objects
  ];

  const DIYProjects = [
    {
      title: 'DIY Mason Jar Herb Garden',
      image: '/images/mason-jar-garden.jpg',
      description: 'Learn how to create your own indoor herb garden using mason jars and a few simple supplies.',
      url: '/diy/mason-jar-herb-garden'
    }
    // additional DIY project objects
  ];

  const tips = [
    {
      title: '5 Tips for a More Sustainable Wardrobe',
      author: 'John Smith',
      date: 'February 15, 2023',
      excerpt: 'From buying secondhand to choosing sustainable fabrics, these tips will help you create a more eco-friendly wardrobe.',
      url: '/tips/sustainable-wardrobe'
    }
    // additional tips objects
  ];

  return (
    <div className="sustainable-living">
      <div className="article-section">
        <h2>Articles</h2>
        <div className="article-cards">
          {articles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      </div>
      <div className="diy-section">
        <h2>DIY Projects</h2>
        <div className="diy-cards">
          {DIYProjects.map((project) => (
            <DIYCard key={project.url} project={project} />
          ))}
        </div>
      </div>
      <div className="tips-section">
        <h2>Tips</h2>
        <div className="tips-cards">
          {tips.map((tip) => (
            <TipsCard key={tip.url} tip={tip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SustainableLiving;
