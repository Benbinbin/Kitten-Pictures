// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
  if (request.message) {
    let imgs = document.getElementsByTagName('img');

    // let i = 1;

    for (img of imgs) {
      let width = img.width;
      let height = img.height;
      // let url = `https://picsum.photos/${width}/${height}?random=${i}`;
      let url = `http://placekitten.com/${width}/${height}`;
      // let url = `http://lorempixel.com/${width}/${height}/cats`;
      img.src = url;
      // i++;
    }
  }

}