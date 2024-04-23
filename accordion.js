var accordionBtns = document.getElementsByClassName("expand-accordion-icon");

console.log(accordionBtns);

for (let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener("click", function() {
        console.log('triggered');
        this.classList.toggle("accordion-active");
        let accordion = accordionBtns[i].closest('div.accordion');
        accordion.classList.toggle('accordion-active');

        if (this.classList.contains('accordion-active')) {
            let accordionIcon = this.getElementsByTagName('img')[0];
            accordionIcon.setAttribute('src', 'assets/images/icon-minus.svg');
            accordionIcon.setAttribute('alt', 'minus');

            accordion.getElementsByClassName('accordion-description')[0].style.display = 'block';
            console.log('add active');

        } else {
            let accordionIcon = this.getElementsByTagName('img')[0];
            accordionIcon.setAttribute('src', 'assets/images/icon-plus.svg');
            accordionIcon.setAttribute('alt', 'plus');

            accordion.getElementsByClassName('accordion-description')[0].style.display = 'none'
            console.log('remove active');
        }
    });
}

