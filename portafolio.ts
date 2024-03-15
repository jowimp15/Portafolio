
// variables globals area ////////////////////////////////////////////////////////////////////////////////////////////
interface pageORproects {
    text:string;
    image:string;
    title:string;
    url:string;
}

const d = document


// ANIMATION AREA------------------------------------------------------------------------------------------------------------

/****  Extract element DOM*****/
let animationsAN2 = Array.from(d.querySelectorAll("[class*=AN2]"))
let animationsAN3 = Array.from(d.querySelectorAll("[class*=AN3]"))
let animationsAN4 = Array.from(d.querySelectorAll("[class*=AN4]"))
let animationsAN5 = Array.from(d.querySelectorAll("[class*=AN5]"))

/***** functions area *****/
const checkViewport = (widthMAX:number, widthMIN:number, scroll:number, animations:Element[])=>{
    if(innerWidth < widthMAX && innerWidth > widthMIN){
        if(window.scrollY > scroll){
            animations.forEach(el=>{
                el.classList.remove("pause")
            })
        }
    }
}

const AN2 = ()=>{
    checkViewport(Infinity, 1200, 300, animationsAN2)
    checkViewport(1200, 500, 500, animationsAN2)
    checkViewport(500, 0, 300, animationsAN2)
}
const AN3 = ()=>{
    checkViewport(Infinity, 1200, 2000, animationsAN3)
    checkViewport(1200, 1000, 2000, animationsAN3)
    checkViewport(1000, 500, 1500, animationsAN3)
    checkViewport(500, 0, 1200, animationsAN3)
}
const AN4 = ()=>{
    checkViewport(Infinity, 1200, 2700, animationsAN4)
    checkViewport(1200, 0, 2300, animationsAN4)
}
const AN5 = ()=>{
    checkViewport(Infinity, 1200, 3000, animationsAN5)
    checkViewport(1200, 1000, 4500, animationsAN5)
    checkViewport(1000, 500, 3500, animationsAN5)
    checkViewport(500, 0, 3000, animationsAN5)
}
const AN6 = ()=>{
    const infoProjectText = extractElementByClass("info-projects","infoProjectText") 
    infoProjectText?.classList.remove("pause")
}

/***** first run when load****/
AN2()
AN3()
AN4()
AN5()
AN6()

// SLAYER PAGE------------------------------------------------------------------------------------------------------------

/*****  Extraction element DOM *****/
const slayerImageAN3 = extractElementByClass("resurt-animation-AN3","slayerImageAN3")
const btnSlayerR = extractElementByClass("btn-right-AN3","btnSlayerR")
const btnSlayerL = extractElementByClass("btn-left-AN3","btnSlayerL")
const contaienrTitleAN3 = extractElementByClass("contaienr-title-AN3","contaienrTitleAN3")
const textPAge = extractElementByClass("info-pages-container-AN3","textPAge")
const urlPage = extractElementByClass("page-url","urlPage")

/***** Variables and more *****/

let imagePosition = 0
let nextprevius: "next" | "previus" = "next"

