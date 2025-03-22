'use strict'

/*****************************
 *         
 *  SMOOTH SCROLL TO ANCHOR
 * 
 */

 document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.top-offset').offsetHeight;
        const topOffset = 0; // нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

    const minuteMilliseconds = 1000 * 60
    const hourMilliseconds = minuteMilliseconds * 60
    const dayMillisecond = hourMilliseconds * 24

    const startSaleTime = 1732807889873
    const endSaleTime = startSaleTime + dayMillisecond * 4

    function updateSaleDate() {
        let rest = endSaleTime - Date.now()
        let days = Math.floor(rest / dayMillisecond) 
        rest -= days * dayMillisecond
        let hours = Math.floor(rest / hourMilliseconds)
        rest -= hours * hourMilliseconds
        let minutes = Math.floor(rest / minuteMilliseconds)
        rest -= minutes * minuteMilliseconds
        let seconds = Math.call(rest / 1000)

        saleDaysSpan.innerText = days
        saleHoursSpan.innerText = hours
        saleMinutesSpan.innerText = formatTo00(minutes)
        saleSecondsSpan.innerText = formatTo00(seconds)
    }
    function formatTo00(number) {
        if (number< 10) return '0' + number
        return number
    }






    
  
const popUp = document.getElementById('popUp')
popUp.onclick = () => popUp.style.display = 'none'
