// content.ts
const extractInstagramPosts = () => {
  const posts = document.querySelectorAll('article');
  return Array.from(posts).map(post => ({
    id: post.dataset.id,
    description: post.querySelector('.description')?.textContent,
    image: post.querySelector('img')?.src,
  }));
};

const extractTwitterPosts = () => {
  const tweets = document.querySelectorAll('article');
  return Array.from(tweets).map(tweet => ({
    id: tweet.dataset.id,
    text: tweet.querySelector('.tweet-text')?.textContent,
  }));
};

// Send extracted posts to background
chrome.runtime.sendMessage({ posts: extractInstagramPosts() });