const pages:pageORproects[] = [
    {
        text:`Es una página web que ofrece una herramienta interactiva para crear, probar y aprender expresiones regulares. Permite a los usuarios escribir expresiones regulares y ver cómo coinciden con diferentes cadenas de texto en tiempo real. Además, ofrece características como resaltado de sintaxis, sugerencias de código, explicaciones detalladas de cada parte de la expresión regular y opciones de configuración avanzada. Regexr es útil para desarrolladores web, programadores y cualquier persona que necesite trabajar con expresiones regulares, ya que simplifica el proceso de creación y depuración de patrones de búsqueda de texto. Su interfaz intuitiva y amigable hace que sea fácil de usar incluso para aquellos que no están familiarizados con las expresiones regulares.`,
        image:"assets/images/pages/20240306_014714.jpg",
        title:"Regexr",
        url:"https://regexr.com/"
    },
    {
        text:"Anteriormente conocida como Adobe Kuler, es una herramienta en línea que permite a los usuarios crear, explorar y compartir paletas de colores. Permite generar esquemas de colores utilizando diferentes métodos como reglas de color, rueda de color y muestras de imágenes. Los usuarios pueden ajustar y personalizar los colores según sus preferencias y luego descargar las paletas para su uso en proyectos de diseño gráfico, desarrollo web, ilustración y más. Adobe Color ofrece una plataforma comunitaria donde los usuarios pueden explorar paletas creadas por otros, compartir sus propias creaciones y obtener inspiración para sus proyectos creativos. Es una herramienta valiosa para diseñadores y artistas que buscan experimentar con el color y crear armonías visuales impactantes.",
        image:"assets/images/pages/20240306_015045.jpg",
        title:"Adobe Color",
        url:"https://color.adobe.com/es/"
    },
    {
        text:"Es una página web que proporciona una herramienta para generar códigos CSS para degradados. Permite a los usuarios crear degradados personalizados mediante una interfaz intuitiva, seleccionando colores y ajustando la dirección, el tipo y otros parámetros del degradado. La página ofrece una variedad de opciones, incluyendo degradados lineales y radiales, así como múltiples colores y puntos de parada. Los usuarios pueden previsualizar instantáneamente los degradados generados y copiar el código CSS correspondiente para usarlo en sus proyectos. CSS Gradient es útil para diseñadores web y desarrolladores que desean crear degradados visualmente atractivos y personalizados sin necesidad de escribir código CSS manualmente. Además, la página es gratuita y no requiere registro, lo que la hace accesible y fácil de usar para cualquier persona que necesite aplicar degradados en sus diseños web.",
        image:"assets/images/pages/20240306_015202.jpg",
        title:"CSS Gradient",
        url:"https://cssgradient.io/",
    },
    {
        text:"Es una herramienta en línea que permite a los diseñadores y desarrolladores calcular escalas tipográficas fluidas para sus proyectos web. Con esta herramienta, los usuarios pueden especificar el tamaño de fuente base, así como el rango de tamaños de fuente mínimo y máximo que desean para sus diseños responsivos. UTOPIA ajusta automáticamente los tamaños de fuente dentro del rango especificado en función del ancho de la ventana del navegador o del dispositivo del usuario, lo que garantiza una experiencia de lectura óptima en diferentes dispositivos y pantallas. Esta calculadora ayuda a mantener la legibilidad y la estética visual de los textos en páginas web adaptativas, permitiendo a los diseñadores crear diseños coherentes y agradables para los usuarios en una variedad de dispositivos y tamaños de pantalla.",
        image:"assets/images/pages/20240306_015341.jpg",
        title:"UTOPIA: fluid type scale calculator",
        url:"https://utopia.fyi/type/calculator/"
    },
    {
        text:"Autoprefixer es una herramienta que facilita la escritura de CSS al agregar automáticamente los prefijos de los proveedores necesarios para garantizar la compatibilidad con diferentes navegadores. Simplemente ingresa tu CSS sin prefijos, y Autoprefixer analiza tu código y agrega los prefijos específicos del navegador según la compatibilidad que desees. Esto significa que no necesitas recordar todos los prefijos específicos de cada navegador, lo que ahorra tiempo y evita errores. Además, Autoprefixer se integra fácilmente con herramientas de construcción como Gulp, Grunt y webpack, lo que facilita su incorporación en tu flujo de trabajo de desarrollo. Con Autoprefixer, puedes escribir CSS moderno y mantener la compatibilidad con versiones anteriores de navegadores sin problemas.",
        image:"assets/images/pages/20240306_015447.jpg",
        title:"Autoprefixer",
        url:"https://autoprefixer.github.io/"
    },
    {
        text:"Es una herramienta en línea que permite comprimir y minificar código CSS. Al ingresar tu código CSS en el campo de entrada, la herramienta eliminará espacios en blanco, comentarios y otros caracteres no esenciales para reducir el tamaño del archivo CSS. Esto ayuda a mejorar el rendimiento de carga de la página web al reducir el tamaño de los archivos CSS, lo que resulta en tiempos de carga más rápidos. Además, la herramienta puede ayudar a mejorar la optimización de motores de búsqueda al reducir el tamaño total de los recursos de la página web. Es una herramienta útil para desarrolladores web que desean optimizar el rendimiento y la eficiencia de sus sitios.",
        image:"assets/images/pages/20240306_015545.jpg",
        title:"Toptal CSS Minifier",
        url:"https://www.toptal.com/developers/cssminifier"
    },
    {
        text:"Cubic Bezier es una herramienta en línea que permite a los desarrolladores y diseñadores crear y visualizar curvas de Bezier cúbicas de una manera interactiva. Las curvas de Bezier cúbicas son útiles para definir trayectorias suaves y animaciones en el diseño web y gráfico. Con Cubic Bezier, los usuarios pueden ajustar los puntos de control de las curvas de Bezier en un lienzo visual y ver los cambios en tiempo real. Esto facilita la experimentación con diferentes formas de curvas y ayuda a encontrar la configuración óptima para lograr efectos visuales deseados. La herramienta también proporciona código CSS que representa la curva de Bezier configurada, lo que facilita su implementación en proyectos web. En resumen, Cubic Bezier es una herramienta valiosa para crear y ajustar curvas de Bezier cúbicas de manera rápida y eficiente en el diseño web y gráfico.",
        image:"assets/images/pages/20240306_015654.jpg",
        title:"Cubic Bezier",
        url:"https://cubic-bezier.com/#.17,.67,.83,.67"
    },
    {
        text:"Es un servicio web que permite convertir una amplia variedad de archivos entre diferentes formatos. Los usuarios pueden cargar archivos desde su dispositivo o proporcionar enlaces URL, y luego seleccionar el formato de destino deseado. La plataforma admite conversiones de archivos de audio, video, documentos, imágenes, libros electrónicos y más. También ofrece opciones avanzadas para ajustar la configuración de conversión, como la calidad de compresión para archivos de imagen o la tasa de bits para archivos de audio y video. Una vez completada la conversión, los usuarios pueden descargar los archivos resultantes directamente desde el sitio web. Online Convert es fácil de usar y no requiere instalación de software adicional. Además, ofrece una amplia gama de formatos de archivo compatibles, lo que lo convierte en una herramienta conveniente para quienes necesitan convertir archivos de manera rápida y sencilla.",
        image:"assets/images/pages/20240306_020032.jpg",
        title:"Online Convert",
        url:"https://www.online-convert.com/es"
    },
    {
        text:"Un sitio web que ofrece una amplia colección de iconos vectoriales y otros recursos gráficos para su uso en diseño gráfico, diseño web, presentaciones, aplicaciones móviles y más. Los usuarios pueden explorar y descargar iconos en diferentes formatos y estilos, incluyendo SVG, PNG, EPS y PSD. Además, Flaticon proporciona herramientas para personalizar y editar los iconos según las necesidades del usuario. También ofrece la opción de crear y guardar colecciones personalizadas de iconos para un acceso rápido y fácil. En resumen, Flaticon es una plataforma popular y útil para encontrar y descargar iconos de alta calidad para una variedad de proyectos creativos.",
        image:"assets/images/pages/20240306_020151.jpg",
        title:"Flaticon",
        url:"https://www.flaticon.es/"
    },
    {
        text:"Es una herramienta que permite crear favicons, que son pequeños íconos que representan un sitio web y aparecen en la pestaña del navegador y en los marcadores. Esta herramienta toma una imagen de entrada y genera múltiples versiones en diferentes tamaños y formatos compatibles con varios navegadores y dispositivos. Esto facilita la creación de favicons personalizados para mejorar la identidad visual y la experiencia del usuario en la web.",
        image:"assets/images/pages/20240306_020320.jpg",
        title:"Favicon Generator",
        url:"https://www.favicon-generator.org/"
    },
    {
        text:"Google Fonts es un servicio gratuito ofrecido por Google que permite a los desarrolladores web incrustar fuentes personalizadas en sus sitios web de manera fácil y rápida. Ofrece una amplia variedad de fuentes de alta calidad, incluyendo opciones para varios idiomas y scripts. Los usuarios pueden seleccionar las fuentes deseadas, obtener el código de incrustación y agregarlo a sus sitios web con solo unos pocos clics. Esto facilita la mejora del aspecto visual y la legibilidad de los sitios web sin necesidad de descargar o instalar fuentes adicionales en los dispositivos de los usuarios. En resumen, Google Fonts simplifica el proceso de integración de fuentes personalizadas, lo que permite a los desarrolladores mejorar la estética y la experiencia de lectura de sus sitios web de manera eficiente.",
        image:"assets/images/pages/20240306_020559.jpg",
        title:"Google Fonts",
        url:"https://fonts.google.com/"
    },
    {
        text:"Es una herramienta en línea que permite a los desarrolladores crear formas personalizadas para recortar o enmascarar elementos HTML utilizando la propiedad CSS clip-path. Con esta herramienta, los usuarios pueden ajustar fácilmente las coordenadas y los valores de las formas, así como experimentar con diferentes formas predefinidas. Esto simplifica el proceso de creación de efectos de recorte y enmascaramiento complejos, lo que resulta en diseños más dinámicos y visualmente atractivos en sitios web y aplicaciones web.",
        image:"assets/images/pages/20240306_020626.jpg",
        title:"CSS clip-path maker by Bennett Feely",
        url:"https://bennettfeely.com/clippy/"
    },
    {
        text:"Una herramienta que permite generar gráficos vectoriales escalables (SVG) de ondas o formas onduladas personalizadas. Utiliza parámetros ajustables como amplitud, longitud de onda y frecuencia para crear ondas de diferentes estilos y formas. Estas formas pueden ser utilizadas en diseño web, gráficos de datos, animaciones SVG y otros proyectos creativos para agregar interés visual y dinamismo.",
        image:"assets/images/pages/20240306_020711.jpg",
        title:"SVG Wave Generator",
        url:"https://getwaves.io/"
    }
] 

