import type { Project } from '@/lib/types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Web Apps Portfolio',
    description: 'A portfolio website showcasing a collection of web apps. Built with JavaScript, React JS, TypeScript, Next.js and Tailwind CSS.',
    imageUrls: [
      "https://drive.google.com/uc?export=view&id=1Vuvcvt2bp0rBpMFASYrAWncFX4vxacuY", // Google Drive direct image link
    ],
    technologies: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'],
    liveLink: 'dimasapradana-portfolioapp.vercel.app',
    repoLink: 'https://github.com/dimas405/Web-App-Portfolio/tree/main',
    featured: true,
  },
  {
    id: '2',
    title: 'Sisfo PMPS',
    description: 'Sistem informasi Rekapitulasi Tridharma Dosen berbasis web ini dibuat sebagai bagian dari magang di PRODI TIF, Universitas PGRI Madiun.',
    imageUrls: ['https://drive.google.com/uc?export=view&id=1HMu7WPjFAjL_hEYKdKk-3MjU2ap_bq5g'], // Greenish
    imageHints: ['productivity tool interface'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'SCSS/SASS'],
  },
  {
    id: '3',
    title: 'Weather Web App',
    description: 'A weather app that provides real-time weather information for any location. Built with HTML, CSS, JavaScript, and Weather APIs.',
    imageUrls: ['https://drive.google.com/uc?export=view&id=1KhndLjUW5uajkO-CKVhhb_evLZWxKTht'], // Orangey
    imageHints: ['writing website homepage'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API']
    // liveLink: '#',
    // repoLink: '#',
  },
  {
    id: '4',
    title: 'Celenium – Smart Crypto Analysis App',
    description: 'This application helps you monitor and analyze the cryptocurrency market using AI-powered tools. With artificial intelligence, it calculates dynamic support and resistance levels to provide deeper market insights. This application is still under development. (Prototipe)',
    imageUrls: [
      'https://drive.google.com/uc?export=view&id=1HSKQ1zJwlkzT5fdIAY83QQzXsHbkrJ9x' // Bluish
      // 'https://drive.google.com/uc?export=view&id=1I4DeFGXNfh_9Z7YoBVUSue2KY3KO4ubf',
      // 'https://drive.google.com/uc?export=view&id=15XfEJ1YzxGdD-B-SkkH8VlefIts4FltU' 
    ],
    technologies: ['TypeScript', 'ReactJS', 'NextJS', 'TailwindCSS', 'Rest API'],
    liveLink: 'https://cryptoedge-scanner-betaversion.vercel.app/',
    repoLink: '#',
    featured: true,
  },
  {
    id: '7',
    title: 'Snake Game Web App',
    description: 'A classic snake game built with HTML, CSS, and JavaScript. Users can control the snake with arrow keys and the goal is to eat the red apples without colliding with the walls or the snake\'s own body',
    imageUrls: [
      'https://drive.google.com/uc?export=view&id=1QzL2qQiUU-gNKuXLBYQigXtxsWcWkOcE' // Bluish
      // 'https://drive.google.com/uc?export=view&id=1I4DeFGXNfh_9Z7YoBVUSue2KY3KO4ubf',
      // 'https://drive.google.com/uc?export=view&id=15XfEJ1YzxGdD-B-SkkH8VlefIts4FltU' 
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap5'],
    liveLink: 'https://game-snake-eight.vercel.app/',
    repoLink: 'https://github.com/dimas405/game-snake',
    featured: true,
  },
   {
    id: '5',
    title: 'Coffee Shop App',
    description: 'A coffee shop app that allows users to browse and order coffee. Built with HTML, CSS, and JavaScript.',
    imageUrls: ['https://drive.google.com/uc?export=view&id=1JXK_TQPg88wh2Pp-mmAyFTyL9C2hnKJe'], // Yellowish
    technologies: ['HTML', 'CSS', 'JavaScript'],
    // liveLink: '#',
    // repoLink: '#',
  },
  {
    id: '6',
    title: 'Jumping Dog Game App',
    description: 'A simple game where the player controls a dog and tries to jump over obstacles. Built with HTML, CSS, and JavaScript.',
    imageUrls: [
      'https://drive.google.com/uc?export=view&id=1G7QPUfE953mrloxmNVX0Yv35yZi1SKkQ', // Purplish
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://jumpingdog.vercel.app/',
    repoLink: 'https://github.com/dimas405/JumpDog',
    featured: true,
  }
];
