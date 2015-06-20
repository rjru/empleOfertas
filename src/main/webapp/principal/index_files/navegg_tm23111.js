var nvg23111 = new function(){

    this.version= 7;
    this.url=false;
    this.tuple=false;
    this.domain=false;
    this.userId=false;
    this.userSync='';
    this.segmentKey=false;
    this.segmentValue=false;
    this.control=false;
    this.segmentKey=false;
    this.segmentValue=false;
    this.wantString=true;
    this.wantCustom=false;
    this.navdmp=false;
    this.qry=false;
    this.cokCache={};
    this.coknm='navdmp';
    this.parameter='/req?v=' + this.version;


    this.account = 23111;
    this.leave = 0;
    this.wantCustom = true;
    this.maxCriteria = 10;
    this.wantCookie = true;
    this.tagManagerCode = 'if(window.location.pathname.indexOf("boca-juniors")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=363&img=1","img");if(window.location.pathname.indexOf("seleccion")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=721&img=1","img");if(window.location.href.indexOf("seleccion")>=0||window.location.href.indexOf("mundial")>=0)nvg23111.setCustom(721);if(window.location.pathname.indexOf("river-plate")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=364&img=1","img");if(window.location.pathname.indexOf("independiente")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=367&img=1","img");if(window.location.href.indexOf("www.ole.com.ar","ole")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=478&img=1","img");if(window.location.href.indexOf("www.arq.clarin.com")>=0||window.location.href.indexOf("arq")>=0)nvg23111.setCustom(479);if(window.location.href.indexOf("http://www.deautos.com/ver-precios")>=0)nvg23111.setCustom(868);if(window.location.href.indexOf("www.clarin.com/espectaculos","espectaculos","espectaculo","www.larazon.com.ar/show","www.si.clarin.com/")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=492&img=1","img");if(window.location.href.indexOf("365.clarin.com")>=0||window.location.href.indexOf("365")>=0)nvg23111.setCustom(496);if(window.location.href.indexOf("ieco")>=0)nvg23111.setCustom(368);if(window.location.href.indexOf("http://www.argenprop.com","http://www.buscainmueble.com","http://www.clasificados.clarin.com/inmuebles/","http://www.inmuebles.clarin.com","www.argenprop.com","www.buscainmueble.com","www.clasificados.clarin.com/inmuebles/","www.inmuebles.clarin.com")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=497&img=1","img");if(window.location.href.indexOf("auto")>=0||window.location.href.indexOf("Autos")>=0)nvg23111.setCustom(633);if(window.location.href.indexOf("planes-de-ahorro")>=0)nvg23111.setCustom(477);nvg23111.setCustomTargeting(Array(Array("autos-nuevos","planes-de-ahorro")),477);if(window.location.href.indexOf("http://listado.deautos.com/autos-nuevos")>=0)nvg23111.setCustom(477);nvg23111.setCustomTargeting(Array(Array("http://listado.deautos.com/planes-de-ahorro","planes-de-ahorro","http://listado.deautos.com/autos-nuevos","http://auto.deautos.com/planes-de-ahorro","autos-nuevos","http://listado.deautos.com/autos-planes-de-ahorro")),477);if(window.location.href.indexOf("utilitarios")>=0||window.location.href.indexOf("SGYY8")>=0)nvg23111.setCustom(472);if(window.location.href.indexOf("todoviajes")>=0||window.location.href.indexOf("cruceros")>=0||window.location.href.indexOf("paquetes-turisticos")>=0||window.location.href.indexOf("vuelos-y-hoteles")>=0)nvg23111.setCustom(639);if(window.location.href.indexOf("bmw")>=0||window.location.href.indexOf("mercedes")>=0||window.location.href.indexOf("audi")>=0||window.location.href.indexOf("volvo")>=0||window.location.href.indexOf("honda")>=0||window.location.href.indexOf("alfa-romeo")>=0)nvg23111.setCustom(473);if(window.location.pathname.indexOf("Peugeot")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=634&img=1","img");if(window.location.pathname.indexOf("citroen")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=642&img=1","img");if(window.location.pathname.indexOf("fiat")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=641&img=1","img");if(window.location.pathname.indexOf("ford")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=643&img=1","img");if(window.location.href.indexOf("mercedes-benz")>=0||window.location.href.indexOf("bmw")>=0)nvg23111.setCustom(644);if(window.location.pathname.indexOf("renault")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=645&img=1","img");if(window.location.pathname.indexOf("Volkswagen")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=646&img=1","img");if(window.location.pathname.indexOf("Chevrolet")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=647&img=1","img");if(window.location.href.indexOf("Nuevos-volvo")>=0||window.location.href.indexOf("nuevos-bmw")>=0||window.location.href.indexOf("nuevos-audi")>=0||window.location.href.indexOf("ieco.clarin.com/tema/inversiones")>=0||window.location.href.indexOf("propiedades-miami")>=0||window.location.href.indexOf("vinoshome")>=0||window.location.href.indexOf("viaresto.com/restaurantes/z_Puerto-Madero_23,Recoleta_24")>=0||window.location.href.indexOf("mercados")>=0||window.location.href.indexOf("alquiler-por-temporada-casas-carilo")>=0||window.location.href.indexOf("departamentos-recoleta")>=0||window.location.href.indexOf("countries")>=0||window.location.href.indexOf("alquiler-departamentos-puerto-madero")>=0)nvg23111.setCustom(698);if(window.location.href.indexOf("clima")>=0)nvg23111.setCustom(699);if(window.location.pathname.indexOf("gastronomia")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=700&img=1","img");if(window.location.pathname.indexOf("toyota")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=687&img=1","img");if(window.location.href.indexOf("rural")>=0)nvg23111.setCustom(701);if(window.location.href.indexOf("http://www.todoviajes.com/")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=728&img=1","img");if(window.location.href.indexOf("http://www.clarin.com/ciudades/","http://www.clarin.com/mundo/","http://www.clarin.com/politica/","http://www.clarin.com/sociedad/","http://www.larazon.com.ar/actualidad/","http://www.larazon.com.ar/economia/","http://www.larazon.com.ar/internacional/")>=0)nvg23111.include("//navdmp.com/req?acc=23111&cus=729&img=1","img");if(window.location.href.indexOf("http://clarin.com/internet")>=0||window.location.href.indexOf("www.clarin.com/internet")>=0||window.location.href.indexOf("http://next.clarin.com/")>=0||window.location.href.indexOf("http://www.ieco.clarin.com/tecnologia/")>=0)nvg23111.setCustom(745);if(window.location.href.indexOf("http://www.clarin.com/deportes/","www.ole.com.ar","http://www.larazon.com.ar/deportes/","http://sanfernando.clarin.com/deportes/","http://sanisidro.clarin.com/deportes/","http://sanmartin.clarin.com/deportes/","http://tigre.clarin.com/deportes/","http://vicentelopez.clarin.com/deportes/","http://grandt.clarin.com")>=0)nvg23111.include("//navdmp.com/req?acc= 23111&cus=746&img=1","img");nvg23111.setCustomTargeting(Array(Array("autos-audi-a1","audi/a1","autos-audi-a3","audi/a3","autos-bmw-serie-1","autos-chevrolet-agile","chevrolet/agile","autos-chevrolet-celta","chevrolet/celta","autos-chevrolet-classic","chevrolet/classic","autos-chevrolet-corsa","autos-chevrolet-corsa-ii","autos-chevrolet-sonic","chevrolet/sonic","autos-chevrolet-spark","chevrolet/spark","autos-citroë-c3","citroen/c3","autos-citro%C3%ABn-c3-aircross","autos-citroë-c3-aircross","autos-citroë-ds3","autos-citro%C3%ABn-ds3","citroen/ds3citroë-ds3","autos-citro%C3%ABn-nuevo-c3","autos-citroen-nuevo-c3"," autos-citroë-nuevo-c3","autos-fiat-bravofiat/bravo","autos-fiat-brava","autos-fiat-cinquecento","autos-fiat-ideafiat/idea","autos-fiat-nuevo-palio","fiat/nuevo-palio","autos-nuevos-fiat-uno","fiat/palio","autos-fiat-stilo","autos-fiat-punto","fiat/punto","autos-fiat-uno","autos-fiat-uno-evo ","autos-ford-fiesta","autos-ford-fiesta-kinetic","ford/fiesta-kinetic","autos-ford-fiesta-max","ford/fiesta-max","autos-ford-fiesta-one","ford/fiesta-one","autos-ford-ka","ford/ka","autos-honda-city","honda/city","autos-honda-fit","honda/fit","autos-hyundai-i10","autos-hyundai-i30","mercedes-benz/clase-a","autos-mercedes-benz-clase-a","autos-mitsubishi-colt","autos-peugeot-106","autos-peugeot-205","autos-peugeot-206","autos-peugeot-207","autos-peugeot-208","peugeot/207-compact","autos-renault-logan","autos-renault-sandero","renault/sandero","autos-renault-twingo","renault/twingo","autos-suzuki-fun","suzuki/fun")),751);nvg23111.setCustomTargeting(Array(Array("autos-chevrolet-1940","autos-chevrolet-1936","autos-chevrolet-400","autos-chevrolet-agile","chevrolet/agile","autos-chevrolet-apache","autos-chevrolet-astra","chevrolet-astra","autos-chevrolet-astro","chevrolet-astro","autos-chevrolet-avalanche","chevrolet-avalanche","autos-chevrolet-aveo","chevrolet-aveo","aveo","autos-chevrolet-aveo-g3","chevrolet-aveo-g3","chevrolet/aveo-g3","autos-chevrolet-bel-air","chevrolet-bel-air","autos-chevrolet-blazer","chevrolet-blazer","autos-chevrolet-bronco","chevrolet-bronco","autos-chevrolet-c-10","chevrolet-c-10","autos-chevrolet-camaro","chevrolet-camaro","chevrolet/camaro","autos-chevrolet-captiva","chevrolet-captiva","chevrolet/captiva","autos-chevrolet-cavalier","chevrolet/cavalier","chevrolet-cavalier","autos-chevrolet-celta","chevrolet/celta","autos-chevrolet-chevelle","chevrolet-chevelle","chevrolet/chevelle","autos-chevrolet-chevette","chevrolet-chevette","chevrolet/chevette","autos-chevrolet-chevy","chevrolet-chevy","chevrolet/chevy","autos-chevrolet-cheyenne","chevrolet-cheyenne","chevrolet/cheyenne","autos-chevrolet-classic","chevrolet-classic","chevrolet/classic","autos-chevrolet-cobalt","chevrolet-cobalt","chevrolet/cobalt","autos-chevrolet-combo","chevrolet-combo","chevrolet/combo","autos-chevrolet-corsa","chevrolet/corsa","autos-chevrolet-corsa-ii","chevrolet/corsa-ii","autos-chevrolet-corsa-wagon","autos-chevrolet-corvette","chevrolet/corvette","autos-chevrolet-cruze","chevrolet/cruze","autos-chevrolet-d-20","autos-chevrolet-gmc","chevrolet-gmc","autos-chevrolet-grand--vitara","chevrolet-grand--vitara","autos-chevrolet-blazer","chevrolet-blazer","autos-chevrolet-impala","chevrolet/impala","autos-chevrolet-luv","autos-chevrolet-meriva","autos-chevrolet-montana","chevrolet/montana","autos-chevrolet-monza","chevrolet/monza","autos-chevrolet-onix","chevrolet/onix","autos-chevrolet-prisma","chevrolet/prisma","autos-chevrolet-s-10","chevrolet/s-10","autos-chevrolet-sapo","chevrolet/sapo","autos-chevrolet-silverado","chevrolet/silverado","autos-chevrolet-sonic","chevrolet/sonic","autos-chevrolet-spark","chevrolet/spark","autos-chevrolet-spin","chevrolet/spin","autos-chevrolet-tahoe","chevrolet/tahoe","autos-chevrolet-trailblazer","chevrolet/trailblazer","autos-chevrolet-trailblazer","chevrolet/trailblazer","autos-chevrolet-vectra","chevrolet/vectra","autos-chevrolet-zafira","chevrolet/zafira","autos-citroën-2cv","autos-citroën-3cv","citroën/3cv","autos-citroën-berlingo","autos-citroën-c15","autos-citroën-c3","autos-citroën-c3-aircross","citroen/c3-aircross","autos-citroën-c3-picasso","citroën/c3-picasso","autos-citroën-c4","citroën/c4","autos-citroën-c4-grand-picasso","autos-citroën-c4-picasso","autos-citroën-c5","citroën/c5","autos-citroën-cx","citroën/cx","autos-citroën-ds3","citroën/ds3","autos-citroën-ds4","citroën/ds4","autos-citroën-grand-c4-picasso-2014","citroen/grand-c4-picasso-2014","autos-citroën-jumper","citroën/jumper","autos-citroën-mehari","citroën/mehari","autos-citroën-nuevo-c3","citroën/nuevo-c3","autos-fiat-duna","fiat/duna","autos-fiat-idea","fiat/idea","autos-fiat-palio","fiat/palio","autos-fiat-siena","fiat/siena","autos-fiat-uno","fiat/uno","autos-ford-escort","ford/escort","autos-citroën-olt-cit","citroën-olt-cit","picasso","autos-citroën-saxo","citroën-saxo","citroën/saxo","autos-citroën-xsara","citroën-xsara","citroën/xsara","autos-citroën-xsara-picasso","citroën-xsara-picasso","citroën/xsara-picasso","autos-citroën-zx","citroën/zx","autos-fiat-1100","fiat/1100","autos-fiat-125","autos-fiat-128","fiat-128","fiat/128","autos-fiat-133","-fiat-133","fiat/133","autos-fiat-147","fiat/147","fiat-147","autos-fiat-1500","fiat/1500","autos-fiat-1600","fiat-1600","fiat/1600","autos-fiat-500","fiat/500","autos-fiat-500","autos-fiat-600","fiat-600","fiat/600","autos-fiat-800","fiat/800","fiat-800","autos-fiat-bravo","fiat/bravo","autos-fiat-brio","fiat/brio","fiat-brio","autos-fiat-cinquecento","fiat/cinquecento","autos-fiat-dobló","fiat-dobló","fiat/dobló","autos-fiat-doblo","fiat/doblo","fiat-doblo","autos-fiat-ducato","fiat-ducato","fiat/ducato","autos-fiat-fiorino","fiat/fiorino","autos-fiat-fiorino-qubo","fiat-fiorino-qubo","fiat/fiorino-qubo","autos-fiat-grand-siena","fiat-grand-siena","fiat/grand-siena","autos-fiat-linea","fiat/linea","autos-fiat-marea","fiat-marea","fiat/marea","autos-fiat-marea-weekend","fiat/marea-weekend","autos-fiat-uno-nuevo","fiat-uno-nuevo","fiat/uno-nuevo","autos-fiat-nuevo-palio","fiat-nuevo-palio","fiat/nuevo-palio","autos-fiat-palio-adventure","fiat/palio-adventure","autos-fiat-palio-weekend","fiat/palio-weekend","autos-fiat-punto","fiat/punto","autos-fiat-qubo","fiat/qubo","autos-fiat-regatta","fiat/regatta","autos-fiat-spazio","fiat/spazio","autos-fiat-stilo","fiat/stilo","autos-fiat-tempra","fiat/tempra","autos-fiat-tipo","fiat/tipo","autos-fiat-uno-evo","fiat/uno-evo","autos-fiat-vivace","fiat/vivace","autos-ford-4000","ford/4000","autos-ford-a","ford/a","autos-ford-coupe","ford/coupe","autos-ford-courier","ford/courier","autos-ford-ecosport","ford/ecosport","autos-ford-escape","ford/escape","autos-ford-escort","ford/escort","autos-ford-expedition","ford/expedition","autos-ford-explorer","ford/explorer","autos-ford-f-350","ford/f-350","autos-ford-f-100","ford/f-100","autos-ford-f-250","ford/f-250","autos-ford-fairlane","ford/fairlane","autos-ford-falcon","ford/falcon","autos-ford-fiesta","ford/fiesta","autos-ford-fiesta-kinetic","ford/fiesta-kinetic","autos-ford-fiesta-max","ford/fiesta-max","autos-ford-focus","ford/focus","autos-ford-focus-exe","ford/focus-exe","autos-ford-galaxy","ford/galaxy","autos-ford-ka","ford/ka","autos-ford-kuga","ford/kuga","autos-ford-mondeo","ford/mondeo","autos-ford-mustang","ford/mustang","autos-ford-nueva-ranger","ford/nueva-ranger","autos-ford-orion","ford/orion","autos-ford-pick-up","ford/pick-up","autos-ford-ranchero","ford/ranchero","autos-ford-ranger","ford/ranger","autos-ford-s-max","ford/s-max","autos-ford-sierra","ford/sierra","autos-ford-taunus","ford/taunus","autos-ford-transit","ford/transit","autos-nissan-200","nissan/200","autos-nissan-370z","nissan/370z","autos-nissan-bluebird","nissan/bluebird","autos-nissan-frontier","nissan/frontier","autos-nissan-march","nissan/march","autos-nissan-murano","nissan/murano","autos-nissan-new-frontier","nissan/new-frontier","autos-nissan-np300","nissan/np300","autos-nissan-pathfinder","nissan/pathfinder","autos-nissan-patrol","nissan/patrol","autos-nissan-pick-up","nissan/pick-up","autos-nissan-primera","nissan/primera","autos-nissan-sentra","nissan/sentra","autos-nissan-terrano-ii","nissan/terrano-ii","autos-nissan-tiida","nissan/tiida","autos-nissan-x-terra","nissan/x-terra","autos-nissan-versa","nissan/versa","autos-nissan-x-trail","nissan/x-trail","autos-renault-clio","renault/clio","autos-peugeot-206","peugeot/206","autos-renault-megane","renault/megane","autos-volkswagen-gol","volkswagen/gol","autos-peugeot-106","peugeot/106","autos-peugeot-205","peugeot/205","autos-peugeot-207","peugeot/207","autos-peugeot-207-compact","peugeot/207-compact","autos-peugeot-207-cc","peugeot/207-cc","autos-peugeot-208","peugeot/208","autos-peugeot-208-gti","peugeot/208-gti","autos-peugeot-3008","peugeot/3008","autos-peugeot-306","peugeot/306","autos-peugeot-307","peugeot/307","autos-peugeot-308","peugeot/308","autos-peugeot-308-cc","peugeot/308-cc","autos-peugeot-404","peugeot/404","autos-peugeot-405","peugeot/405","autos-peugeot-406","peugeot/406","autos-peugeot-407","peugeot/407","autos-peugeot-408","peugeot/408","autos-peugeot-5008","peugeot/5008","autos-peugeot-504","peugeot/504","autos-peugeot-504-pick-up","peugeot/504-pick-up","autos-peugeot-505","peugeot/505","autos-peugeot-508","peugeot/508","autos-peugeot-605","peugeot/605","autos-peugeot-607","peugeot/607","autos-peugeot-806","peugeot/806","autos-peugeot-807","peugeot/807","autos-peugeot-boxer","peugeot/boxer","autos-peugeot-expert","peugeot/expert","autos-peugeot-hoggar","peugeot/hoggar","autos-peugeot-partner-patagónica","peugeot/partner-patagónica","autos-peugeot-partner-furgón","peugeot/partner-furgón","autos-peugeot-rcz","peugeot/rcz","autos-renault-11","renault/11","autos-renault-12","renault/12","autos-renault-18","renault/18","autos-renault-19","renault/19","autos-renault-21","renault/21","renault/21-nevada","autos-renault-21-nevada","autos-renault-6","renault/6","autos-renault-9","renault/9","autos-renault-duphine","renault/duphine","autos-renault-duster","renault/duster","autos-renault-express","renault/express","autos-renault-fluence","renault/fluence","autos-renault-fuego","renault/fuego","autos-renault-grand-scenic","renault/grand-scenic","autos-renault-kangoo","renault/kangoo","autos-renault-kangoo-2","renault-kangoo-2","renault/kangoo-2","autos-renault-kangoo-express","renault-kangoo-express","renault/kangoo-express","autos-renault-koleos","renault-koleos","renault/koleos","autos-renault-laguna","renault-laguna","renault/laguna","autos-renault-latitude","renault-latitude","renault/latitude","autos-renault-logan","renault-logan","renault/logan","autos-renault-master","renault-master","renault/master","autos-renault-master-furgon","renault-master-furgon","renault/master-furgon","autos-renault-mégane-iii","renault-mégane-iii","renault/mégane-iii","autos-renault-rodeo","renault/rodeo","renault-rodeo","autos-renault-sandero","renault-sandero","renault/sandero","autos-renault-sandero-stepway","renault/sandero-stepway","autos-renault-scenic","renault/scenic","autos-renault-symbol","renault-symbol","renault/symbol","autos-renault-torino","renault-torino","renault/torino","autos-renault-trafic","renault/trafic","renault-trafic","autos-renault-trafic-furgon","renault-trafic-furgon","renault/trafic-furgon","autos-renault-twingo","renault-twingo","renault/twingo","autos-volkswagen-1500","volkswagen/1500","autos-volkswagen-amarok","volkswagen/amarok","autos-volkswagen-bora","volkswagen/bora","autos-volkswagen-caddy","volkswagen/caddy","autos-volkswagen-cc","volkswagen/cc","autos-volkswagen-crossfox","volkswagen/crossfox","autos-volkswagen-escarabajo","volkswagen/escarabajo","autos-volkswagen-fox","volkswagen/fox","autos-volkswagen-gacel","volkswagen/gacel","autos-volkswagen-gol-country","volkswagen/gol-country","autos-volkswagen-gol-power","volkswagen/gol-power","autos-volkswagen-gol-trend","volkswagen/gol-trend","autos-volkswagen-golf","volkswagen/golf","autos-volkswagen-kombi","volkswagen/kombi","autos-volkswagen-new-beetle","volkswagen/new-beetle","autos-volkswagen-passat","volkswagen/passat","autos-volkswagen-passat-cc","volkswagen-passat-cc","volkswagen/passat-cc","autos-volkswagen-passat-variant","volkswagen/passat-variant","autos-volkswagen-voyage","volkswagen-voyage","volkswagen/voyage","autos-volkswagen-vento-variant","volkswagen/vento-variant","autos-volkswagen-vento","volkswagen/vento","autos-volkswagen-transporter","volkswagen/transporter","autos-volkswagen-touareg","volkswagen/touareg","volkswagen-touareg","autos-volkswagen-pointer","volkswagen-pointer","volkswagen/pointer","autos-volkswagen-polo-classic","volkswagen-polo-classic","volkswagen/polo-classic","autos-volkswagen-polo","volkswagen-polo","volkswagen/polo","autos-volkswagen-santana","volkswagen-santana","volkswagen/santana","autos-volkswagen-saveiro","volkswagen-saveiro","volkswagen/saveiro","autos-volkswagen-scirocco","volkswagen-scirocco","volkswagen/scirocco","autos-volkswagen-senda","volkswagen-senda","volkswagen/senda","autos-volkswagen-sharan","volkswagen-sharan","volkswagen/sharan","autos-volkswagen-suran","volkswagen-suran","volkswagen/suran","autos-volkswagen-tiguan","volkswagen-tiguan","volkswagen/tiguan")),715);nvg23111.setCustomTargeting(Array(Array("www.ole.com.ar/futbol-ascenso","futbol-ascenso","www.ole.com.ar/futbol-primera/","futbol-primera","deportes.clarin.com/ascenso/")),802);nvg23111.setCustomTargeting(Array(Array("http://365.clarin.com/pedi-tu-tarjeta/")),871);';
    this.tagCode = 'nvg23111.makeNvgSmart=function(){var toReturn="";this.cokCache={};var nvg_parms=new Array("gender","age","education","interest","product","income","marital","prolook","cluster","custom","career","brand");for(nvg_i in nvg_parms){var nvg_tmp_arr="";var nvg_tmp_nme=nvg_parms[nvg_i];var nvg_tmp=this.getSegment(nvg_parms[nvg_i]);if(nvg_tmp.search(",")!=-1){var nvg_tmp_arr=nvg_tmp.split(",");toReturn=toReturn+"kw_"+nvg_tmp_nme+"="+nvg_tmp_arr.join("_")+";"}else if(nvg_tmp.search("-")!=-1){var nvg_tmp_arr=nvg_tmp.split("-");toReturn=toReturn+"kw_"+nvg_tmp_nme+"="+nvg_tmp_arr.join("_")+";"}else if(nvg_tmp!="")toReturn=toReturn+"kw_"+nvg_tmp_nme+"="+nvg_tmp+";"}return toReturn};nvg23111.setClusterClarin=function(reglas,customId){var nvg_name;for(nvg_name in reglas)if(window.location.href.search(reglas[nvg_name])<0)return;nvg23111.setCustom(customId)};nvg23111.setClusterClarin(Array("af_1=800&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=801&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=802&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=803&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=804&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=805&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=806&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=807&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=808&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=809&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=810&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=811&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("af_1=813&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=2&"),379);nvg23111.setClusterClarin(Array("Alquiler","GBA-Zona-Norte"),379);nvg23111.setClusterClarin(Array("af_1=800&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=801&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=802&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=803&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=804&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=805&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=806&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=807&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=808&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=809&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=810&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=811&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("af_1=813&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=3&"),635);nvg23111.setClusterClarin(Array("Alquiler","GBA-Zona-Oeste"),635);nvg23111.setClusterClarin(Array("af_1=800&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=801&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=802&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=803&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=804&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=805&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=806&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=807&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=808&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=809&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=810&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=811&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("af_1=813&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=4&"),570);nvg23111.setClusterClarin(Array("Alquiler","GBA-Zona-Sur"),570);nvg23111.setClusterClarin(Array("af_1=800&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=801&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=802&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=803&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=804&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=805&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=806&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=807&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=808&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=809&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=810&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=811&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("af_1=813&sp.af_2=817&sp.Pais=1&sp.RegionBusqueda=1&"),636);nvg23111.setClusterClarin(Array("Alquiler","Capital-Federal"),636);nvg23111.setClusterClarin(Array("af_1=800&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=801&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=802&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=803&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=804&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=805&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=806&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=807&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=808&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=809&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=810&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=811&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("af_1=813&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=2&"),571);nvg23111.setClusterClarin(Array("Venta","GBA-Zona-Norte"),571);nvg23111.setClusterClarin(Array("af_1=800&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=801&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=802&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=803&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=804&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=805&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=806&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=807&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=808&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=809&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=810&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=811&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("af_1=813&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=3&"),637);nvg23111.setClusterClarin(Array("Venta","GBA-Zona-Oeste"),637);nvg23111.setClusterClarin(Array("af_1=800&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=801&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=802&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=803&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=804&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=805&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=806&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=807&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=808&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=809&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=810&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=811&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("af_1=813&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=4&"),405);nvg23111.setClusterClarin(Array("Venta","GBA-Zona-Sur"),405);nvg23111.setClusterClarin(Array("af_1=800&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=801&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=802&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=803&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=804&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=805&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=806&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=807&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=808&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=809&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=810&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=811&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("af_1=813&sp.af_2=816&sp.Pais=1&sp.RegionBusqueda=1&"),638);nvg23111.setClusterClarin(Array("Venta","Capital-Federal"),638);nvg23111.toRubicon=function(){var nvgToRet={};var nvgSegSize=nvg23111.segments.length;var nvgX=0;var nvgAux="";for(nvgX=1;nvgX<nvgSegSize;nvgX++){nvgAux=nvg23111.getSegment(nvg23111.segments[nvgX]);if(nvgAux)nvgToRet["nvg_"+nvg23111.segments[nvgX]]=nvg23111.getSegment(nvg23111.segments[nvgX]).replace(/-/g,",")}return nvgToRet};function getSelectedValue(form,elementId){var elt=form[elementId];if(!elt)return null;return elt.value}if(window.location.href.search("clarin.com")>=0)try{var nvg_form=document.getElementById("provideMissingEmailForm");nvg_form.addEventListener("submit",function(){try{if(getSelectedValue(nvg_form,"gender-select")=="m")nvg23111.setCustom(884);else nvg23111.setCustom(885)}catch(ex){}})}catch(ex){}if(window.location.href.search("clarin.com")>=0)try{if(getGenDate("genero")=="m")nvg23111.setCustom(884);if(getGenDate("genero")=="f")nvg23111.setCustom(885)}catch(ex){}if(window.location.href.search("ole.com.ar")>=0)try{var nvg_form=document.getElementById("provideMissingEmailForm");nvg_form.addEventListener("submit",function(){try{if(getSelectedValue(nvg_form,"gender-select")=="m")nvg23111.setCustom(884);else nvg23111.setCustom(885)}catch(ex){}})}catch(ex){}if(window.location.href.search("ole.com.ar")>=0)try{if(getGenDate("genero")=="m")nvg23111.setCustom(884);if(getGenDate("genero")=="f")nvg23111.setCustom(885)}catch(ex){}if(window.location.href.search("grandt.clarin.com/html/regPaso1.html")>=0)try{var nvg_btn=document.getElementsByClassName("btn_registro")[0];var nvg_form=document.getElementsByTagName("form")[0];nvg_btn.addEventListener("click",function(){try{if(getSelectedValue(nvg_form,"sexo")=="1")nvg23111.setCustom(884);else nvg23111.setCustom(885)}catch(ex){}})}catch(ex){};';
    this.tag = 'custom:product:gender:age:marital:cluster:interest:income:education:brand';
    this.HighGranularity = true;

    this.coknm='nav'+this.account.toString();




    this.server = Array('navdmp.com','navdmp.com');

    this.segments = Array('','gender','age','education',
                      'marital','income','prolook',
                      'connection','city','region',
                      'country','cluster','custom',
                      'brand','interest','product','career');




    this.preLoad = function ()    
    {
        if(window.location.hostname.search(this.domain)==-1) this.domain = '';
        this.navdmp = this.getCookie(this.coknm) || false;
        if (this.navdmp) {
            var arr = this.navdmp.split('_');
            this.userId=arr[0];
            if(this.userId.indexOf('|')>=0){this.userId=this.userId.split('|');this.userSync='|'+this.userId[1];this.userId=this.userId[0];};
            this.control=arr[1];
            if(typeof(window.localStorage)=="object")
            {
                localnav = window.localStorage.getItem(this.coknm);
                if(localnav)
                {
                    try
                    {
                        localnav = localnav.split('_');
                        this.segmentKey=localnav[1].split(':');
                        this.segmentValue=localnav[2].split(':');
                    }catch(e){};
                }
            }
            if(!this.segmentKey)
            {
                if (arr[2]) this.segmentKey=arr[2].split(':');
                if (arr[3]) this.segmentValue=arr[3].split(':');
            }

        };
        if (this.tagCode) this.include('','script',this.tagCode);    
    };
    
    this.load = function ()
    {
        if(!this.navdmp)
            this.preLoad();

         if ( !this.userId || this.tagManagerCode || this.control!=this.datestr() || this.getParameter('navegg_debug')=='1' ) 
        {
            var url = '/usr?v=' + this.version;
            url += '&acc=' + this.account;
            if ( (!this.control) || (this.control != this.datestr() ) ) { url+='&upd=1';this.parameter +='&upd=1'; }
            if (this.userId) url+='&id=' + this.userId; else { url += '&new=1'; this.parameter+='&new=1';}
            if (!this.wantString) url += '&wst=0';
            if (this.wantCustom) url += '&wct=1';
            if (this.getParameter('navegg_debug')=='1') url+='&rdn='+parseInt(Math.random()*1e8);
    
             if (!(this.leave&1)) this.include('//' + this.server[0] + url,'script');
                        else if(this.tagManagerCode) this.include('','script',this.tagManagerCode);
        };
        if(this.navdmp) 
                {
                       if (!(this.leave&2) && this.getParameter('navegg_debug')!='1') this.saveRequest(this.userId);
                };
                if( typeof(this.tagSync) == "function" ) this.tagSync();
    
    };

    this.start = function (id,keys,values)
    {
        if ( ((this.userId!=id)  || (this.control != this.datestr())) && id!='' )  {
            this.setCookie(this.coknm,id +this.userSync+ '_' + this.datestr() );
        };
        if(keys && values) this.tuple = keys + '_' + values;
                if(this.tuple) this.saveLocal(this.coknm,id+'_'+this.tuple);
        if (keys) this.segmentKey=keys.split(':');
        if (values) this.segmentValue=values.split(':');
        if (this.wantCookie && keys && values) this.cokCustom(id+this.userSync);
        if( typeof(this.cokCustomOld) == "function" ) this.cokCustomOld(id);
        if (this.tagManagerCode) this.include('','script',this.tagManagerCode);    
                if (!this.navdmp){if (!(this.leave&2)  && this.getParameter('navegg_debug')!='1') this.saveRequest(id);};
        if( typeof(this.dataCustom) == "function" ) this.dataCustom();
        if(typeof navegg_callback=="function" && (this.control != this.datestr()))
            try{ navegg_callback(); } catch(e) {};
    
    };

    this.setCookie = function (fld,vle,ttl)
    {
    var ltd='';
    if (this.domain) ltd = ';domain=' + this.domain;
    var d = new Date();
    if(ttl!=ttl || !ttl) ttl=365;
    d.setTime(d.getTime()+(ttl*24*60*60*1000));
    var ttl = d.toGMTString();
    document.cookie = fld + "=" + vle + ";expires=" + ttl + ";path=/" + ltd;
    };

    this.include = function (src, inctype, html, nvgasync)
    {
        if (inctype == '' || inctype == undefined) inctype="script";
        if (nvgasync === '' || nvgasync === undefined) nvgasync=true;
        var c=document.createElement(inctype);
        if (inctype == 'script')   c.type="text/javascript";
        if(html) c.text = html;
        else     c.src = src;
        c.async = nvgasync;

        var p = document.getElementsByTagName('script')[0];
        p.parentNode.insertBefore(c, p);
    };
    
    this.getCookie = function (name)
    {
        var start = document.cookie.indexOf( name + "=" );
        var len = start + name.length + 1;
        if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) return null;
        if ( start == -1 ) return null;
        var end = document.cookie.indexOf( ";", len );
        if ( end == -1 ) end = document.cookie.length;
        return unescape( document.cookie.substring( len, end ) );
    };

    this.getSegment = function ( fld )
    {
    if(fld in this.cokCache) return this.cokCache[fld]||'';
    var cpos = new Array(),segpa,segpb,rtn='',x=0;
    if (!this.segmentValue) {
        var ckcnt;
        cpos[0]=0;cpos[1]=1;
        if(!(ckcnt=this.tuple)) {
                cpos[0]=2;cpos[1]=3;
                if (!(ckcnt = this.navdmp)) { return ''; };
        };
        ckcnt = ckcnt.split('_');
        try {
        this.segmentKey = ckcnt[cpos[0]].split(':');
        this.segmentValue = ckcnt[cpos[1]].split(':'); 
        } catch(e) {return ''};
    };
    segpa = this.findOf(fld,this.segments);
    if (segpa) segpb = this.findOf(segpa.toString(),this.segmentKey );
    if (segpb>=0) rtn = this.segmentValue[ segpb ];
    if(rtn==undefined)return '';
    rtn = rtn.indexOf(';')>=0 ? rtn.split(';').join('-') : rtn;
    if(rtn.indexOf('-')>=0){
            rtnt = rtn.split('-');
            rtnf = new Array();
    for(x=0;x in rtnt;x++)
                    if(rtnt[x]!='' && rtnt[x]!='undefined')
                            rtnf.push(rtnt[x]);
            rtn = rtnf.join('-');
    };
        this.cokCache[fld] = rtn;
        return rtn;
    };
    
    this.datestr = function ()
    {
        var d = new Date();
        return (d.getMonth().toString() + d.getDate().toString()) ;
    };
    
    this.getParameter=function(fld){
      if(!this.qry){
        this.qry = {};
        prmstr = window.location.search.substr(1);
        prmarr = prmstr.split ("&");
        for(var i = 0; i < prmarr.length; i++){
          tmparr = prmarr[i].split("=");
          this.qry[tmparr[0]] = tmparr[1];
        };
      };
      return this.qry[fld] || '';
    };

    this.cokCustom = function (id)
    {
                var ckc = ':'+this.tag+':';
                var cok = new Array();
                cok[0]  = new Array();
                cok[1]  = new Array();
                var str,paA,paB,cokPos,y;str=paA=paB = '';y=0;
                cokPos = this.HighGranularity ? 1 : 0;
                for (x=0;this.segmentKey[x];x++)
                {
                    if(ckc.search(':'+this.segments[this.segmentKey[x]]+':') == -1) continue;
                    paA = this.segmentKey[x];
                    paB =  this.segmentValue[x] || '';
                    if(paB=='') continue;
                    cok[0][y]   = paA;
                    cok[1][y]   = paB;
                    if(paB.search('-')>=0 || paB.search(';')>=0)
                    {
                        if(paB.search(';')>0) paB = paB.split(';')[cokPos];
                        var ncok = new Array();
                        var nmac = paB.split('-');
                        for(h=0;nmac[h]&&h<this.maxCriteria;h++)
                            ncok[h] = nmac[h];
                        cok[1][y] = ncok.join('-');
                    };
                    y++;
                };
                str = cok[0].join(':').replace(/;/g,'') + '_' + cok[1].join(':').replace(/;/g,'');
                this.setCookie(this.coknm,id + '_' + this.datestr() + '_' + str);

    };

    this.saveRequest = function(profile)
    {
            var a;
            this.parameter += '&id=' + profile + this.userSync;
            if (this.account) this.parameter += '&acc=' + this.account;
            if (this.product) this.parameter += '&prd=' + this.product;
            if (this.category) this.parameter += '&cat=' + this.category;
            if (this.url) this.parameter += '&url=' + escape(this.url);
            if (document.referrer) this.parameter += '&ref=' + escape(document.referrer);
            this.parameter += '&tit=' + escape(document.title);
            if(a=this.getCookie('__utmz')) this.parameter += '&utm=' + escape(a);
            this.include('//' + this.server[1] + this.parameter);
            if(typeof navegg_callback=="function" && (this.control == this.datestr()))
                try{ navegg_callback(); } catch(e) {};
    };

    this.setCustom = function(custom)
    {
        var toCus = '/req';
        toCus     += '?acc=' + this.account;
        if(this.userId)toCus    += '&usr=' + this.userId;
        toCus    += '&cus=' + custom;
        this.include('//' + this.server[1] + toCus);
    };

    this.doSync = function(version)
    {
        var cok = this.getCookie(this.coknm)||'';
        cok = cok.split('_');
        if(cok[0].search(/\|/)>=0)
        {
            cok[0] = cok[0].split('|');
            cok[0] = cok[0][0];
        };
        cok[0] +='|'+version;
        cok = cok.join('_');
        this.setCookie(this.coknm,cok);
    };

    this.saveLocal = function(id,data)
    {
        window.localStorage.setItem(id,data);
    };

    this.findOf = function(val,ar)
    {
    if(typeof(ar)!='object') return -1;
    for(x in ar) if(ar[x]==val) return x;
    return -1;
    };

    this.setCustomTargeting = function(rules,cusId){
     var nvg_pos_x,nvg_pos_y,nvg_or_arr,nvg_flag;
     for( nvg_pos_x=0;nvg_pos_x<rules.length;nvg_pos_x++){
         nvg_or_arr = rules[ nvg_pos_x ];
         nvg_flag = false;
         for(nvg_pos_y=0;nvg_pos_y<nvg_or_arr.length;nvg_pos_y++){
             if( window.location.href.search( nvg_or_arr[ nvg_pos_y ] )>=0 )
                 nvg_flag = true;
         }
         if(!nvg_flag) return false;
     }
     this.setCustom(cusId);
     return true;
    }

};
function nvgGetSegment (f)
{
    return nvg23111.getSegment(f);
};

function ltgc(s)
{
    return nvg23111.getSegment(s);
};

nvg23111.load();