/***** function area *****/
const nextORprevius = (imgPos:number, NP:string)=>{
    if(slayerImageAN3 instanceof HTMLElement && 
        contaienrTitleAN3 instanceof HTMLElement && 
        textPAge instanceof HTMLElement && 
        urlPage instanceof HTMLElement) {

         /***  delete all elements ***/
             while(slayerImageAN3.children.length !== 0)
                slayerImageAN3.children[0].remove()
             
             while(contaienrTitleAN3.children.length !== 0)
                contaienrTitleAN3.children[0].remove()
             
             const infoPages = extractElementByClass("info-pages","infoPages")
                
             infoPages?.remove()
            
         /*** inject elements ***/
             let nextORpreviusPosition = imgPos

         if(NP === "next") nextORpreviusPosition = imgPos - 1 
         else  nextORpreviusPosition = imgPos + 1 

            const img = d.createElement("IMG");
            (NP === "next") ? img.classList.add("right-center") : img.classList.add("left-center");
            img.classList.add("img-AN3")
            img.setAttribute("src", pages[imgPos].image)
            img.setAttribute("alt",pages[imgPos].title)
            
            if(pages[nextORpreviusPosition]){
                const img2 = d.createElement("IMG");
                (NP === "next") ? img2.classList.add("center-left") : img2.classList.add("center-right");
                img2.classList.add("img-AN3")
                img2.setAttribute("src", pages[nextORpreviusPosition].image)
                img2.setAttribute("alt", pages[nextORpreviusPosition].title)
                slayerImageAN3.append(img2)
            }
            slayerImageAN3.append(img)
            
            /*** title ***/
            
            const title = d.createElement("H2")
            title.classList.add("title-page-AN3")
            title.classList.add("text-down")
            title.textContent = pages[imgPos].title
            
            if((pages[nextORpreviusPosition])){
                const title2 = d.createElement("H2")
                title2.classList.add("title-page-AN3")
                title2.classList.add("text-up")
                title2.textContent = pages[nextORpreviusPosition].title
                contaienrTitleAN3.append(title2)
            }
            contaienrTitleAN3.append(title)

            /*** text ***/

            const text = d.createElement("P")
            text.classList.add("info-pages")
            text.classList.add("opacity-show")
            text.textContent = pages[imgPos].text
            if(pages[nextORpreviusPosition]){
                const text2 = d.createElement("P")
                text2.classList.add("info-pages")
                text2.classList.add("opacity-hidden")
                text2.textContent = pages[nextORpreviusPosition].text
            }
            textPAge.append(text)

            urlPage.setAttribute("href",pages[imgPos].url)
            urlPage.textContent = `Ir a la pagina de  ${pages[imgPos].title}`
    }
}

