importScripts('imageManips.js');

this.onmessage = function(e) {
  var imageData = e.data.imageData;
  var type = e.data.type;
  var i4, i41, i42, i43;

  try {
    length = imageData.data.length / 4;
    var countPixel = manipulate(type);
    for (i = j = 0, ref = length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      i4 = i*4; i41 = i4 + 1;  i42 = i4 + 2; i43 = i4 + 3;
      r = imageData.data[i4];
      g = imageData.data[i41];
      b = imageData.data[i42];
      a = imageData.data[i43];
      pixel = countPixel(r, g, b, a);
      imageData.data[i4] = pixel[0];
      imageData.data[i41] = pixel[1];
      imageData.data[i42] = pixel[2];
      imageData.data[i43] = pixel[3];
    }
    postMessage(imageData);
  } catch (e) {
    function ManipulatorException(message) {
      this.name = "ManipulationException";
      this.message = message;
    };
    throw new InverterException('Image manipulation error');
    postMessage(undefined);
  }
}