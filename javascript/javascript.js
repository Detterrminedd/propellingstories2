let observedElements = document.querySelectorAll(
  ".images1, .images2,.images3,.images4,.images5,.images6,.images7,.images8"
);

const options = {threshold: 0.2};

const inViewCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};
let observer = new IntersectionObserver(inViewCallback, options);

observedElements.forEach((element) => {
  let dataDelay = element.getAttribute("data-delay");
  element.style.transitionDelay = dataDelay + "ms";
  observer.observe(element);
});