const numberOfPages = (imagePosition:number)=>{
    // disappear left btn
    
    if(pages[imagePosition - 1]){
        btnSlayerL?.classList.remove("none")
    }else{
        btnSlayerL?.classList.add("none")
    }
    // disappear right btn
    if(pages[imagePosition + 1]){
        btnSlayerR?.classList.remove("none")
    }else{
        btnSlayerR?.classList.add("none")
    }
    // disappear both btn
    if(pages.length <= 1){
        btnSlayerR?.classList.add("none")
        btnSlayerL?.classList.add("none")
    }
}

/***** first run when load *****/
numberOfPages(imagePosition)
nextORprevius(imagePosition, "next")

// PROJECTS ------------------------------------------------------------------------------------------------------------

/***** Extracting element DOM *****/
const resurtAN5 = extractElementByClass("resurt-animation-AN5","resurtAN5")
const cube = extractElementByClass("cube-projects-AN5","cube")
const nextProjectBTN = extractElementByClass("btn-right-AN5","nextProjectBTN")
const previusProjectBTN = extractElementByClass("btn-left-AN5","previusProjectBTN")
const projectArea = extractElementByClass("proyect-area","projectArea")

/*****  Variables and more *****/
const projects:pageORproects[]=[
    {
        image:"assets/images/projects/suscripciones.jpg",
        title:"Suscripciones",
        text:`<p>Sirve para hacer suscripciones de estudiantes o maestros. La mecánica que utiliza permite que el estudiante se pueda suscribir a una materia siempre y cuando exista. Para que haya materias, tiene que haber maestros. Los maestros podrán apuntarse, elegir una foto opcional y hacer una breve descripción de su asignatura y de ellos mismos. De esta manera, cuando aparezca la tarjeta del maestro, los estudiantes podrán ver su descripción.</p>`,
        url:""
    },
    {
        image:"assets/images/projects/MyBooks.jpg",
        title:"MyBooks",
        text:` <h3>Desarrollo de una Aplicación de Lista de Libros (Prueba técnica de Midudev)</h3>
        <p>Es una lista de libros con función de filtrado y método de guardado.</p>
        <h4>Características:</h4>
        <ul>
            <li>Visualización de libros disponibles.</li>
            <li>Creación de lista de lectura y posibilidad de mover libros entre listas.</li>
            <li>Filtrado de libros por género con contador de libros disponibles y en lista de lectura.</li>
            <li>Sincronización del estado global entre libros disponibles y en lista de lectura.</li>
            <li>Persistencia de datos en almacenamiento local del navegador.</li>
            <li>Sincronización entre pestañas sin necesidad de Backend.</li>
            <li>Despliegue en servicio de hosting gratuito con URL pública.</li>
            <li>Al menos un test implementado.</li>
        </ul>
        <small>Hecho con ReactTs + Vite</small>
        `,
        url:""
    },
    {
        image:"assets/images/projects/TVshow.jpg",
        title:"TVshow",
        text:`<p>Es una donde puedes buscar series de televisión, también tiene un mecanismo de guardado. Este proyecto lo hice principalmente para pulir mi conocimiento con las API. Está conectado a la API de la página de TVmaze.</p>

        <a href="https://www.tvmaze.com" target="_blank"style="color:white">Ir a TVmaze</a>
        `,
        url:""
    },
    {
        image:"assets/images/projects/Galery_Vacation.jpg",
        title:"GaleryImage",
        text:` <h3>Gestión de Imágenes Vacacionales</h3>
        <p>(Aún no está completa), su función es administrar una serie de imágenes vacacionales por el usuario divididas por carpeta donde habrá un campo de búsqueda de carpeta.</p>
        <p>Como ya dije anteriormente que no seta completado aqui le dejare una lista de lo que falta por hacer.</p>
        <h4>Por hacer:</h4>
        <ul>
            <li>Responsive</li>
            <li>El método de guardado</li>
            <li>El campo de búsqueda</li>
        </ul>`,
        url:""
    },
    {
        image:"assets/images/projects/lista_de_tareas.jpg",
        title:"Lista de Tareas",
        text:`<p>Es un proyecto donde el usuario puede hacer una lista de tareas que se guardarán en su navegador, la especialidad de esta lista es que puede añadirle combinaciones de colores diferentes.</p>
        <p>Esta página tiene un apartado donde podrás hacer combinaciones de dos colores y si quieres más te redirigirá a una página donde podrás crear más colores. Le podrás poner nombre para poder buscarlo en la página.</p>
        <p>Este proyecto mayormente lo hice para poder practicar la API del DOM IndexedDB.</p>`,
        url:""
    },
] 

