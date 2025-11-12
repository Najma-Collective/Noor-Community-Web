const heroCache = new Map();

function setHeroBackground(element, url) {
  if (!element) return;
  element.style.setProperty('--hero-image', `url("${url}")`);
  element.dataset.heroReady = 'true';
}

export async function applyHeroImage(element, query, options = {}) {
  if (!element) return;
  if (!query) {
    element.dataset.heroReady = 'false';
    return;
  }

  if (heroCache.has(query)) {
    setHeroBackground(element, heroCache.get(query));
    return;
  }

  const apiKey = options.apiKey || import.meta.env.VITE_PEXELS_API_KEY;
  if (!apiKey) {
    element.dataset.heroReady = 'false';
    return;
  }

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=landscape&per_page=1`,
      {
        headers: {
          Authorization: apiKey
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Pexels request failed: ${response.status}`);
    }

    const data = await response.json();
    const heroUrl = data?.photos?.[0]?.src?.landscape;

    if (heroUrl) {
      heroCache.set(query, heroUrl);
      setHeroBackground(element, heroUrl);
    } else {
      element.dataset.heroReady = 'false';
    }
  } catch (error) {
    console.error('Hero image fetch failed', error);
    element.dataset.heroReady = 'false';
  }
}
