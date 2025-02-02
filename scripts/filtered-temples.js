const temples = [
  {
      name: "Denver Colorado Temple",
      location: "Denver, Colorado, United States",
      dedicated: "1999, October, 24",
      area: 28000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/2018/1280x800/denver-colorado-temple-lds-137883-wallpaper.jpg"
  },
  {
      name: "Cedar City Utah Temple",
      location: "Cedar City, Utah, United States",
      dedicated: "2017, December, 10",
      area: 42000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/2018/1280x800/cedar-city-utah-temple-lds-137883-wallpaper.jpg"
  },
  {
      name: "Los Angeles California Temple",
      location: "Los Angeles, California, United States",
      dedicated: "1956, March, 11",
      area: 190614,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/2018/1280x800/los-angeles-california-temple-lds-137883-wallpaper.jpg"
  },
  {
      name: "St. George Utah Temple",
      location: "St. George, Utah, United States",
      dedicated: "1877, April, 6",
      area: 110000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/2018/1280x800/st-george-utah-temple-lds-137883-wallpaper.jpg"
  },
  {
      name: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/2018/1280x800/salt-lake-temple-lds-137883-wallpaper.jpg"
  },
  {
      name: "Saratoga Springs Utah Temple",
      location: "Saratoga Springs, Utah, United States",
      dedicated: "2023, August, 13",
      area: 87000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/saratoga-springs-utah/2018/1280x800/saratoga-springs-utah-temple-lds-137883-wallpaper.jpg"
  },
  {
      name: "Mesa Arizona Temple",
      location: "Mesa, Arizona, United States",
      dedicated: "1927, October, 23",
      area: 113000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/2018/1280x800/mesa-arizona-temple-lds-137883-wallpaper.jpg"
  },
  {
      name: "Pittsburgh Pennsylvania Temple",
      location: "Pittsburgh, Pennsylvania, United States",
      dedicated: "2023, September, 17",
      area: 32000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/pittsburgh-pennsylvania/2018/1280x800/pittsburgh-pennsylvania-temple-lds-137883-wallpaper.jpg"
  },
  {
      name: "Provo City Center Temple",
      location: "Provo, Utah, United States",
      dedicated: "2016, March, 20",
      area: 85000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center-temple/2018/1280x800/provo-city-center-temple-lds-137883-wallpaper.jpg"
  }
];

function displayTemples(templesArray) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Clear existing content

  templesArray.forEach(temple => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      const figcaption = document.createElement('figcaption');
      const pLocation = document.createElement('p');
      const pDedicated = document.createElement('p');
      const pArea = document.createElement('p');

      img.src = temple.imageUrl;
      img.alt = temple.name;
      img.loading = "lazy"; // Enable lazy loading

      figcaption.textContent = temple.name;
      pLocation.textContent = `Location: ${temple.location}`;
      pDedicated.textContent = `Dedicated: ${temple.dedicated}`;
      pArea.textContent = `Area: ${temple.area} sq ft`;

      figure.appendChild(img);
      figure.appendChild(figcaption);
      figure.appendChild(pLocation);
      figure.appendChild(pDedicated);
      figure.appendChild(pArea);

      gallery.appendChild(figure);
  });
}

// Initial display of all temples
displayTemples(temples);

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = e.target.textContent.toLowerCase();

      let filteredTemples = [];
      switch (filter) {
          case 'old':
              filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
              break;
          case 'new':
              filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
              break;
          case 'large':
              filteredTemples = temples.filter(temple => temple.area > 90000);
              break;
          case 'small':
              filteredTemples = temples.filter(temple => temple.area < 10000);
              break;
          case 'home':
              filteredTemples = temples;
              break;
          default:
              filteredTemples = temples;
      }

      displayTemples(filteredTemples);
  });
});