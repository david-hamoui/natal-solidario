const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapshot = document.getElementById('snapshot');
const captureBtn = document.getElementById('capture');

// Ask for camera access
navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    alert('Algo deu errado, por favor recarregue a página.');
    console.error(err);
  });

// Capture image
captureBtn.addEventListener('click', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const imageData = canvas.toDataURL('image/png');
  snapshot.src = imageData;
});
