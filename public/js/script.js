document.addEventListener("mousemove", (e) => {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");

  // posição do mouse
  leaf.style.left = e.pageX + "px";
  leaf.style.top = e.pageY + "px";

  document.body.appendChild(leaf);

  // remover folha depois da animação
  setTimeout(() => {
    leaf.remove();
  }, 20000);
});
