// JavaScript to dynamically generate 100+ images
const gallery = document.querySelector(".gallery");
for (let i = 1; i <= 100; i++) {
  const img = document.createElement("img");
  
  // Set image source
  img.src = `https://source.unsplash.com/300x200/?nature,flowers,landscape&random=${i}`;
  
  // Fallback image in case of error or if image doesn't load
  img.onerror = function() {
    img.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available'; // Default image
  };
  
  img.alt = `Nature Image ${i}`;
  gallery.appendChild(img);
}
