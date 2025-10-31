/**
 * Pexels API Integration
 * Fetches relevant images for the Noor Community website
 */

const PEXELS_API_KEY = 'ntFmvz0n4RpCRtHtRVV7HhAcbb4VQLwyEenPsqfIGdvpVvkgagK2dQEd';
const PEXELS_API_URL = 'https://api.pexels.com/v1';

/**
 * Fetch images from Pexels
 * @param {string} query - Search query for images
 * @param {number} perPage - Number of images to fetch (default: 10)
 * @returns {Promise<Array>} Array of image objects
 */
async function fetchPexelsImages(query, perPage = 10) {
  try {
    const response = await fetch(`${PEXELS_API_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`, {
      headers: {
        'Authorization': PEXELS_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const data = await response.json();
    return data.photos || [];
  } catch (error) {
    console.error('Error fetching Pexels images:', error);
    return [];
  }
}

/**
 * Get a random image from a Pexels search
 * @param {string} query - Search query
 * @returns {Promise<Object|null>} Image object or null
 */
async function getRandomPexelsImage(query) {
  const images = await fetchPexelsImages(query, 15);
  if (images.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

/**
 * Set image for an element with data-pexels-query attribute
 * @param {HTMLElement} element - Element to set image for
 * @param {string} query - Search query
 */
async function setPexelsImage(element, query) {
  const image = await getRandomPexelsImage(query);

  if (!image) {
    console.warn(`No image found for query: ${query}`);
    return;
  }

  // Use the large size for better quality
  const imageUrl = image.src.large2x || image.src.large || image.src.medium;

  if (element.tagName === 'IMG') {
    element.src = imageUrl;
    element.alt = image.alt || query;
  } else {
    element.style.backgroundImage = `url('${imageUrl}')`;
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
  }

  // Add photographer attribution if data attribute is present
  if (element.dataset.showAttribution === 'true') {
    const attribution = document.createElement('a');
    attribution.href = image.photographer_url;
    attribution.target = '_blank';
    attribution.rel = 'noopener noreferrer';
    attribution.textContent = `Photo by ${image.photographer}`;
    attribution.style.cssText = 'position: absolute; bottom: 0.5rem; right: 0.5rem; font-size: 0.75rem; color: white; background: rgba(0,0,0,0.5); padding: 0.25rem 0.5rem; border-radius: 0.25rem; text-decoration: none;';

    if (element.style.position !== 'absolute' && element.style.position !== 'relative') {
      element.style.position = 'relative';
    }

    element.appendChild(attribution);
  }
}

/**
 * Initialize Pexels images on page load
 * Looks for elements with data-pexels-query attribute
 */
async function initPexelsImages() {
  const elements = document.querySelectorAll('[data-pexels-query]');

  for (const element of elements) {
    const query = element.dataset.pexelsQuery;
    if (query) {
      await setPexelsImage(element, query);
    }
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPexelsImages);
} else {
  initPexelsImages();
}

// Export functions for manual use
window.PexelsAPI = {
  fetchImages: fetchPexelsImages,
  getRandomImage: getRandomPexelsImage,
  setImage: setPexelsImage,
  init: initPexelsImages
};
