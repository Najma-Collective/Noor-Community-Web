export const stories = [
  {
    id: 'amira-progress',
    title: 'Amira Finds Her Voice in Business English',
    summary:
      'How tailored business English coaching helped Amira secure a promotion and advocate for her team.',
    tags: ['business-english', 'career-growth', 'women'],
    programme: 'general-business',
    type: 'student',
    url: './stories.html#amira-progress',
    featured: true
  },
  {
    id: 'sami-eap',
    title: 'Sami Navigates University Admissions',
    summary:
      'Focused academic English support gave Sami the confidence to submit outstanding personal statements and thrive abroad.',
    tags: ['eap', 'higher-education'],
    programme: 'eap',
    type: 'student',
    url: './stories.html#sami-eap'
  },
  {
    id: 'noor-impact',
    title: 'Measuring Confidence Beyond the Classroom',
    summary:
      'Our data team connects storytelling with assessment to show how confidence scales across the cohort.',
    tags: ['impact', 'data', 'theory-of-change'],
    programme: 'impact',
    type: 'impact',
    url: './impact-stories.html#noor-impact'
  },
  {
    id: 'fatima-skills',
    title: 'Fatima Earns Her IELTS Scholarship',
    summary:
      'Community-powered peer study and targeted exam prep delivered a scholarship for Fatima.',
    tags: ['skills-exams', 'ielts'],
    programme: 'skills-exams',
    type: 'student',
    url: './stories.html#fatima-skills'
  },
  {
    id: 'volunteer-spotlight',
    title: 'Volunteer Spotlight: David’s Classroom in the Cloud',
    summary:
      'David brings asynchronous speaking labs and mentorship to students navigating time zones.',
    tags: ['volunteer', 'mentorship'],
    programme: 'volunteers',
    type: 'volunteer',
    url: './stories.html#volunteer-spotlight',
    featured: true
  },
  {
    id: 'partner-journey',
    title: 'Partners in Progress: Zahra Foundation',
    summary:
      'A regional foundation co-designs scholarship pathways with Noor Community educators.',
    tags: ['partners', 'collaboration'],
    programme: 'partners',
    type: 'partner',
    url: './stories.html#partner-journey'
  }
];

export function getStoriesByTag(tag) {
  return stories.filter((story) => story.tags.includes(tag));
}

export function getStoriesByProgramme(key) {
  return stories.filter((story) => story.programme === key);
}

export function getFeaturedStories(limit = 3) {
  return stories.filter((story) => story.featured).slice(0, limit);
}

export function getStoriesByTypes(types) {
  const lookup = Array.isArray(types) ? types : [types];
  return stories.filter((story) => lookup.includes(story.type));
}
