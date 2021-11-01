const grams = {
  zeroGrams: {
    "--primaryColor": "rgba(255, 255, 255, 1)",
    "--secondaryColor": "rgba(0, 0, 0, 1)",
    "--altBgColor": "rgba(0, 0, 0, 0.05)",
    "--filterColor": "hue-rotate(0deg)",
    "--emojiSize": "2em"
  },
  oneGram: {
    "--primaryColor": "rgba(0, 0, 0, 1)",
    "--secondaryColor": "rgba(255, 255, 255, 1)",
    "--altBgColor": "rgba(255, 255, 255, 0.05)",
    "--filterColor": "grayscale(100%)",
    "--emojiSize": "3em"
  },
  twoGrams: {
    "--primaryColor": "rgba(195, 218, 254, 1)",
    "--secondaryColor": "rgba(60, 54, 107, 1)",
    "--altBgColor": "rgba(60, 54, 107, 0.05)",
    "--filterColor": "hue-rotate(240deg)",
    "--emojiSize": "4em"
  },
  threeGrams: {
    "--primaryColor": "rgba(195, 254, 222, 1)",
    "--secondaryColor": "rgba(54, 107, 61, 1)",
    "--altBgColor": "rgba(54, 107, 61, 0.05)",
    "--filterColor": "hue-rotate(120deg)",
    "--emojiSize": "5em"
  },
  fourGrams: {
    "--primaryColor": "rgba(244, 195, 254, 1)",
    "--secondaryColor": "rgba(105, 54, 107, 1)",
    "--altBgColor": "rgba(105, 54, 107, 0.05)",
    "--filterColor": "hue-rotate(300deg)",
    "--emojiSize": "6em"
  }
};

var gramsIndex = 0;

document.getElementById("change").addEventListener("click", function () {
  gramsIndex++;
  var gramCount = Object.keys(grams).length;
  gramsIndex = gramsIndex <= gramCount - 1 ? gramsIndex : 0;
  var theme = grams[Object.keys(grams)[gramsIndex]];
  activateTheme(theme);
});

function activateTheme(theme) {
  for (let prop in theme) {
    document.querySelector(":root").style.setProperty(prop, theme[prop]);
  }
}