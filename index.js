const grams = {
  zeroGrams: {
    "--primaryColor": "rgba(255, 255, 255, 1)",
    "--secondaryColor": "rgba(0, 0, 0, 1)",
    "--altBgColor": "rgba(0, 0, 0, 0.05)",
    "--filterColor": "hue-rotate(0deg)",
    "--emojiSize": "2em",
    "--caption": "'clck 2 eat'"
  },
  oneGram: {
    "--primaryColor": "rgba(0, 0, 0, 1)",
    "--secondaryColor": "rgba(255, 255, 255, 1)",
    "--altBgColor": "rgba(255, 255, 255, 0.05)",
    "--filterColor": "grayscale(100%)",
    "--emojiSize": "3em",
    "--caption": "'clck 2 eat'"
  },
  twoGrams: {
    "--primaryColor": "rgba(195, 218, 254, 1)",
    "--secondaryColor": "rgba(60, 54, 107, 1)",
    "--altBgColor": "rgba(60, 54, 107, 0.05)",
    "--filterColor": "hue-rotate(240deg)",
    "--emojiSize": "4em",
    "--caption": "'clck 2 eat'"
  },
  threeGrams: {
    "--primaryColor": "rgba(195, 254, 222, 1)",
    "--secondaryColor": "rgba(54, 107, 61, 1)",
    "--altBgColor": "rgba(54, 107, 61, 0.05)",
    "--filterColor": "hue-rotate(120deg)",
    "--emojiSize": "5em",
    "--caption": "'clck 2 eat'"
  },
  fourGrams: {
    "--primaryColor": "rgba(244, 195, 254, 1)",
    "--secondaryColor": "rgba(105, 54, 107, 1)",
    "--altBgColor": "rgba(105, 54, 107, 0.05)",
    "--filterColor": "hue-rotate(300deg)",
    "--emojiSize": "6em",
    "--caption": "'clck 4 reality'"
  }
};

var gramsIndex = 0;

document.getElementById("change").addEventListener("click", function () {
  gramsIndex++;
  var gramCount = Object.keys(grams).length;
  gramsIndex = gramsIndex <= gramCount - 1 ? gramsIndex : 0;
  var weight = grams[Object.keys(grams)[gramsIndex]];
  eat(weight);
});

function eat(weight) {
  for (let effect in weight) {
    document.querySelector(":root").style.setProperty(effect, weight[effect]);
  }
}