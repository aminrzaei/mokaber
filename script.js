(async () => {
  const personContainer = document.querySelector(".hadis-person");
  const textContainer = document.querySelector(".hadis-text");
  const sourceContainer = document.querySelector(".hadis-source");

  try {
    const data = await fetch("https://api.keybit.ir/hadis/");
    const toJson = await data.json();
    const hadisPerson = toJson.result.person;
    const hadisText = toJson.result.text;
    const hadisSource = toJson.result.source;
    personContainer.textContent = hadisPerson;
    textContainer.textContent = hadisText;
    sourceContainer.textContent = hadisSource;
  } catch (err) {
    console.log(err);
  }
})();

function excluder(id) {
  const targets = [...document.querySelectorAll(`#${id}`)];
  targets.forEach((target) => {
    target.style.filter = "grayscale(1)";
  });
}

// excluder("gholam");
