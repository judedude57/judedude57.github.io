console.log("FreeGens loaded!");
<script>
  const coin = document.getElementById('coin');
  const flipBtn = document.getElementById('flipBtn');
  const coinResult = document.getElementById('coinResult');

  flipBtn.addEventListener('click', () => {
    const isHeads = Math.random() < 0.5;
    const spins = 4; // full spins
    const finalRotation = isHeads ? 0 : 180;

    coin.classList.add('flipping');
    coin.style.transform = `rotateY(${spins * 360 + finalRotation}deg)`;

    coinResult.textContent = 'Flipping...';

    setTimeout(() => {
      coin.classList.remove('flipping');
      coinResult.textContent = isHeads ? 'Heads!' : 'Tails!';
    }, 1200);
  });
</script>
