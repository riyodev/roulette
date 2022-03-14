function uptownfunc()
{
  if ((Math.floor(Math.random() * 6)) + 1 == 1) {
    {
      const audio = new Audio('ice.mp3');
      audio.play();
    } 

  }
  else {
    {
    const audio2 = new Audio('underpressure.mp3');
    audio2.play();
    }
  }
}