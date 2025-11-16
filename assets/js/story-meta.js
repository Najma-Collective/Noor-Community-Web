(() => {
  const dataElement = document.getElementById('story-page-metadata');
  if (!dataElement) return;

  let storyData;
  try {
    storyData = JSON.parse(dataElement.textContent);
  } catch (error) {
    console.error('Unable to parse story metadata', error);
    return;
  }

  const description = storyData.description;
  if (description) {
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', description);
  }

  const publisher =
    storyData.publisher ||
    {
      "@type": "Organization",
      name: 'Noor Community',
      url: 'https://www.noorcommunity.org',
    };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': storyData.type || 'WebPage',
    headline: storyData.title,
    name: storyData.title,
    description,
    url: storyData.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': storyData.url,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.noorcommunity.org/#website',
      url: 'https://www.noorcommunity.org',
      name: 'Noor Community',
    },
    datePublished: storyData.datePublished,
    author: storyData.author || publisher,
    publisher,
  };

  Object.keys(structuredData).forEach((key) => {
    if (structuredData[key] === undefined || structuredData[key] === null) {
      delete structuredData[key];
    }
  });

  const jsonLdScript = document.createElement('script');
  jsonLdScript.setAttribute('type', 'application/ld+json');
  jsonLdScript.textContent = JSON.stringify(structuredData);
  document.head.appendChild(jsonLdScript);
})();