let nextProject:"next" | "previus"
let positionProject = 0
/***** functions area *****/

const nextORpreviusProjects = (positionProject:number, nextProject:string)=>{
    const containerTitle = extractElementByClass("container-title-proyect","containerTitle")
    const containerImg = extractElementByClass("container-video","containerimg")
    const textContainerProj = extractElementByClass("info-projects","textContainerProj")

    // this array delete the image in the AN5
    

    let PrevNext:number
    if(nextProject === "next") PrevNext = positionProject - 1
    else PrevNext = positionProject + 1 

    /** img **/ 
    const img = d.createElement("IMG")
    img.classList.add("img-AN5")
    img.classList.add("opacity-show")
    img.setAttribute("src",projects[positionProject].image)
    img.setAttribute("alt",`imagen de ${projects[positionProject].title}`)
    if(containerImg) containerImg.innerHTML = ""

    if(projects[PrevNext]){
        const img2 = d.createElement("IMG")
        img2.setAttribute("src",projects[PrevNext].image)
        img2.classList.add("img-AN5")
        img2.classList.add("opacity-hidden")
        img2.setAttribute("alt",`$imagen de ${projects[PrevNext].title}`)
        containerImg?.append(img2)   
    }
    containerImg?.append(img)

    
    /** title **/ 
    const title = d.createElement("H2")
    title.classList.add("title-proyect")
    title.classList.add("opacity-show")
    title.textContent = projects[positionProject].title
    if(containerTitle) containerTitle.innerHTML = ""
    containerTitle?.append(title)

    if(projects[PrevNext]){
        const title2 = d.createElement("H2")
        title2.classList.add("title-proyect")
        title2.classList.add("opacity-hidden")
        title2.textContent = projects[PrevNext].title
        containerTitle?.append(title2)
    } 
    
    /** description **/ 
    const text = d.createElement("div")
    text.classList.add("opacity-show")
    text.classList.add("text-project")

    if(textContainerProj) textContainerProj.innerHTML = ""
    if(projects[PrevNext]) {
        const text2 = d.createElement("div")
        text2.innerHTML = projects[PrevNext].text
        text2.classList.add("opacity-hidden")
        text2.classList.add("text-project")
        textContainerProj?.append(text2)
    }
    text.innerHTML = ""
    text.innerHTML = projects[positionProject].text
    textContainerProj?.append(text)
    }

