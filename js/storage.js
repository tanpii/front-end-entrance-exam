document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[contenteditable="true"]').forEach(element => {
    const savedContent = localStorage.getItem(element.id);
    if (savedContent) {
      element.innerHTML = savedContent;
    }
  });

  document.querySelectorAll('[contenteditable="true"]').forEach(element => {
    element.addEventListener('input', () => {
      localStorage.setItem(element.id, element.innerHTML);
    });
  });
});
