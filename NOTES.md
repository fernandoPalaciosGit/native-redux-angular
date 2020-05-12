- REDUX: patron de arquitectura de datos
- permite tener centralizado nuestro modelo de datos
- funnel de informacion en memoria, es sesion de usuario
- ngrx -> modulo de angular que permite integrar redux


- Precentes:
Nace a partir de la idea de FLUX: patron de diseño de datos en browsers que resulve la direccion del flujo de eventos. TOdas las acciones las maneja un *dispatcher que es quien manda al Store, y este es quien maneja la persistencia de datos, entonces las vistas se sincronizan con el store y responden ante sus cambios

VIEW ---> accion ---> DISPATCHER ---> STORE <---- VIEW (sinconizar componnentes)

un solo ciclo de informacion, dispatcher gestiona las acciones y el Store solo reacciona con el dispatcher

Como mejora a Flux (teoria): nace Redux (arguitectura basada en Flux)

ACCTIONS ----> REDUCER ----> STORE <---- subscribe VIEW
|||| 
dispatch VIEW


IMPLEMENTACION
Redux tiene una libreria nativa --> npm
cada framework tiene su utilidad adaptada al patron de diseño de esta libreria nativa 

MIGRACIONES
al ser una implementacion de diseño de software y no estar sujeta a versiones de frameworks (ademas cada uno suele tener su propia implementacion) es factible adaptar al patron de redux nuestra aplicacion por escenarios.

Para proyectos pequeños es sobreingenieria
Pero a medida que va creciendo, mejora en performance y en control de flujo de informacion

MANEJO DE REDUX --> control del estado de la aplcacion ---> ¿donde cuando y como ha pasado un estado a otro de la aplcacion?
- Estados de la Interfaz grafica: las aplicaicones mas complejes logran setear estados o versiones de la interfaz dependiendo del modelo de la Stpre
- Respuestas de servidor: almacenamos en Store los datos de la API o nustros datos de backenbd 
- Un solo Flujo de datos: se evitan muchos errores de side effect por no sabe rdonde se provocño un cambio en la app
    Store : unico estado de la aplicacion
    Actions: como cambio el estado
    Reducers: quien provoca el cambio de estado , son acciones puras, que no producen efectos secundarios, un solo estado de retorno


Sin redux, el estado de la aplcacion se mantiene a traves de la comunicacion entre componentes y contenedores (A traves de eventos o servicios que comunican datos). Con redux la persistencia esta en el Storage (unica fuente de datos), todos los componentes de presentacion se sincronizan con el estado del Store, y los controladores o componentes smart manipulan los datos y almacenan en el Store.

El STORAGE es de solo lectura, el estado de la aplicacion solo se manipula a traves de ACCIONES
hago DISPATCH al Storage --> se envia una ACCION --> el REDUCER la lee y la prepara --> se la envia al STORAGE para persistirla y cambiar el estado

-------> REDUCER - acciones puras <-------------
 parametros:    - ACCION
                - ESTADO ANTIGUO

cuando el reducer no encuentra ninguna logica de manipuolacion de dato de entrada (no existe el Action), siempre devuelve el mismo estado

un reducer se vuelve un switch inmenso, que procesa diferenctes acciones (action.type) -> manipula el dato (en funcion del payload) -> retorna un nuevo estado (o si no encuentra una accion, retorna el antiguo)
