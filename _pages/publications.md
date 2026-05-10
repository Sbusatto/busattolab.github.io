---
layout: page
title: Publications
permalink: /publications/
nav: true
nav_order: 3
---

<!-- BARRA DI RICERCA -->
<div class="search-container" style="margin-bottom: 40px; margin-top: 20px;">
  <input type="text" id="pub-search" placeholder="🔍 Search by title, author, journal or keyword..." style="width: 100%; padding: 12px 20px; font-size: 1.1rem; border: 2px solid var(--global-divider-color, #eee); border-radius: 8px; background-color: transparent; color: var(--global-text-color); outline: none;">
</div>

<div class="publications">
  {% bibliography %}
</div>

<!-- STILE: Forza gli anni a sinistra e formatta il layout -->
<style>
  /* Stile per la barra di ricerca quando cliccata */
  #pub-search:focus {
    border-color: var(--global-theme-color, #ed1c24);
    box-shadow: 0 0 8px rgba(237, 28, 36, 0.2);
  }

  .publications h2 {
    position: relative !important; 
    right: auto !important;
    text-align: left !important;
    font-size: 2rem !important;  
    font-weight: bold !important;
    color: var(--global-text-color) !important; 
    opacity: 1 !important; 
    cursor: pointer;
    border-bottom: 2px solid var(--global-theme-color, #ed1c24) !important; 
    border-top: none !important;
    padding-bottom: 5px;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    transition: color 0.2s;
    width: 100%;
  }
  
  .publications h2:hover {
    color: var(--global-theme-color, #ed1c24) !important;
  }

  .publications h2::after {
    content: '\25BC'; 
    font-size: 1.2rem;
    transition: transform 0.3s;
    color: var(--global-text-color);
  }

  .publications h2.is-collapsed::after {
    transform: rotate(-90deg);
  }
</style>

<!-- MOTORE JAVASCRIPT: Gestisce le tendine e la ricerca -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    
    // 1. CONFIGURAZIONE TENDINE (Anni)
    const yearHeaders = document.querySelectorAll('.publications h2');
    const allToggleGroups = []; 
    
    yearHeaders.forEach(header => {
      let nextEl = header.nextElementSibling;
      let elementsToToggle = [];
      
      while (nextEl && nextEl.tagName !== 'H2') {
        elementsToToggle.push(nextEl);
        nextEl = nextEl.nextElementSibling;
      }
      
      allToggleGroups.push({ header: header, elements: elementsToToggle });

      if (elementsToToggle.length > 0) {
        header.addEventListener('click', () => {
          header.classList.toggle('is-collapsed');
          elementsToToggle.forEach(el => {
            if (el.style.display === 'none') {
              el.style.display = ''; 
            } else {
              el.style.display = 'none'; 
            }
          });
        });
      }
    });

    // 2. CONFIGURAZIONE RICERCA LIVE
    const searchInput = document.getElementById('pub-search');
    // Prende tutte le singole pubblicazioni (tag LI)
    const publications = document.querySelectorAll('.publications li');

    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      
      // A. Filtra le singole pubblicazioni
      publications.forEach(pub => {
        const text = pub.textContent.toLowerCase();
        if (text.includes(query)) {
          pub.style.display = ''; // Mostra
        } else {
          pub.style.display = 'none'; // Nasconde
        }
      });
      
      // B. Gestione intelligente degli Anni (H2)
      if (query.length > 0) {
         // Se stiamo cercando, apri tutto e nascondi gli anni vuoti
         allToggleGroups.forEach(group => {
            group.header.classList.remove('is-collapsed'); // Gira la freccia in giù
            group.elements.forEach(el => el.style.display = ''); // Forza l'apertura del blocco
            
            // Controlla se è rimasta almeno una pubblicazione visibile in questo anno
            let hasVisiblePubs = false;
            group.elements.forEach(el => {
              const lis = el.querySelectorAll ? el.querySelectorAll('li') : [];
              if (el.tagName === 'LI' && el.style.display !== 'none') hasVisiblePubs = true;
              lis.forEach(li => {
                  if(li.style.display !== 'none') hasVisiblePubs = true;
              });
            });
            
            // Se non ci sono pubblicazioni, nascondi l'intero anno
            if (!hasVisiblePubs) {
                group.header.style.display = 'none';
            } else {
                group.header.style.display = 'flex'; 
            }
         });
      } else {
         // Se cancelli la ricerca, ripristina tutti gli anni
         allToggleGroups.forEach(group => {
             group.header.style.display = 'flex';
         });
      }
    });
  });
</script>