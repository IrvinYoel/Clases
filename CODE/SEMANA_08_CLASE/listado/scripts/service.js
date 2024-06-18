//Tener el código que me permita obtener los datos

const obtenerUsuarios = async () => {
  try {
    const respuesta = await fetch("https://reqres.in/api/users?page=2");
    // console.log("RESPUESTA", respuesta);
    console.log({ respuesta }); // console.log({ respuesta: respuesta });
  } catch (error) {
    console.log(error);
  }
};

export { obtenerUsuarios };