const numberOfProjects = (positionProject:number)=>{
    // disappear left btn
    
    if(projects[positionProject - 1]){
        previusProjectBTN?.classList.remove("none")
    }else{
        previusProjectBTN?.classList.add("none")
    }
    // disappear right btn
    if(projects[positionProject + 1]){
        nextProjectBTN?.classList.remove("none")
    }else{
        nextProjectBTN?.classList.add("none")
    }
    // disappear both btn
    if(projects.length <= 1){
        nextProjectBTN?.classList.add("none")
        previusProjectBTN?.classList.add("none")
    }
}

const hideAN6InMovile = (isMovile:boolean) =>{

    // when is movile
    if(isMovile){

        // delte the last elemets 
        let infoProject = extractElementByClass("info-projects","infoProject")
        infoProject?.remove()
        let containerVideo = extractElementByClass("container-video","containerVideo")
        containerVideo?.remove()
        let containerH2AN6 = extractElementByClass("container-title-proyect","containerH2AN6")
        containerH2AN6?.remove()

        // create a new element
        const contaienrTextInfoProj = extractElementByClass("contaienr-text-info","contaienrTextInfoProj")
        const div3 = d.createElement("DIV")
        div3.classList.add("container-video")
        const div = d.createElement("DIV")
        div.classList.add("info-projects")
        const div2 = d.createElement("DIV")
        div2.classList.add("container-title-proyect")
        resurtAN5?.insertAdjacentElement("afterend",div2)
        resurtAN5?.append(div)
        resurtAN5?.append(div3)
    }else{
        // delete the last elements
        let infoProject = extractElementByClass("info-projects","infoProject")
        infoProject?.remove()
        let containerH2AN6 = extractElementByClass("container-title-proyect","containerH2AN6")
        containerH2AN6?.remove()
        
        // insert new elements
        const projectArea = extractElementByClass("proyect-area","projectArea")
        const contaienrTextInfoProj = d.createElement("DIV")
        contaienrTextInfoProj.classList.add("contaienr-text-info")
        if(contaienrTextInfoProj) projectArea?.append(contaienrTextInfoProj)
        const div = d.createElement("DIV")
        div.classList.add("info-projects")
        const div2 = d.createElement("DIV")
        div2.classList.add("container-title-proyect")
        contaienrTextInfoProj?.append(div2)
        contaienrTextInfoProj?.append(div)
    }
    nextORpreviusProjects(positionProject, "next")
}
/***** first run *****/

