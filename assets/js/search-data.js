// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-research",
    title: "Research",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Meet the researchers at the Biological Nanoparticles Laboratory.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-patents",
          title: "Patents",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/patents/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-media",
          title: "Media",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/media/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "post-nlsev-2026-coming-to-groningen-for-the-first-time",
        
          title: "NLSEV 2026: Coming to Groningen for the First Time",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/nlsev-2026-coming-to-groningen-for-the-first-time/";
          
        },
      },{id: "post-new-msc-student",
        
          title: "New MSc student",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/new-msc-student/";
          
        },
      },{id: "post-new-msc-students",
        
          title: "New MSc students",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/new-msc-students/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-breast-to-brain-metastasis",
          title: 'Breast to Brain Metastasis',
          description: "Investigating the role of cancer-derived EVs in the early steps of metastasis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_metastasis/";
            },},{id: "projects-ev-mimetics-amp-drug-delivery",
          title: 'EV-Mimetics &amp;amp; Drug Delivery',
          description: "Loading and engineering EV-mimetics as biocompatible targeted vehicles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_drug_delivery/";
            },},{id: "projects-the-biomolecular-corona",
          title: 'The Biomolecular Corona',
          description: "Studying the formation and composition of the biomolecular corona of cancer-derived EVs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_corona/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
