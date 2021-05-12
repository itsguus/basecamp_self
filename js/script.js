const availableClasses = ["s0", "s1", "s2", "s3", "s4", "s5"];

document.querySelector("section.landing").addEventListener("scroll", () => {
    const section = document.querySelector("section.landing"),
        y = section.scrollTop,
        figures = section.querySelectorAll("figure"),
        windowHeight = figures[0].offsetHeight;

    let currentSection = (y / windowHeight),
    perc  = currentSection % 1;
    if(perc >= 0.5) currentSection = Math.ceil(currentSection);
    else if (perc < 0.5) currentSection = Math.floor(currentSection);
    removeBodyClasses();
    document.body.classList.add(`s${currentSection}`)
})

function removeBodyClasses() {
    for (let cs of availableClasses) {
        document.body.classList.remove(cs);
    }
}