if(innerWidth > 1000)hideAN6InMovile(false)
else hideAN6InMovile(true)


if(cube && cube.children){
    let cubeProject = Array.from(cube?.children)
    projects.forEach((el, index)=>{
        let img = d.createElement("IMG")
        img.classList.add("img-AN5")
        img.setAttribute("src",projects[index].image)
        img.setAttribute("alt",`imagen de ${projects[index].title}`)  
        cubeProject[index].append(img)    
    })
}

numberOfProjects(positionProject)

// theme color ------------------------------------------------------------------------------------------------------------

/***** Extracting element DOM *****/
const containerThemeColor = extractElementByClass("contaienr-modeColor","containerThemeColor")

/**** variables and more*****/
interface theme {
    nameTheme:string;
    backgroundColorPrincipal: string;
    backgroundColorSecundario: string;
    backgroundColorTercero: string;
    colorTextPrincipal: string;
    colorDecoration2: string;
    colorDecoration3: string;
    colorDecoration5: string;
    colorBeforeBackgroud:string;
    colorBeforeBackgroud2:string;
}

const colorsTheme:theme[] = [
    {
        nameTheme:"system",
        backgroundColorPrincipal: "#00001d",
        backgroundColorSecundario: "#009999",
        backgroundColorTercero: "#868686",
        colorTextPrincipal: "#ffffff",
        colorDecoration2: "#00ffff",
        colorDecoration3: "#00ffffc9",
        colorDecoration5: "#00ffff44",
        colorBeforeBackgroud:"#000000ad",
        colorBeforeBackgroud2:"#ffffff49",
    },
    {
        nameTheme:"hacker",
        backgroundColorPrincipal: "#002206",
        backgroundColorSecundario: "#009914",
        backgroundColorTercero: "#868686",
        colorTextPrincipal: "#ffffff",
        colorDecoration2: "#009914",
        colorDecoration3: "#009914c9",
        colorDecoration5: "#00991444",
        colorBeforeBackgroud:"#031800ad",
        colorBeforeBackgroud2:"#ffffff49",
    },
    {
        nameTheme:"Error",
        backgroundColorPrincipal: "#220000",
        backgroundColorSecundario: "#7a0000",
        backgroundColorTercero: "#868686",
        colorTextPrincipal: "#ffffff",
        colorDecoration2: "#800000",
        colorDecoration3: "#8b0000c9",
        colorDecoration5: "#22000044",
        colorBeforeBackgroud:"#220000ad",
        colorBeforeBackgroud2:"#ffffff49",
    },
    {
        nameTheme:"light",
        backgroundColorPrincipal: "#f0f0f0",
        backgroundColorSecundario: "#333333",
        backgroundColorTercero: "#5c5c5c",
        colorTextPrincipal: "#797979",
        colorDecoration2: "#8b8b8b",
        colorDecoration3: "#bdbdbdc9",
        colorDecoration5: "#f8f8f8af",
        colorBeforeBackgroud:"#000000ad",
        colorBeforeBackgroud2:"#00000049",
    },
    {
        nameTheme:"honey",
        backgroundColorPrincipal: "#302700",
        backgroundColorSecundario: "#ffee00",
        backgroundColorTercero: "#a18401",
        colorTextPrincipal: "#ffffff",
        colorDecoration2: "#ffd000",
        colorDecoration3: "#ffd000c9",
        colorDecoration5: "#ffd00044",
        colorBeforeBackgroud:"#000000ad",
        colorBeforeBackgroud2:"#ffffff49",
    },
] 

