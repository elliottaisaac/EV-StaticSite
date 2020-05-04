//Line-Plot Navigation ------------------------------------------------------------------------------------------->
    //auto-sets all coordinates in the SVG
    let coords = [
       { x:212,y:12 },
       { x:12, y:142 },
       { x:192,y:272 },
       { x:34, y:402 },
       { x:202,y:538 }
    ];

    document.querySelector("#lineNav svg path").setAttribute("d", `M${coords[0].x} ${coords[0].y} L${coords[1].x} ${coords[1].y} L${coords[2].x} ${coords[2].y} L${coords[3].x} ${coords[3].y} L${coords[4].x} ${coords[4].y}`);
    
    let idx = 0;
    document.querySelectorAll("#lineNav svg g circle").forEach(circle => {
        circle.setAttribute("cx", coords[idx].x);
        circle.setAttribute("cy", coords[idx].y);
        idx++;
    });
    idx = 0;
    document.querySelectorAll(".linePlotLabel").forEach(text => {
        text.setAttribute("x", coords[idx].x);
        text.setAttribute("y", coords[idx].y);
        idx++;
    });

    window.addEventListener("load", (e) => NavigateLinePlot(e) );
    document.querySelector("#lineNav").addEventListener("mousemove", (e) => NavigateLinePlot(e) );
    
    let frozen = false;
    document.querySelector("#lineNav").addEventListener("click", () => { 
        if(frozen) frozen = false;
        else frozen = true;
    });

    document.querySelector("#lineNav").addEventListener("mouseover", () => document.querySelector("#lockText").style.opacity = 1);
    document.querySelector("#lineNav").addEventListener("mouseout", () => document.querySelector("#lockText").style.opacity = 0);

    let distances;
    function NavigateLinePlot(e){
        if(!frozen){
            document.querySelector("#lockText").innerHTML = "Click to lock";
            distances = [];
            
            document.querySelectorAll(".linePlotNav").forEach(dot => {
                let Dot = {
                    distance: GetDistance(e.clientX, e.clientY, dot.getBoundingClientRect().left, dot.getBoundingClientRect().top),
                    name: dot.id
                }
                dot.setAttribute("r", "6");
                dot.style.fill = "#613cf5";
                distances.push(Dot);
                document.querySelectorAll(".linePlotLabel").forEach(l => {
                    l.style.fill = "transparent"; 
                    l.classList.remove("slide-in");
                });
            });

            let lowNum = 0;
            for(let i = 0; i < distances.length; i++){
                    if(distances[i].distance < distances[lowNum].distance) lowNum = i;
            }
            document.querySelector(`#${distances[lowNum].name}`).style.fill = "#ffffff";
            document.querySelector(`#${distances[lowNum].name}`).setAttribute('r', "10" );
            document.querySelector(`.${distances[lowNum].name}.label`).style.fill = "#613cf5";
            document.querySelector(`.${distances[lowNum].name}.label`).classList.add("slide-in");

            Slide(lowNum + 1);
        } 
        else document.querySelector("#lockText").innerHTML = "Click to unlock";
    }

    function GetDistance(x1, y1, x2, y2){
        return Math.sqrt( Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
//------------------------------------------------------------------------------------------->


//Homepage carousel ------------------------------------------------------------------------------------------->
    let carouselObjects = [
        {
            name: "Artists",
            headline: "Lorum artsom",
            subhead: "Sed vulputate tortor non suscipit commodo.",
            paragraphText: "Vestibulum at pulvinar augue. Nulla eu erat sagittis, interdum dolor at, pretium orci. Pellentesque sit amet cursus risus. Nulla ornare augue augue, cursus fermentum odio aliquam et. Sed purus nisl, fermentum vel laoreet ac, malesuada et tellus. Vivamus et consequat diam, eu ultrices nibh. Integer malesuada lacus non pellentesque vulputate. Duis vitae sem convallis sapien finibus tempus imperdiet in elit. In facilisis neque nec mi pretium, et dictum tortor rutrum. Quisque ut auctor quam. Morbi eget fringilla turpis, ac pulvinar lacus. Suspendisse pulvinar, metus vel congue finibus, quam quam consequat risus, pulvinar blandit ante nulla quis nisi. Etiam convallis eros risus, eget tristique massa volutpat ac. Nulla maximus ut leo ut tincidunt. Praesent maximus, eros congue sollicitudin commodo, nunc lectus imperdiet arcu, non pellentesque mauris ante vitae turpis. Nullam ultrices id ante nec pellentesque. Fusce sed nulla id sem feugiat ultricies. Integer.",
            imgURL: "../img/placeholder.jpg",
            caption1: "Art Caption Line One",
            caption2: "Art Caption Line Two",
        },
        {
            name: "Artists",
            headline: "Lorum Artistsum",
            subhead: "Sed vulputate tortor non suscipit commodo.",
            paragraphText: "Nunc eu erat ut nibh scelerisque tincidunt ac ac sem. Maecenas a nisi metus. Aliquam feugiat ipsum sed erat gravida, et pretium est facilisis. Suspendisse eget volutpat erat. Nunc nulla diam, consequat non posuere vel, gravida sed ipsum. Sed tempor vulputate diam maximus viverra. Vivamus pretium nisl velit, vitae malesuada est tempor in. Aliquam ac efficitur sem. Sed sodales dignissim semper. Curabitur dapibus, nibh vitae luctus pretium, nulla libero eleifend magna, id aliquam mauris dolor quis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam a nibh ultricies, dapibus diam id, mollis felis. Phasellus malesuada lorem euismod dui mollis lobortis vitae sit amet nulla. Nulla facilisi. Suspendisse id arcu eget sem auctor lobortis. Curabitur et.",
            imgURL: "../img/placeholder.jpg",
            caption1: "Artists Caption Line One",
            caption2: "Artists Caption Line Two",
        },
        {
            name: "Hubs",
            headline: "Lorum Hubsum",
            subhead: "Sed vulputate tortor non suscipit commodo.",
            paragraphText: "Donec a porttitor ligula. Mauris venenatis mattis placerat. Nulla id lacus lacus. Fusce fringilla id ipsum id suscipit. Etiam blandit elementum lectus, nec commodo nisi viverra nec. Morbi fringilla efficitur lacus, nec rhoncus ipsum tincidunt accumsan. Vestibulum eget commodo justo. Vivamus justo magna, posuere in blandit a, porta non est. Sed mattis ac ipsum id aliquet. Cras maximus velit lectus. \nCurabitur tristique lectus tellus, sed eleifend libero lacinia ac. Nulla euismod in enim ac tempor. In blandit elit in interdum aliquet. Fusce eleifend semper ante blandit iaculis. Integer dui elit, iaculis sit amet aliquet sit amet, gravida sed est. Phasellus eget tempor augue, nec laoreet turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nec risus.",
            imgURL: "../img/placeholder.jpg",
            caption1: "Hubs Caption Line One",
            caption2: "Hubs Caption Line Two",
        },
        {
            name: "About",
            headline: "Lorum Toursum",
            subhead: "Sed vulputate tortor non suscipit commodo.",
            paragraphText: "Maecenas mauris enim, vehicula at ullamcorper nec, dignissim vel elit. Pellentesque sed egestas dui. Suspendisse a dictum dui. Mauris dui nunc, imperdiet quis suscipit eget, imperdiet in ipsum. Aliquam felis libero, elementum sed tortor sodales, lacinia fermentum dui. Sed ut ante massa. Nullam eget varius nibh. Fusce ornare at sapien nec sagittis. Nulla facilisi. Donec purus nisl, iaculis eu bibendum varius, ornare eget lectus. Etiam sodales fringilla eros, dapibus dapibus ligula scelerisque quis.",
            imgURL: "../img/placeholder.jpg",
            caption1: "Tour Caption Line One",
            caption2: "Tour Caption Line Two",
        },
        {
            name: "About",
            headline: "Lorum Aboutsum",
            subhead: "Sed vulputate tortor non suscipit commodo.",
            paragraphText: "Proin quam purus, tincidunt id mi ac, ultrices tristique risus. Sed vel consequat orci, id consectetur risus. Sed ipsum elit, pulvinar eu erat nec, pellentesque lobortis lacus. Phasellus dui justo, sagittis volutpat bibendum ac, aliquam vel mauris. Nulla lobortis, magna at elementum.",
            imgURL: "../img/placeholder.jpg",
            caption1: "About Caption Line One",
            caption2: "About Caption Line Two",
        }
    ]

    let slideWidth = 400;
    slideWidth = slideWidth * 5;
    let slide = 1;
    const slides = document.querySelectorAll(".carouselSlide");
    const head = document.querySelector(".carouselText.headline");
    const sub = document.querySelector(".carouselText.subhead");
    const para = document.querySelector(".carouselText.paragraph");
    const cap1 = document.querySelector(".carouselCaption1");

    function Slide (target) {
        if (slide < 5) {
            slide = slide + 1;
        }
        else slide = 1;
        slideFrame();
        if(slide != target) Slide(target);
    }

    function slideFrame() {
        const transform = `translateX(${-(slide - 1) * 40 + 10}vw)`;
        document.querySelector("#homepageCarousel").style.transform = transform;

        head.innerHTML = carouselObjects[slide-1].headline;
        sub.innerHTML = carouselObjects[slide-1].subhead;
        para.innerHTML = carouselObjects[slide-1].paragraphText;
        cap1.innerHTML = carouselObjects[slide-1].caption1 + `<br><span class="carouselCaption2">${carouselObjects[slide-1].caption2}</span>`;

        document.querySelector(".linkBtn").addEventListener("click", () =>{
            document.querySelector(".linkBtn a").href = `${carouselObjects[slide-1].name}.html`;
        });  
    }

    //mobile swiping behavior
    if(isMobile){
        document.querySelector("#homepageCarousel").addEventListener('touchstart', handleTouchStart, false);        
        document.querySelector("#homepageCarousel").addEventListener('touchmove', handleTouchMove, false);

        var xDown = null;                                                        
        var yDown = null;

        function getTouches(evt) {
        return evt.touches ||             // browser API
                evt.originalEvent.touches; // jQuery
        }                                                     

        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];                                      
            xDown = firstTouch.clientX;                                      
            yDown = firstTouch.clientY;                                      
        };                                                

        function handleTouchMove(evt) {
            if ( ! xDown || ! yDown ) {
                return;
            }

            var xUp = evt.touches[0].clientX;                                    
            var yUp = evt.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {
                    /* left swipe */ 
                    console.log("swipe left");
                    Slide();
                } else {
                    /* right swipe */
                    console.log("swipe right");
                    slideLeft();
                }                       
            }
            /* reset values */
            xDown = null;
            yDown = null;                                             
        };
    }

    function slideLeft() {
        if (slide > 0) {
            slide--;
        }
        if(slide == 0) slide = 5;
        slideFrame();
    }
//------------------------------------------------------------------------------------------->
