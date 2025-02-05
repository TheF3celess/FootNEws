const newsContainer = document.getElementById("news-container");

async function fetchFootballNews() {
  try {
    const response = await fetch(
      `https://football.mahdiidrissi2022.workers.dev/`
    );
    const data = await response.json();
    displayNews(data.articles);
  } catch (error) {
    console.error("Error fetching news:", error);
    newsContainer.innerHTML =
      "<p>Error fetching news. Please try again later.</p>";
  }
}

function displayNews(articles) {
  newsContainer.innerHTML = "";
  articles.forEach((article) => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");
    newsItem.innerHTML = `
            <img src="${article.urlToImage || "/placeholder.svg"}" alt="${
      article.title
    }">
            <div class="news-item-content">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${
                  article.url
                }" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        `;
    newsContainer.appendChild(newsItem);
  });
}

fetchFootballNews();