/***** functions area  *****/
const changeColorTheme = (colorName:string)=>{
        let color = colorsTheme.find(el=> el.nameTheme === colorName)
            localStorage.setItem("theme-color", colorName)
            if(color){      
                document.documentElement.style.setProperty('--background-color-principal',color.backgroundColorPrincipal );
                document.documentElement.style.setProperty('--background-color-secundario', color.backgroundColorSecundario);
                document.documentElement.style.setProperty('--background-color-tercero', color.backgroundColorTercero);
                document.documentElement.style.setProperty('--color-text-principal', color.colorTextPrincipal);
                document.documentElement.style.setProperty('--color-decoration-2', color.colorDecoration2);
                document.documentElement.style.setProperty('--color-decoration-3', color.colorDecoration3);
                document.documentElement.style.setProperty('--color-decoration-5', color.colorDecoration5);
                document.documentElement.style.setProperty('--color-beforeBackgroud', color.colorBeforeBackgroud);
                document.documentElement.style.setProperty('--color-beforeBackgroud-2', color.colorBeforeBackgroud2);
            }
}

/**** first run ****/
if(localStorage.getItem("theme-color")){
    const themeColor = localStorage.getItem("theme-color")
    if(themeColor){
        console.log(themeColor)
        changeColorTheme(themeColor)
    }
}else{
    localStorage.setItem("theme-color","system")
}


// FUNCTIONS GLOBAL  /////////////////////////////////////////////////////////////////

function extractElementByClass(element:string, searchProblem:string){
    return d.querySelector(`.${element}`) instanceof HTMLElement 
? d.querySelector(`.${element}`) 
: console.error(`${searchProblem}: ${d.querySelector(`.${element}`)}, function class`)
}

function extractElementById(element:string,searchProblem:string){
    return d.querySelector(`#${element}`) instanceof HTMLElement 
? d.querySelector(`#${element}`) 
: console.error(`${searchProblem}: ${d.querySelector(`#${element}`)}, function ID`)
}

// EVENTS GLOBAL  /////////////////////////////////////////////////////////////////
window.addEventListener('scroll', (e)=> {
    AN2()
    AN3()
    AN4()
    AN5()
    AN6() 
});

d.addEventListener("animationend", (e)=>{
    if((e.target as HTMLElement).matches(".text-container-AN2")){
        const infoAN2 = d.querySelector(".text-presentatio-AN2")
        if(infoAN2 instanceof HTMLElement){
            infoAN2.style.overflow = "auto"
        }
    }
})

d.addEventListener("click",(e)=>{
    if(e.target instanceof Element) {
        let Target = e.target

        /**  slayer btn pages**/
        if(Target === btnSlayerR){
            if(pages[imagePosition +1]){

                imagePosition += 1 
                numberOfPages(imagePosition)
                nextORprevius(imagePosition, "next")
            }
        }
        if(Target === btnSlayerL){
            if(pages[imagePosition - 1]){
                
                imagePosition -= 1
                numberOfPages(imagePosition)
                nextORprevius(imagePosition, "previus")
            }
        }

        /**  slayer btn Project**/
        if(Target === nextProjectBTN){
            if(pages[positionProject + 1]){

                positionProject += 1
                cube?.classList.remove(`rotate-${positionProject - 1}`)
                cube?.classList.add(`rotate-${positionProject}`)
                numberOfProjects(positionProject)
                nextORpreviusProjects(positionProject, "next")
            }
        }
        if(Target === previusProjectBTN){
            if(pages[positionProject - 1]){                

                positionProject -= 1
                cube?.classList.remove(`rotate-${positionProject + 1}`)
                cube?.classList.add(`rotate-${positionProject}`)
                numberOfProjects(positionProject)
                nextORpreviusProjects(positionProject, "previus")
            }
        }

        // theme style 

        if(Target.matches(".icon-color")){
            containerThemeColor?.classList.toggle("show-theme")
        }
        if(Target.matches(".color-theme-1")){
            changeColorTheme("light")
        }
        if(Target.matches(".color-theme-2")){
            changeColorTheme("Error")
        }
        if(Target.matches(".color-theme-3")){
            changeColorTheme("system")
        }
        if(Target.matches(".color-theme-4")){
            changeColorTheme("hacker")
        }
        if(Target.matches(".color-theme-5")){
            changeColorTheme("honey")
        }
    }
}) 
// Query Event viewport  /////////////////////////////////////////////////////////////////

const query = window.matchMedia("(max-width:1000px)");
query.addEventListener("change", (e)=>{
    if (e.matches)  hideAN6InMovile(true)
    else hideAN6InMovile(false)
}); 