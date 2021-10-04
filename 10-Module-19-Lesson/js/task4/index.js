/**
 * Using jQuery create on click "Hello button" show "hello" text and hide "good bye"
 */
const helloBtnRef = $('#hello-btn');
const helloImgRef = $('#hello-img');

const goodbyeBtnRef = $('#goodbye-btn');
const goodbyeImgRef = $('#goodbye-img');

goodbyeImgRef.hide();
helloBtnRef.hide();

helloBtnRef.click(() => {
  helloImgRef.show();
  goodbyeImgRef.hide();
  helloBtnRef.hide();
  goodbyeBtnRef.show();
});

goodbyeBtnRef.click(() => {
  helloImgRef.hide();
  goodbyeImgRef.show();
  helloBtnRef.show();
  goodbyeBtnRef.hide();
});
