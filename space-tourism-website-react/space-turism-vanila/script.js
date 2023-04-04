function headerContent() {
    const content =
        `<header>
        <img style="height: 48px;" src="assets/shared/logo.svg" alt="iconAgency">
        <div class="line"></div>
        <nav>
            <ul class="navList">
                <li class="active"><a id="00" href="./home.html"><span>00</span> HOME</a></li>
                <li><a id="01" href="./destination.html"><span>01</span> DESTINATION</a></li>
                <li><a id="02" href=""><span>02</span> CREW</a></li>
                <li><a id="03" href=""><span>03</span> TECHNOLOGY</a></li>
            </ul>
        </nav>
    </header>`;

    document.querySelector('body').insertAdjacentHTML("beforebegin", content);
}
headerContent();

