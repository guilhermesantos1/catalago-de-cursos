var width = window.innerWidth;
var height = window.innerHeight;
var article = document.getElementsByTagName('article');
var c_orientation = "";
var auxWidth = "";
var namePage = "";

function init() {
    $(window).resize(onResize);
    createMenuButtons();
    onResize();
    $(document).on('click', '[data-linkOpen]', abrirLinkBlank);
}

function scroll() {
    var filter = document.getElementById("filters");
    // console.log("window.pageYOffset ", window.pageYOffset);
    if (typeof( window.pageYOffset ) == 'number') {
        if (namePage == "jogos") {
            if (window.pageYOffset >= 336) {
                filter.style.position = "fixed";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "-230px";
                    filter.style.marginLeft = "-77px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "-220px";
                    filter.style.marginLeft = "-84px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "-210px";
                    filter.style.marginLeft = "-94px";
                }
            } else {
                filter.style.position = "";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "26px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "18px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "10px";
                    filter.style.marginLeft = "0px";
                }
            }
        } else if (namePage == "publicacoes") {
            if (window.pageYOffset >= 358) {
                filter.style.position = "fixed";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "-210px";
                    filter.style.marginLeft = "-117px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "-200px";
                    filter.style.marginLeft = "-124px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "-190px";
                    filter.style.marginLeft = "-134px";
                }
            } else {
                filter.style.position = "";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "26px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "18px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "10px";
                    filter.style.marginLeft = "0px";
                }
            }
        } else if (namePage == "cursos") {
            if (window.pageYOffset >= 350) {
                filter.style.position = "fixed";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "-210px";
                    filter.style.marginLeft = "-112px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "-200px";
                    filter.style.marginLeft = "-120px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "-190px";
                    filter.style.marginLeft = "-130px";
                }
            } else {
                filter.style.position = "";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "26px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "18px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "10px";
                    filter.style.marginLeft = "0px";
                }
            }
        } else if (namePage == "videos") {
            if (window.pageYOffset >= 333) {
                filter.style.position = "fixed";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "-70px";
                    filter.style.marginLeft = "-230px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "-60px";
                    filter.style.marginLeft = "-238px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "-50px";
                    filter.style.marginLeft = "-248px";
                }
            } else {
                filter.style.position = "";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "26px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "18px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "10px";
                    filter.style.marginLeft = "0px";
                }
            }
        } else if (namePage == "mobile") {
            if (window.pageYOffset >= 356) {
                filter.style.position = "fixed";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "-205px";
                    filter.style.marginLeft = "-108px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "-205px";
                    filter.style.marginLeft = "-115px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "-205px";
                    filter.style.marginLeft = "-125px";
                }
            } else {
                filter.style.position = "";
                if (auxWidth >= 1200) {
                    filter.style.marginTop = "26px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth > 992 && auxWidth < 1200) {
                    filter.style.marginTop = "18px";
                    filter.style.marginLeft = "0px";
                } else if (auxWidth <= 991) {
                    filter.style.marginTop = "10px";
                    filter.style.marginLeft = "0px";
                }
            }
        } else {
            console.log("namePage", namePage);
        }
    }
}

function onResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    auxWidth = width;
    // console.log("w", width);

    var next_orientation = (width >= 992) ? "vertical" : "horizontal";

    if (next_orientation != c_orientation) {
        c_orientation = next_orientation;
        carregarThumbs(c_orientation);
        initElementsHome(c_orientation);
        console.log("Mudei a orientação.... ", c_orientation);
    }
}

function initElementsHome(orientation) {
    for (i = 0; i < article.length; i++) {
        if (orientation === "vertical") {
            if (i % 2 === 0) {
                article[i].style.marginTop = "0px";
            } else {
                article[i].style.marginTop = "56px";
            }
        } else {
            article[i].style.marginTop = "10px";
        }
    }
}

function carregarThumbs(orientation) {

    var prefix_src = "";
    var img_type = "dataImg";

    if (orientation === "vertical") {
        prefix_src = "img/desk/";
    } else {
        prefix_src = "img/tablet/";
    }

    $("["+img_type+"]").each(function() {
        $(this).find("img").attr("src", prefix_src + $(this).attr(img_type));
    });
}


function createMenuButtons() {

    var pages = [
        "publicacoes",
        "videos",
        "jogos",
        "ilustracoes",
        "mobile",
        "cursos"
    ];

    $("[dataImg]").each(function(index) {
        var c_btn = $(this).find("img");
        c_btn.on("click", function(){ ShowPagesMenu(pages[index]); });
        c_btn.css('cursor', 'pointer');
    });
}

function ShowPagesMenu(page) {
    //console.log("Vá para a página '", page, "'");

    switch (page) {
        case "publicacoes":
            carregaPagina(page);
            break;
        case "videos":
            carregaPagina(page);
            break;
        case "jogos":
            carregaPagina(page);
            break;
        case "ilustracoes":
            carregaPagina(page);
            break;
        case "mobile":
            carregaPagina(page);
            break;
        case "cursos":
            carregaPagina(page);
            break;
        default: console.log("Não encontrei a página...");
    }
}

function carregaPagina(page) {
    $('[data-id="main"]').empty();
    $('[data-id="main"]').load("pages/"+ page + ".html");
    // window.location.href = '#!/' + page;
    namePage = page;
    window.onscroll = scroll;
}

function abrirLinkBlank() {
	window.open($(this).attr("data-linkOpen"),"_blank");
}

window.onload = init;
