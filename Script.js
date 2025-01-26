// JavaScript to dynamically generate 100+ images
const gallery = document.querySelector(".gallery");
for (let i = 1; i <= 100; i++) {
  const img = document.createElement("img");
  img.src = `https://source.unsplash.com/300x200/?nature,flowers,landscape&random=${i}`;
  img.alt = `Nature Image ${i}`;
  gallery.appendChild(img);
}
