let isOn = false;
let isModalShown = false;
let previousSelectOption = "white";

$(".filter").on("change", function () {
  if (isOn) {
    alert("Спочатку треба вимкнути пристрій");
    $(this).val(previousSelectOption);
    return false;
  }
  const value = $(this).val();
  const index = $("input").val();
  previousSelectOption = value;

  if (value === "white") {
    $(".filter-img").prop("src", `./img/interference-${index}.jpg`);
  } else {
    $(".filter-img").prop("src", `./img/interference-${index}-${value}.png`);
  }
});

$("input").on("input", function () {
  const value = $(this).val();
  const color = $(".filter").val();

  if (color === "white") {
    $(".filter-img").prop("src", `./img/interference-${value}.jpg`);
  } else {
    $(".filter-img").prop("src", `./img/interference-${value}-${color}.png`);
  }
});

$(".slider-btn, .button.slider").on("click", toggleSlider);

function toggleSlider() {
  if (isOn) {
    $(".slider-img").prop("src", "./img/slider-modif.png");
    $(".filter-img").css("opacity", 0);
    $(".button.slider").html("Увімкнути пристрій");
  } else {
    $(".slider-img").prop("src", "./img/slider-modif-on.png");
    $(".filter-img").css("opacity", 1);
    $(".button.slider").html("Вимикнути пристрій");
  }
  isOn = !isOn;
}

$(".close-btn, .button-ocular").on("click", toggleModal);

function toggleModal() {
  if (isModalShown) {
    $(".modal").css("display", "none");
  } else {
    $(".modal").css("display", "flex");
  }
  isModalShown = !isModalShown;
}
