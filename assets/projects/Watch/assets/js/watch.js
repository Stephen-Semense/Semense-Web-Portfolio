(function() {
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    const ampmSpan = document.getElementById('ampm');
  
    function updateTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      const isPM = hours >= 12;
      ampmSpan.textContent = isPM ? 'PM' : 'AM';
  
      hours = hours % 12;
      if (hours === 0) hours = 12;
  
      hoursSpan.textContent = hours.toString().padStart(2, '0');
      minutesSpan.textContent = minutes.toString().padStart(2, '0');
      secondsSpan.textContent = seconds.toString().padStart(2, '0');
    }
  
    setInterval(updateTime, 1000);
    updateTime();
  })();
  